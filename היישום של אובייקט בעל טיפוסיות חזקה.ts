/* https://gemini.google.com/gem/fc27b6e02612/40ac7ce0c92b10ec

הסברים ודגשים ליישום
הפרדה בין מפתחות לערכים: יצרנו את FunctionMap. זה מאפשר לך לנהל במקום אחד את ה"חוזה" של כל פונקציה. אם בעתיד תוסיף מפתח ל-namesOptions, ה-TypeScript יתריע מיד שחסרה הגדרה ב-FunctionMap.

Mapped Types: הביטוי [K in NamesType] עובר על כל האיברים ב-Union שנוצר מהמערך. זה מבטיח שאם הגדרת מפתח, אתה חייב לממש אותו בדיוק לפי הטיפוס שנקבע לו.

מניעת טעויות כתיב: מכיוון ש-ObjectWithNames נגזר ישירות מהקבועים שלך, לא ניתן להוסיף לאובייקט פונקציות שלא הוגדרו מראש, מה שמונע "זיהום" של האובייקט.
*/


// 1. הגדרת המפתחות כקבוע
const namesOptions = ['setItems', 'clearItems'] as const;
type NamesType = typeof namesOptions[number];

// 2. הגדרת ממשק (Interface) שממפה בין שם הפונקציה לחתימה שלה
// זה השלב הקריטי שמונע שימוש ב-any
interface FunctionMap {
    setItems: (items: any[]) => void;
    clearItems: () => void;
}

// 3. יצירת הטיפוס הסופי באמצעות Mapped Type
// הטיפוס מוודא שכל מפתח שקיים ב-NamesType חייב להופיע ועם הטיפוס הנכון מ-FunctionMap
type ObjectWithNames = {
    [K in NamesType]: FunctionMap[K];
};

// 4. מימוש האובייקט
const objectWithNames: ObjectWithNames = {
    'setItems': (items: any[]) => {
        console.log("Setting items:", items);
        // כאן תהיה הלוגיקה
    },
    'clearItems': () => {
        console.log("Items cleared");
    }
};

// בדיקה:
// objectWithNames.setItems([1, 2, 3]); // תקין
// objectWithNames.setItems(123); // שגיאת קומפילציה - מצפה למערך!
