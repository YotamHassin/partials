// proxyHelper.ts

import { Action } from "myy-common";
import { FileObjectHandler } from "./filesHelper";

// נניח ש-FileObjectHandler מוגדר במקום אחר, לדוגמה:
/*
export interface FileObjectHandler<ProxyTyp extends object> {
    defaultObj: ProxyTyp;
    // ... מאפיינים/מתודות נוספות אם יש
}
*/

// ------------ ***** קובץ גנרי ***** ------------

// File Object Handler
function getFileProxyHandler<ProxyTyp extends object>(fileObjectHandler: FileObjectHandler<ProxyTyp>): ProxyHandler<ProxyTyp> {
    return {
        // טרפ get: נרשם כשניגשים למאפיין
        get: function (obj, prop, receiver) {
            console.log(`ניגשים למאפיין: ${String(prop)}`); // הודעת קונסול כשניגשים למאפיין

            const value = Reflect.get(obj, prop, receiver); // קבלת הערך האמיתי של המאפיין

            // אם הערך הוא אובייקט (ולא null או מערך), נחיל עליו פרוקסי באופן רקורסיבי
            if (value && typeof value === 'object' && !Array.isArray(value)) {
                // עוברים FileObjectHandler חדש עבור האובייקט המקונן, אם יש צורך,
                // או פשוט מעבירים את האובייקט המקונן ישירות לפרוקסי חדש.
                // לצורך הפשטות כאן, נפרוקסי את האובייקט המקונן ישירות.
                return new Proxy(value, getFileProxyHandler({ defaultObj: value } as FileObjectHandler<typeof value>));
            }

            return value; // החזרת הערך המקורי (או הפרוקסי של אובייקט מקונן)
        },
        // טרפ set: נרשם כשמאפיין משתנה
        set: function (obj, prop, value, receiver) {
            console.log(`מגדירים מאפיין: ${String(prop)} לערך:`, value); // הודעת קונסול כשמאפיין משתנה
            return Reflect.set(obj, prop, value, receiver); // הגדרת הערך בפועל
        },
        // טרפ deleteProperty: נרשם כשמאפיין נמחק
        deleteProperty: function (obj, prop) {
            console.log(`מוחקים מאפיין: ${String(prop)}`); // הודעת קונסול כשמאפיין נמחק
            return Reflect.deleteProperty(obj, prop); // מחיקת המאפיין בפועל
        }
    };
}

// File Object Proxy
export function getProxiedFileObject<ProxyTyp extends object>(fileObjectHandler: FileObjectHandler<ProxyTyp>): ProxyTyp {
    const handler = getFileProxyHandler(fileObjectHandler); // קבלת ההאנדלר לפרוקסי
    const proxiedObject: ProxyTyp = new Proxy(fileObjectHandler.defaultObj, handler); // יצירת הפרוקסי
    return proxiedObject; // החזרת האובייקט המפרוקסי
}

// --- דוגמת שימוש ---

// הגדרת initialObjType ו-initialObj להדגמה
export interface initialObjType {
    id: number;
    name: string;
    deep?: { name: string; nested?: { value: number } };
}

const initialObj: initialObjType = {
    id: 1,
    name: 'Foo Bar',
    deep: { name: 'some', nested: { value: 123 } }
};

const fileObjectHandler = FileObjectHandler._<initialObjType>('configFileName', initialObj);

const proxiedObject: initialObjType = getProxiedFileObject<initialObjType>(fileObjectHandler);

console.log('--- גישה ראשונית ---');
console.log(proxiedObject.name);
console.log(proxiedObject.deep?.name);
console.log(proxiedObject.deep?.nested?.value);

console.log('\n--- שינוי מאפיין ברמה העליונה ---');
proxiedObject.name = 'New Foo Bar';
console.log(proxiedObject.name);

console.log('\n--- שינוי מאפיין עמוק ---');
if (proxiedObject.deep) {
    proxiedObject.deep.name = 'New Deep Name';
}
console.log(proxiedObject.deep?.name);

console.log('\n--- שינוי מאפיין עמוק אף יותר ---');
if (proxiedObject.deep?.nested) {
    proxiedObject.deep.nested.value = 456;
}
console.log(proxiedObject.deep?.nested?.value);

console.log('\n--- הוספת מאפיין עמוק חדש ---');
if (proxiedObject.deep) {
    (proxiedObject.deep as any).newProp = 'אני חדש!'; // הוספת מאפיין חדש
}
console.log((proxiedObject.deep as any)?.newProp);

console.log('\n--- מחיקת מאפיין עמוק ---');
if (proxiedObject.deep) {
    delete (proxiedObject.deep as any).newProp;
}
console.log((proxiedObject.deep as any)?.newProp); // אמור להיות undefined