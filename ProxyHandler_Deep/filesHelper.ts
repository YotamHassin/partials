// filesHelper.ts

import * as fs from 'fs'; // ייבוא מודול מערכת הקבצים של Node.js
import { Action } from 'myy-common'; // ייבוא סוג Action מתוך ספרייה חיצונית (myy-common)
//import { ActionFunc } from './helper'; // הערה: שורה זו מוערת בקוד המקורי

export type PathLike = fs.PathLike; // הגדרת טיפוס נוחות ל-PathLike של fs (נתיב קובץ/תיקייה)

/**
 * בודק אם נתיב קיים במערכת הקבצים.
 * @param wantedPath הנתיב לבדיקה (ברירת מחדל: הנתיב הנוכחי).
 * @returns true אם הנתיב קיים, false אחרת.
 */
export function existsSync(wantedPath: fs.PathLike = '.') {
    return fs.existsSync(wantedPath);
}

/**
 * כותב או דורס קובץ JSON עם נתונים.
 * הנתונים נהפכים למחרוזת JSON לפני הכתיבה.
 * @param fullPath הנתיב המלא לקובץ.
 * @param data הנתונים לכתיבה.
 */
export function writeJSONFileSync(fullPath: fs.PathLike, data: any): void {
    var str = JSON.stringify(data, null, 2); // הוספתי null, 2 לפורמט יפה יותר של JSON בקובץ
    fs.writeFileSync(fullPath, str); // כתיבה סינכרונית של המחרוזת לקובץ
}

/**
 * קורא את תוכן הקובץ כמחרוזת.
 * @param fillPath הנתיב המלא לקובץ.
 * @returns תוכן הקובץ כמחרוזת.
 */
export function getFile(fillPath: fs.PathLike): any {
    var data = fs.readFileSync(fillPath, "utf8"); // קריאה סינכרונית של הקובץ בקידוד UTF-8
    return data;
}

/**
 * קורא קובץ JSON וממיר את תוכנו לאובייקט TypeScript.
 * @param fillPath הנתיב המלא לקובץ.
 * @returns האובייקט המפורסר מה-JSON.
 */
export function getFileJSON<Typ>(fillPath: fs.PathLike): Typ {
    var fileData = getFile(fillPath); // קריאת נתוני הקובץ כמחרוזת
    //console.log('fileData', fileData); // הערה: שורה זו מוערת בקוד המקורי
    return JSON.parse(fileData) as Typ; // המרת מחרוזת ה-JSON לאובייקט
}

/**
 * מחלקה לטיפול באובייקט יחיד הנשמר בקובץ JSON.
 * היא מטפלת בטעינה, שמירה, ואתחול של האובייקט בקובץ.
 * המחלקה הזו מיועדת כעת לעבוד עם אובייקטים מכל עומק, בזכות שילובה עם מערכת הפרוקסי העמוק.
 */
export class FileObjectHandler<DefaultObjTyp extends Object> {
    // מתודה סטטית ליצירת מופע של FileObjectHandler בצורה נוחה (Factory method).
    static _<DefaultObjTyp extends Object>(fileName: fs.PathLike, defaultObj: DefaultObjTyp) {
        return new FileObjectHandler<DefaultObjTyp>(fileName, defaultObj);
    }

    private _fileName: fs.PathLike;
    /**
     * הנתיב לקובץ ה-JSON.
     */
    public get fileName(): fs.PathLike {
        return this._fileName;
    }

    private _defaultObj: DefaultObjTyp;
    /**
     * אובייקט ברירת המחדל שישמש לאתחול הקובץ אם הוא אינו קיים או פגום.
     */
    public get defaultObj(): DefaultObjTyp {
        return this._defaultObj;
    }

    /**
     * בונה חדש של FileObjectHandler.
     * @param fileName הנתיב לקובץ ה-JSON.
     * @param defaultObj אובייקט ברירת המחדל.
     */
    constructor(fileName: fs.PathLike, defaultObj: DefaultObjTyp) {
        this._fileName = fileName;
        this._defaultObj = defaultObj;
    }

    /**
     * כותב את האובייקט הנתון לקובץ ה-JSON.
     * זוהי המתודה שמשמשת לשמירת שינויים מתוך הפרוקסי.
     * @param objFromFile האובייקט לכתיבה.
     */
    public setJSON(objFromFile: DefaultObjTyp) { // שיניתי ל-public כדי שהפרוקסי יוכל לקרוא לה
        writeJSONFileSync(this.fileName, objFromFile);
    }

    /**
     * מאתחל את קובץ ה-JSON עם אובייקט ברירת המחדל.
     */
    private initJSON() {
        this.setJSON(this.defaultObj);
    }

    /**
     * קורא את האובייקט מקובץ ה-JSON.
     * @returns האובייקט המפורסר מהקובץ, או undefined אם הפירסור נכשל.
     */
    private getJSON(): DefaultObjTyp {
        try {
            return getFileJSON<DefaultObjTyp>(this.fileName);
        } catch (e) {
            console.error(`שגיאה בפירסור קובץ JSON: ${this.fileName}`, e);
            return undefined as any; // מחזיר undefined במקרה של שגיאת פירסור
        }
    }

    /**
     * בודק אם הקובץ קיים, ואם לא, מאתחל אותו עם אובייקט ברירת המחדל.
     */
    private notExistInit() {
        if (!existsSync(this.fileName)) {
            this.initJSON();
        }
    }

    /**
     * קורא את האובייקט מהקובץ. אם הקובץ אינו קיים או פגום, הוא מאותחל ונקרא מחדש.
     * @returns האובייקט הטעון מהקובץ.
     */
    public get(): DefaultObjTyp { // שיניתי ל-public כדי שהפרוקסי יוכל לקרוא לה
        var fileJSON: DefaultObjTyp;

        this.notExistInit(); // בודק אם הקובץ קיים ומאתחל אם לא

        fileJSON = this.getJSON(); // קורא את האובייקט מהקובץ

        // אם הקובץ קיים אך הפירסור נכשל (fileJSON == undefined), מאתחל ומנסה לקרוא שוב.
        if (fileJSON == undefined) {
            console.warn(`קובץ JSON פגום או ריק: ${this.fileName}. מאתחל עם אובייקט ברירת מחדל.`);
            this.initJSON();
            fileJSON = this.getJSON(); // קורא שוב לאחר האתחול
        }

        return fileJSON;
    }

    // הערה חשובה: המתודות הבאות (getProp, set, setProp, deleteProperty, וכו')
    // מיועדות במקור לטיפול באובייקטים שטוחים.
    // כאשר משתמשים בפרוקסי עמוק, הפרוקסי עצמו הוא זה שמיירט את הגישות והשינויים
    // בזיכרון, ולאחר מכן קורא ל-setJSON של FileObjectHandler לשמירת האובייקט כולו.
    // לכן, רוב המתודות הללו ב-FileObjectHandler לא ייקראו ישירות על ידי הפרוקסי
    // עבור גישה/שינוי מאפיינים, אלא רק get() ו-setJSON().

    /**
     * (פחות רלוונטי בשימוש עם פרוקסי עמוק)
     * מקבל מאפיין ספציפי מהאובייקט בקובץ. אם המאפיין לא קיים בקובץ, הוא נלקח מאובייקט ברירת המחדל ונשמר.
     * @param property המאפיין המבוקש.
     * @returns הערך של המאפיין.
     */
    getProp(property: PropertyKey) {
        let objFromFile = this.get();
        let valFromFile = Reflect.get(objFromFile, property);

        if (valFromFile == undefined) {
            let valFromBackup = Reflect.get(this.defaultObj, property);
            this.setProp(property, valFromBackup); // שומר את הערך החסר מה-defaultObj
            valFromFile = valFromBackup;
        }
        return valFromFile;
    }

    /**
     * (פחות רלוונטי בשימוש עם פרוקסי עמוק)
     * בודק אם לאובייקט בקובץ יש מאפיין מסוים.
     * @param property המאפיין לבדיקה.
     * @returns true אם קיים, false אחרת.
     */
    has(property: PropertyKey): boolean {
        let objFromFile = this.get();
        return Reflect.has(objFromFile, property);
    }

    /**
     * (פחות רלוונטי בשימוש עם פרוקסי עמוק)
     * מבצע פעולה על האובייקט וכותב אותו בחזרה לקובץ.
     * @param action פונקציית פעולה שתקבל את האובייקט ותשנה אותו.
     */
    set(action: Action<DefaultObjTyp>): void {
        let objFromFile = this.get();
        Reflect.apply(action, objFromFile, [objFromFile]); // הפעלת הפעולה על האובייקט
        this.setJSON(objFromFile); // שמירת האובייקט המעודכן
    }

    /**
     * (פחות רלוונטי בשימוש עם פרוקסי עמוק)
     * מגדיר ערך למאפיין ספציפי באובייקט וכותב אותו בחזרה לקובץ.
     * @param property המאפיין להגדרה.
     * @param value הערך להגדרה.
     */
    setProp(property: PropertyKey, value: any): void {
        this.set(objFromFile => {
            Reflect.set(objFromFile, property, value);
        });
    }

    /**
     * (פחות רלוונטי בשימוש עם פרוקסי עמוק)
     * מוחק מאפיין מהאובייקט בקובץ.
     * @param property המאפיין למחיקה.
     * @returns תוצאת המחיקה.
     */
    deleteProperty(property: PropertyKey) {
        let err = this.set(objFromFile => {
            Reflect.deleteProperty(objFromFile, property);
        });
        return err; // הערה: err תמיד יהיה undefined כאן, מכיוון ש-set לא מחזיר ערך
    }

    /**
     * (פחות רלוונטי בשימוש עם פרוקסי עמוק)
     * מחזיר את כל המפתחות (מאפיינים) של האובייקט בקובץ.
     * @returns מערך של מפתחות.
     */
    ownKeys(): PropertyKey[] {
        let objFromFile = this.get();
        return Reflect.ownKeys(objFromFile);
    }

    /**
     * (פחות רלוונטי בשימוש עם פרוקסי עמוק)
     * מגדיר מאפיין חדש או משנה מאפיין קיים באובייקט בקובץ עם תיאור מאפיין.
     * @param property המאפיין להגדרה.
     * @param attributes התיאור של המאפיין.
     * @returns true אם ההגדרה הצליחה, false אחרת.
     */
    defineProperty(property: PropertyKey, attributes: PropertyDescriptor): boolean {
        let booly: boolean = false;
        this.set(objFromFile => {
            booly = Reflect.defineProperty(objFromFile, property, attributes);
        });
        return booly;
    }

    /**
     * (פחות רלוונטי בשימוש עם פרוקסי עמוק)
     * מקבל את תיאור המאפיין (PropertyDescriptor) עבור מאפיין ספציפי מהאובייקט בקובץ.
     * @param property המאפיין המבוקש.
     * @returns תיאור המאפיין, או undefined אם לא נמצא.
     */
    getOwnPropertyDescriptor(property: PropertyKey): PropertyDescriptor | undefined {
        let objFromFile = this.get();
        let propertyDescriptor: PropertyDescriptor | undefined = Reflect.getOwnPropertyDescriptor(objFromFile, property);

        // אם קיים תיאור, ודא שהערך שלו מעודכן מהקובץ (דרך getProp)
        if (propertyDescriptor) {
            propertyDescriptor.value = this.getProp(property);
        }
        return propertyDescriptor;
    }

    /**
     * (פחות רלוונטי בשימוש עם פרוקסי עמוק)
     * מקבל את הפרוטוטיפ של האובייקט בקובץ.
     * @returns הפרוטוטיפ של האובייקט.
     */
    getPrototypeOf(): object | null {
        let objFromFile = this.get();
        return Reflect.getPrototypeOf(objFromFile);
    }

    /**
     * (פחות רלוונטי בשימוש עם פרוקסי עמוק)
     * מחזיר את כל המפתחות הניתנים לספירה (enumerable) של האובייקט בקובץ.
     * @returns מערך של מפתחות.
     */
    enumerate(): PropertyKey[] {
        let objFromFile = this.get();
        return Reflect.ownKeys(objFromFile); // Reflect.ownKeys מחזיר את כל המפתחות, כולל לא ניתנים לספירה.
                                            // ל-enumerate() בדרך כלל מצפים רק ל-enumerable.
                                            // אם יש צורך בסינון, יש לבצע זאת כאן.
    }
}