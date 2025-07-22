import { Lazy } from "./Lazy";

/**
 * דוגמה לשימוש ב-Lazy עם פונקציית factory שמקבלת ארגומנטים.
 * הפונקציה מחזירה מחרוזת עם הערכים שהועברו.
 */
const t = new Lazy(
    //(arg1, arg2, dateNow) => `Hello(dateNowArg: ${dateNow}, dateNow:${Date.now()}), World! ${arg1}, ${arg2}`,
    ((arg1, arg2, dateNow) => `Hello(dateNowArg: ${dateNow}, dateNow:${Date.now()}), World! ${arg1}, ${arg2}`),
    //"arg1", "arg2", Date.now()
    ...["arg1", "arg2", Date.now()]
);

console.log(t.isEvaluated); // false

console.log(t.value); // Hello(dateNowArg: 1700000000000, dateNow:1700000000001), World! arg1, arg2
// הערך חושב כעת, כי זו הפעם הראשונה שאנחנו מבקשים את ה
console.log(t.isEvaluated); // true


// דוגמה לשימוש ב-map כדי לשנות את הערך המוחזר
// כאן אנחנו ממפים את הערך המוחזר כדי להמיר אותו לאותיות גדולות
const t2 = t.map(value => value!.toUpperCase());
console.log(t2.value); // HELLO(DATENOWARG: 1700000000000, DATENOW:1700000000001), WORLD! ARG1, ARG2

t.reset();
console.log(t.isEvaluated); // false

console.log(t.value); // Hello(dateNowArg: 1700000000000, dateNow:1700000000003), World! arg1, arg2
console.log(t.isEvaluated); // true

//t2.reset();??? // לא ניתן לאפס את t2 כי הוא תלוי ב-t,
// אבל ניתן לאפס את t כדי לחשב מחדש את הערך של t2
console.log(t2.value); // HELLO(DATENOWARG: 1700000000000, DATENOW:1700000000003), WORLD! ARG1, ARG2