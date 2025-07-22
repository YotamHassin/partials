


/**
 * @typedef TState - סוג הנתונים של המצב שאנו בודקים ומעדכנים.
 * @typedef TContext - סוג הנתונים של ההקשר (context) שדרוש לבדיקות.
 */
export type CheckResult<TState> = {
    newState: TState;
    shouldContinue: boolean; // האם להמשיך לבדיקה הבאה או לחזור מוקדם
}

export type ConditionalCheck<TState, TContext> = (
    currentState: TState, 
    context: TContext
) => CheckResult<TState>;

/**
 * פונקציה גנרית ליישום בדיקות מותנות עם עצירה מוקדמת.
 * היא מריצה סדרת בדיקות, וכל בדיקה יכולה לעדכן את המצב ולהחליט אם להמשיך הלאה.
 * * @param initialState - המצב ההתחלתי שמתחילים איתו.
 * @param context - כל נתון נוסף שדרוש לבדיקות (למשל, positionIdx ו-positionIdx1).
 * @param checks - מערך של פונקציות בדיקה, כל אחת מחזירה CheckResult.
 * @returns המצב הסופי לאחר הבדיקות, או המצב ברגע העצירה המוקדמת.
 */
export function applyConditionalChecks<TState, TContext>(
    initialState: TState,
    context: TContext,
    checks: ConditionalCheck<TState, TContext>[]
): TState {
    let currentState: TState = { ...initialState };

    for (const check of checks) {
        const result = check(currentState, context);
        // default return for check, check OK, move on to next
        //  || { newState: currentState, shouldContinue: true };
        currentState = result.newState;
        if (!result.shouldContinue) {
            return currentState; // עצירה מוקדמת
        }
    }
    return currentState; // החזרת המצב הסופי אם כל הבדיקות עברו
}

