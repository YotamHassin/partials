import { create, StateCreator, StoreApi } from 'zustand';

// --- הגדרת פונקציות עזר לייצוא/ייבוא ---

// Type Guard עבור זיהוי אם אובייקט הוא Date
function isDate(value: any): value is Date {
  return value instanceof Date && !isNaN(value.valueOf());
}

// פונקציה כללית להמרת אובייקט ל-JSON עם טיפול ב-Date
export function convertStateToJson<T extends object>(state: T): string {
  return JSON.stringify(state, (key, value) => {
    if (isDate(value)) {
      return value.toISOString(); // ממיר תאריכים לפורמט ISO 8601
    }
    return value;
  });
}

// פונקציה כללית לטעינת JSON לאובייקט עם טיפול ב-Date
export function parseJsonToState<T extends object>(jsonString: string): T {
  return JSON.parse(jsonString, (key, value) => {
    // מזהה מחרוזות שנראות כמו תאריכים בפורמט ISO
    if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(value)) {
      const date = new Date(value);
      if (!isNaN(date.valueOf())) { // לוודא שתאריך חוקי
        return date;
      }
    }
    return value;
  });
}

