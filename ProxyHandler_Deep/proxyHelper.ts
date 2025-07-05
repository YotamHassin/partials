// proxyHelper.ts
// https://gemini.google.com/app/bbe8fbccdfd89355
import { FileObjectHandler } from "./filesHelper"; // ייבוא FileObjectHandler

// ------------ ***** קובץ גנרי ***** ------------

const instanceofNotDeep = <T extends object>(target: T): boolean => {
  return (
    typeof target !== "object" ||
    target === null ||
    target instanceof Date ||
    target instanceof RegExp ||
    target instanceof Map ||
    target instanceof Set ||
    target instanceof WeakMap ||
    target instanceof WeakSet ||
    target instanceof Promise // הוספת Promise למקרי קצה
  );
};

/**
 * פונקציית עזר פנימית ליצירת פרוקסי רקורסיבי על אובייקטים ומערכים.
 * היא משמשת בתוך עצמה כדי לוודא שכל אלמנט מקונן פרוקסיי.
 *
 * @param target האובייקט או המערך הנוכחי לפרוקסי.
 * @param rootObject הפניה לאובייקט הבסיס המקורי (האובייקט העליון ביותר) שמנוהל על ידי FileObjectHandler.
 * @param saveCallback פונקציית קריאה חוזרת (callback) שתופעל כדי לשמור את כל אובייקט הבסיס לקובץ
 * לאחר כל שינוי (set או deleteProperty).
 * @returns גרסה מפרוקסיית של ה-target.
 */
function createDeepProxy<T extends object>(
  target: T,
  rootObject: object,
  saveCallback: (obj: object) => void
): T {
  // אם ה-target אינו אובייקט, או שהוא null, או שהוא מופע של Date, RegExp, Map, Set, WeakMap, WeakSet,
  // (אובייקטים שבדרך כלל לא רוצים לפרוקסי באופן עמוק), פשוט נחזיר אותו כפי שהוא.
  // ניתן להרחיב את הרשימה הזו לפי הצורך עבור סוגים ספציפיים שלא צריכים פרוקסי.
  if (instanceofNotDeep(target)) {
    return target;
  }

  // אם האובייקט כבר פרוקסיי, נחזיר אותו כדי למנוע פרוקסינג כפול
  // (זה יכול לקרות במבנים עם הפניות מעגליות או גישות חוזרות לאותו אובייקט)
  // הערה: בדיקה זו פשוטה ואינה מושלמת עבור כל התרחישים של פרוקסי כפול,
  // אך היא מספקת הגנה בסיסית.
  if (Proxy.prototype.isPrototypeOf(target)) {
    return target;
  }

  const handler: ProxyHandler<T> = {
    // טרפ get: נרשם כשניגשים למאפיין
    get: function (obj, prop, receiver) {
      console.log(`[GET] גישה למאפיין: '${String(prop)}' באובייקט:`, obj);

      const value = Reflect.get(obj, prop, receiver);

      // אם הערך הוא אובייקט או מערך, ניצור לו פרוקסי רקורסיבי.
      // חשוב להעביר את rootObject ואת saveCallback הלאה לפרוקסי המקונן.
      if (value && typeof value === "object") {
        return createDeepProxy(value as any, rootObject, saveCallback);
      }

      return value; // החזרת הערך (או הפרוקסי של אובייקט/מערך מקונן)
    },

    // טרפ set: נרשם כשמאפיין משתנה
    set: function (obj, prop, value, receiver) {
      console.log(
        `[SET] מגדירים מאפיין: '${String(prop)}' לערך:`,
        value,
        `באובייקט:`,
        obj
      );

      // אם הערך החדש הוא אובייקט או מערך, ניצור לו פרוקסי רקורסיבי לפני הגדרתו.
      // זה מבטיח שגם אם מכניסים אובייקט/מערך חדש, הוא יהיה פרוקסיי.
      const newValue =
        value && typeof value === "object"
          ? createDeepProxy(value as any, rootObject, saveCallback)
          : value;

      const result = Reflect.set(obj, prop, newValue, receiver); // הגדרת הערך בפועל

      // אם ההגדרה הצליחה, נשמור את כל אובייקט הבסיס לקובץ
      if (result) {
        saveCallback(rootObject);
      }
      return result;
    },

    // טרפ deleteProperty: נרשם כשמאפיין נמחק
    deleteProperty: function (obj, prop) {
      console.log(`[DELETE] מוחקים מאפיין: '${String(prop)}' מאובייקט:`, obj);
      const result = Reflect.deleteProperty(obj, prop); // מחיקת המאפיין בפועל

      // אם המחיקה הצליחה, נשמור את כל אובייקט הבסיס לקובץ
      if (result) {
        saveCallback(rootObject);
      }
      return result;
    },

    // טרפ apply: נרשם כשפונקציה בפרוקסי נקראת (עבור אובייקטים מסוג פונקציה)
    apply: function (target, thisArg, argumentsList) {
      console.log(
        `[APPLY] פונקציה נקראת:`,
        target,
        `עם ארגומנטים:`,
        argumentsList
      );
      // חשוב להשתמש ב-thisArg המקורי של הפונקציה, אך לוודא שהוא מפרוקסיי אם הוא חלק מהמבנה
      const actualThisArg =
        thisArg && typeof thisArg === "object"
          ? createDeepProxy(thisArg as any, rootObject, saveCallback)
          : thisArg;
      return Reflect.apply(
        target as unknown as Function,
        actualThisArg,
        argumentsList
      );
    },

    // טרפ construct: נרשם כשמשתמשים ב-new על הפרוקסי (עבור אובייקטים מסוג קונסטרוקטור)
    construct: function (target, argumentsList, newTarget) {
      console.log(
        `[CONSTRUCT] קונסטרוקטור נקרא:`,
        target,
        `עם ארגומנטים:`,
        argumentsList
      );
      // יצירת מופע חדש ופרוקסינג שלו
      const newInstance = Reflect.construct(
        target as any,
        argumentsList,
        newTarget
      );
      return createDeepProxy(newInstance as any, rootObject, saveCallback);
    },

    // טרפ has: נרשם כשמשתמשים באופרטור 'in'
    has: function (target, prop) {
      console.log(
        `[HAS] בדיקת קיום מאפיין: '${String(prop)}' באובייקט:`,
        target
      );
      return Reflect.has(target, prop);
    },

    // טרפ ownKeys: נרשם כשמשתמשים ב-Object.keys(), Object.getOwnPropertyNames(), Object.getOwnPropertySymbols()
    ownKeys: function (target) {
      console.log(`[OWNKEYS] גישה למפתחות של אובייקט:`, target);
      return Reflect.ownKeys(target);
    },

    // טרפ defineProperty: נרשם כשמשתמשים ב-Object.defineProperty()
    defineProperty: function (target, prop, descriptor) {
      console.log(
        `[DEFINE_PROPERTY] הגדרת מאפיין: '${String(prop)}' עם תיאור:`,
        descriptor,
        `באובייקט:`,
        target
      );
      const result = Reflect.defineProperty(target, prop, descriptor);
      if (result) {
        saveCallback(rootObject); // שמירה לאחר הגדרת מאפיין חדש
      }
      return result;
    },

    // טרפ getOwnPropertyDescriptor: נרשם כשמשתמשים ב-Object.getOwnPropertyDescriptor()
    getOwnPropertyDescriptor: function (target, prop) {
      console.log(
        `[GET_OWN_PROPERTY_DESCRIPTOR] קבלת תיאור מאפיין: '${String(
          prop
        )}' באובייקט:`,
        target
      );
      const descriptor = Reflect.getOwnPropertyDescriptor(target, prop);
      // אם התיאור קיים ויש לו ערך, ודא שהערך עצמו מפרוקסיי אם הוא אובייקט
      if (
        descriptor &&
        "value" in descriptor &&
        descriptor.value &&
        typeof descriptor.value === "object"
      ) {
        descriptor.value = createDeepProxy(
          descriptor.value as any,
          rootObject,
          saveCallback
        );
      }
      return descriptor;
    },

    // טרפ getPrototypeOf: נרשם כשמשתמשים ב-Object.getPrototypeOf()
    getPrototypeOf: function (target) {
      console.log(`[GET_PROTOTYPE_OF] קבלת פרוטוטיפ של אובייקט:`, target);
      return Reflect.getPrototypeOf(target);
    },

    // טרפ setPrototypeOf: נרשם כשמשתמשים ב-Object.setPrototypeOf()
    setPrototypeOf: function (target, prototype) {
      console.log(
        `[SET_PROTOTYPE_OF] הגדרת פרוטוטיפ של אובייקט:`,
        target,
        `ל:`,
        prototype
      );
      const result = Reflect.setPrototypeOf(target, prototype);
      if (result) {
        saveCallback(rootObject); // שמירה לאחר שינוי פרוטוטיפ
      }
      return result;
    },

    // טרפ isExtensible: נרשם כשמשתמשים ב-Object.isExtensible()
    isExtensible: function (target) {
      console.log(`[IS_EXTENSIBLE] בדיקת הרחבה של אובייקט:`, target);
      return Reflect.isExtensible(target);
    },

    // טרפ preventExtensions: נרשם כשמשתמשים ב-Object.preventExtensions()
    preventExtensions: function (target) {
      console.log(`[PREVENT_EXTENSIONS] מניעת הרחבה של אובייקט:`, target);
      const result = Reflect.preventExtensions(target);
      if (result) {
        saveCallback(rootObject); // שמירה לאחר מניעת הרחבה
      }
      return result;
    },
  };

  return new Proxy(target, handler);
}

/**
 * פונקציה זו יוצרת אובייקט מפרוקסיי עמוק שמחובר ל-FileObjectHandler.
 * כל שינוי באובייקט המפרוקסיי (כולל שינויים עמוקים במערכים או אובייקטים מקוננים)
 * יגרום לשמירה אוטומטית של כל אובייקט הבסיס לקובץ.
 *
 * @param fileObjectHandler המופע של FileObjectHandler שינהל את הקובץ.
 * @returns אובייקט מפרוקסיי עמוק.
 */
export function getProxiedFileObject<ProxyTyp extends object>(
  fileObjectHandler: FileObjectHandler<ProxyTyp>
): ProxyTyp {
  // טוענים את האובייקט הראשוני מהקובץ. זהו אובייקט הבסיס (rootObject).
  const initialObject = fileObjectHandler.get();

  // מגדירים את פונקציית השמירה שתופעל על ידי הפרוקסי בכל שינוי.
  // פונקציה זו קוראת ל-setJSON של FileObjectHandler עם אובייקט הבסיס כולו.
  const saveCallback = (objToSave: object) => {
    fileObjectHandler.setJSON(objToSave as ProxyTyp);
  };

  // יוצרים את הפרוקסי העמוק על אובייקט הבסיס, ומעבירים לו את פונקציית השמירה.
  return createDeepProxy(initialObject, initialObject, saveCallback);
}

// --- דוגמת שימוש (דורש סביבת Node.js עם מודול 'fs') ---

// הגדרת initialObjType ו-initialObj להדגמה
export interface initialObjType {
  id: number;
  name: string;
  isActive: boolean;
  tags: string[];
  settings?: {
    theme: string;
    notifications: boolean;
    preferences: {
      sound: number;
      language: string;
      features: string[];
    };
  };
  userList?: { id: number; name: string }[];
  complexFunction?: (a: number, b: number) => number;
}

// אובייקט ברירת המחדל שישמש לאתחול הקובץ אם הוא לא קיים
const defaultData: initialObjType = {
  id: 1,
  name: "Default User",
  isActive: true,
  tags: ["admin", "developer"],
  settings: {
    theme: "dark",
    notifications: true,
    preferences: {
      sound: 50,
      language: "he",
      features: ["featureA", "featureB"],
    },
  },
  userList: [
    { id: 101, name: "Alice" },
    { id: 102, name: "Bob" },
  ],
  complexFunction: (a, b) => a + b,
};

// שם הקובץ שבו נשמור את הנתונים
const testFileName = "myAppData.json";

// יצירת מופע של FileObjectHandler
const appFileHandler = new FileObjectHandler<initialObjType>(
  testFileName,
  defaultData
);

// יצירת האובייקט המפרוקסיי שמחובר לקובץ
const proxiedAppConfig = getProxiedFileObject(appFileHandler);

// --- בדיקות ---
console.log("--- בדיקות פרוקסי עמוק עם שמירה לקובץ ---");

// 1. גישה ראשונית (יקרא מהקובץ או יאתחל)
console.log("\n--- 1. גישה ראשונית ---");
console.log("שם משתמש:", proxiedAppConfig.name);
console.log("תגית ראשונה:", proxiedAppConfig.tags[0]);
console.log("שפת מועדפת:", proxiedAppConfig.settings?.preferences.language);
console.log("משתמש ראשון ברשימה:", proxiedAppConfig.userList?.[0].name);
console.log("תוצאת פונקציה (5, 3):", proxiedAppConfig.complexFunction?.(5, 3));

// 2. שינוי מאפיין ברמה העליונה
console.log("\n--- 2. שינוי מאפיין ברמה העליונה ---");
proxiedAppConfig.name = "New App Name"; // יפעיל SET וישמור לקובץ
console.log("שם משתמש מעודכן:", proxiedAppConfig.name);

// 3. שינוי אלמנט במערך (רמה עליונה)
console.log("\n--- 3. שינוי אלמנט במערך (רמה עליונה) ---");
if (proxiedAppConfig.tags) {
  proxiedAppConfig.tags[1] = "tester"; // יפעיל SET וישמור לקובץ
  console.log("תגיות מעודכנות:", proxiedAppConfig.tags);
}

// 4. הוספת אלמנט למערך (רמה עליונה)
console.log("\n--- 4. הוספת אלמנט למערך (רמה עליונה) ---");
if (proxiedAppConfig.tags) {
  proxiedAppConfig.tags.push("admin"); // יפעיל SET (על אורך המערך) וישמור לקובץ
  console.log("תגיות לאחר הוספה:", proxiedAppConfig.tags);
}

// 5. שינוי מאפיין באובייקט מקונן
console.log("\n--- 5. שינוי מאפיין באובייקט מקונן ---");
if (proxiedAppConfig.settings?.preferences) {
  proxiedAppConfig.settings.preferences.language = "en"; // יפעיל SET וישמור לקובץ
  console.log(
    "שפה מועדפת מעודכנת:",
    proxiedAppConfig.settings.preferences.language
  );
}

// 6. שינוי אלמנט במערך בתוך אובייקט מקונן
console.log("\n--- 6. שינוי אלמנט במערך בתוך אובייקט מקונן ---");
if (proxiedAppConfig.settings?.preferences.features) {
  proxiedAppConfig.settings.preferences.features[0] = "newFeatureX"; // יפעיל SET וישמור לקובץ
  console.log(
    "פיצ'רים מעודכנים:",
    proxiedAppConfig.settings.preferences.features
  );
}

// 7. הוספת אובייקט חדש למערך של אובייקטים
console.log("\n--- 7. הוספת אובייקט חדש למערך של אובייקטים ---");
if (proxiedAppConfig.userList) {
  proxiedAppConfig.userList.push({ id: 103, name: "Charlie" }); // יפעיל SET וישמור לקובץ
  console.log("רשימת משתמשים מעודכנת:", proxiedAppConfig.userList);
}

// 8. שינוי מאפיין באובייקט בתוך מערך
console.log("\n--- 8. שינוי מאפיין באובייקט בתוך מערך ---");
if (proxiedAppConfig.userList && proxiedAppConfig.userList[0]) {
  proxiedAppConfig.userList[0].name = "Alice Smith"; // יפעיל SET וישמור לקובץ
  console.log("שם משתמש ראשון מעודכן:", proxiedAppConfig.userList[0].name);
}

// 9. מחיקת מאפיין
console.log("\n--- 9. מחיקת מאפיין ---");
delete (proxiedAppConfig as any).isActive; // יפעיל DELETE_PROPERTY וישמור לקובץ
console.log("האם isActive קיים?", "isActive" in proxiedAppConfig); // יפעיל HAS

// 10. הוספת מאפיין חדש
console.log("\n--- 10. הוספת מאפיין חדש ---");
(proxiedAppConfig as any).newGlobalProp = "Global Value"; // יפעיל SET וישמור לקובץ
console.log("מאפיין גלובלי חדש:", (proxiedAppConfig as any).newGlobalProp);

// 11. בדיקת ownKeys
console.log("\n--- 11. בדיקת ownKeys ---");
console.log("מפתחות אובייקט הבסיס:", Object.keys(proxiedAppConfig)); // יפעיל OWNKEYS

// 12. בדיקת Object.getOwnPropertyDescriptor
console.log("\n--- 12. בדיקת Object.getOwnPropertyDescriptor ---");
const desc = Object.getOwnPropertyDescriptor(proxiedAppConfig, "name"); // יפעיל GET_OWN_PROPERTY_DESCRIPTOR
console.log('תיאור המאפיין "name":', desc);

// 13. החלפת אובייקט מקונן שלם (יגרום לפרוקסינג מחדש של האובייקט החדש)
console.log("\n--- 13. החלפת אובייקט מקונן שלם ---");
if (proxiedAppConfig.settings) {
  proxiedAppConfig.settings = {
    theme: "light",
    notifications: false,
    preferences: {
      sound: 100,
      language: "fr",
      features: ["featureC"],
    },
  }; // יפעיל SET וישמור לקובץ
  console.log("הגדרות חדשות:", proxiedAppConfig.settings.preferences.language);
}

// 14. בדיקה נוספת לאחר החלפת האובייקט
console.log("\n--- 14. בדיקה נוספת לאחר החלפת האובייקט ---");
if (proxiedAppConfig.settings?.preferences) {
  proxiedAppConfig.settings.preferences.sound = 75; // יפעיל SET וישמור לקובץ (על האובייקט החדש)
  console.log(
    "סאונד מעודכן באובייקט החדש:",
    proxiedAppConfig.settings.preferences.sound
  );
}

// 15. בדיקת קריאה לפונקציה
console.log("\n--- 15. בדיקת קריאה לפונקציה ---");
if (proxiedAppConfig.complexFunction) {
  const funcResult = proxiedAppConfig.complexFunction(10, 20); // יפעיל APPLY
  console.log("תוצאת הפונקציה המורכבת (10, 20):", funcResult);
}

// 16. בדיקת Object.isExtensible
console.log("\n--- 16. בדיקת Object.isExtensible ---");
console.log(
  "האם ניתן להרחיב את האובייקט?",
  Object.isExtensible(proxiedAppConfig)
); // יפעיל IS_EXTENSIBLE

// 17. בדיקת Object.preventExtensions
console.log("\n--- 17. בדיקת Object.preventExtensions ---");
Object.preventExtensions(proxiedAppConfig); // יפעיל PREVENT_EXTENSIONS וישמור לקובץ
console.log(
  "האם ניתן להרחיב את האובייקט לאחר preventExtensions?",
  Object.isExtensible(proxiedAppConfig)
);

// 18. ניסיון להוסיף מאפיין לאחר preventExtensions (אמור להיכשל בשקט ב-strict mode)
console.log("\n--- 18. ניסיון להוסיף מאפיין לאחר preventExtensions ---");
try {
  (proxiedAppConfig as any).anotherNewProp = "Should fail"; // לא ישמור לקובץ
} catch (e) {
  if (e instanceof Error) {
    console.log("נכשל בהוספת מאפיין לאחר preventExtensions (צפוי):", e.message);
  } else {
    console.log("נכשל בהוספת מאפיין לאחר preventExtensions (צפוי):", e);
  }
}
console.log("האם anotherNewProp קיים?", "anotherNewProp" in proxiedAppConfig);

// 19. קריאה חוזרת לאובייקט מהקובץ כדי לוודא שהשינויים נשמרו
console.log(
  "\n--- 19. קריאה חוזרת לאובייקט מהקובץ כדי לוודא שהשינויים נשמרו ---"
);
const rawDataFromFile = appFileHandler.get();
console.log("נתונים גולמיים מהקובץ (name):", rawDataFromFile.name);
console.log("נתונים גולמיים מהקובץ (tags):", rawDataFromFile.tags);
console.log(
  "נתונים גולמיים מהקובץ (language):",
  rawDataFromFile.settings?.preferences.language
);
console.log(
  "נתונים גולמיים מהקובץ (userList[0].name):",
  rawDataFromFile.userList?.[0].name
);
console.log("האם isActive קיים בקובץ?", "isActive" in rawDataFromFile);
console.log(
  "האם newGlobalProp קיים בקובץ?",
  "newGlobalProp" in rawDataFromFile
);
