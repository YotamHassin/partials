import { applyConditionalChecks, ConditionalCheck } from "./ConditionalCheck";

// מיקום הסמן בעורך - נשתמש ב-IDs לניווט
export interface PositionIdx {
    paragraphIdx: string;
    lineIdx: string;
    textIdx: string;
    cursorPos: number; // מיקום הסמן בתוך ה-content של ה-TextObject
}

type ActivePositionIdx = {
    isActiveParagraph: boolean;
    isActiveLine: boolean;
    isActiveText: boolean;
}

const ActiveFalse: ActivePositionIdx = { isActiveParagraph: false, 
        isActiveLine: false, isActiveText: false }

/**
 * @function isActive
 * פונקציה לבדוק אם המיקום הנוכחי פעיל עבור אובייקט נתון.
 */
export const isActive = (positionIdx: PositionIdx | undefined, positionIdx1: Partial<PositionIdx>) => {
    let res = { ...ActiveFalse } // שימוש ב-let כדי שנוכל לעדכן את res
    if (!positionIdx) return res;

    const isActiveParagraph = 
        positionIdx.paragraphIdx === positionIdx1.paragraphIdx;
    
    if (!isActiveParagraph) return res;
    res = { ...res, isActiveParagraph }

    const isActiveLine = isActiveParagraph &&
        positionIdx.lineIdx === positionIdx1.lineIdx;
    
    if (!isActiveLine) return res;
    res = { ...res, isActiveLine }
    
    const isActiveText = isActiveLine &&
        positionIdx.textIdx === positionIdx1.textIdx;
    
    if (!isActiveText) return res;
    
    return { ...res, isActiveText } // כאן אפשר לעדכן ישירות ולחזור
};




// --- שימוש בפונקציה הגנרית עם הקוד הקיים שלך ---

// הגדרת הקונטקסט עבור הפונקציה הגנרית
// the inner func parameters
//type IsActiveContext = Parameters<isActive>;
type IsActiveContext = { positionIdx: PositionIdx | undefined; 
    positionIdx1: Partial<PositionIdx>; }

// בדיקות ספציפיות עבור isActive, מותאמות למבנה ה-ConditionalCheck
const isActiveChecks: ConditionalCheck<ActivePositionIdx, IsActiveContext>[] = [
    (currentState, context) => {
        if (!context.positionIdx) {
            return { newState: { ...ActiveFalse }, shouldContinue: false }; // אם אין positionIdx, תחזיר false והפסק
        }
        // ממשיכים עם הבדיקות הבאות רק אם positionIdx קיים
        return { newState: currentState, shouldContinue: true }; 
    },
    (currentState, context) => {
        const { positionIdx, positionIdx1 } = context;
        // ביצענו כבר בדיקה ש-positionIdx קיים, אז אפשר להשתמש בו בבטחה
        const isActiveParagraph = positionIdx!.paragraphIdx === positionIdx1.paragraphIdx;
        
        if (!isActiveParagraph) {
            return { newState: { ...ActiveFalse }, shouldContinue: false }; // עצירה מוקדמת
        }
        return { newState: { ...currentState, isActiveParagraph }, shouldContinue: true };
    },
    (currentState, context) => {
        const { positionIdx, positionIdx1 } = context;

        // הבדיקה הקודמת הבטיחה ש-isActiveParagraph הוא true ושהוא כלול ב-currentState
        const isActiveLine = currentState.isActiveParagraph &&
                             positionIdx!.lineIdx === positionIdx1.lineIdx;

        if (!isActiveLine) {
            return { newState: currentState, shouldContinue: false }; // עצירה מוקדמת
        }
        return { newState: { ...currentState, isActiveLine }, shouldContinue: true };
    },
    (currentState, context) => {
        const { positionIdx, positionIdx1 } = context;
        // הבדיקה הקודמת הבטיחה ש-isActiveLine הוא true ושהוא כלול ב-currentState
        const isActiveText = currentState.isActiveLine &&
                             positionIdx!.textIdx === positionIdx1.textIdx;
        
        // כאן, אם isActiveText הוא false, אנחנו כבר לא צריכים להמשיך כי זו הבדיקה האחרונה
        // אבל חשוב לעדכן את המצב כמו שצריך לפני החזרה.
        return { newState: { ...currentState, isActiveText }, shouldContinue: isActiveText }; 
        // אם isActiveText הוא false, shouldContinue יהיה false ואז הפונקציה הגנרית תחזיר
    }
];

// שכתוב הפונקציה isActive לשימוש בפונקציה הגנרית
export const isActiveGeneric = (positionIdx: PositionIdx | undefined, positionIdx1: Partial<PositionIdx>): ActivePositionIdx => {
    const context: IsActiveContext = { positionIdx, positionIdx1 };
    return applyConditionalChecks(ActiveFalse, context, isActiveChecks);
};

// --- דוגמאות שימוש ---
const p1: PositionIdx = { paragraphIdx: 'p1', lineIdx: 'l1', textIdx: 't1', cursorPos: 5 };
const p11: Partial<PositionIdx> = { paragraphIdx: 'p1', lineIdx: 'l1', textIdx: 't1' };
const p2: Partial<PositionIdx> = { paragraphIdx: 'p1', lineIdx: 'l1', textIdx: 't2' }; // טקסט שונה
const p3: Partial<PositionIdx> = { paragraphIdx: 'p1', lineIdx: 'l2' }; // שורה שונה
const p4: Partial<PositionIdx> = { paragraphIdx: 'p2' }; // פסקה שונה

console.log('isActiveGeneric(p1, p11):', isActiveGeneric(p1, p11)); 
// Expected: { isActiveParagraph: true, isActiveLine: true, isActiveText: true } (סיום בהצלחה את כל הבדיקות)

console.log('isActiveGeneric(p1, p2):', isActiveGeneric(p1, p2)); 
// Expected: { isActiveParagraph: true, isActiveLine: true, isActiveText: false } (עצירה בתא הטקסט)

console.log('isActiveGeneric(p1, p3):', isActiveGeneric(p1, p3)); 
// Expected: { isActiveParagraph: true, isActiveLine: false, isActiveText: false } (עצירה בשורת הטקסט)

console.log('isActiveGeneric(p1, p4):', isActiveGeneric(p1, p4)); 
// Expected: { isActiveParagraph: false, isActiveLine: false, isActiveText: false } (עצירה בפסקה)

console.log('isActiveGeneric(undefined, p2):', isActiveGeneric(undefined, p2));
// Expected: { isActiveParagraph: false, isActiveLine: false, isActiveText: false } (עצירה בהתחלה)