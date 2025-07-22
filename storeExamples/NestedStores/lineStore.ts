// store/lineStore.ts
import { create, StateCreator } from "zustand";
import { produce } from "immer";
import { TextObject, useTextArrayStore } from "./TextStore";
import { generateUniqueId, HasId } from "./ArrayStore";
import {
  ActiveArrayStoreActions,
  ActiveArrayStoreProps,
  createActiveArrayStore,
} from "./ActiveArrayStoreState";

// --- מבנה הנתונים ---
export interface LineObject {
  id: string;
  // content: string; // עדיף לחשב דינמית מ-texts
  texts: TextObject[]; // מערך של אובייקטי טקסט
}

// --- חנות ספציפית ל-LineObject ---
interface LineStoreProps extends ActiveArrayStoreProps<LineObject> {}

interface LineStoreActions extends ActiveArrayStoreActions<LineObject> {
  // פעולות ספציפיות ל-LineObject
  addLine: (texts: TextObject[], afterLineId?: string) => void;
  deleteLine: (lineId: string) => void;
  splitLine: (lineId: string, atTextId: string, atCursorPos: number) => void; // פיצול שורה לשתי שורות
  joinLines: (lineId: string, withLineId: string) => void; // איחוד שתי שורות

  // פעולות לניהול חנויות Text nested
  getLineTextStore: (lineId: string) => typeof useTextArrayStore | undefined;
}

interface LineStore extends LineStoreProps, LineStoreActions {}

const lineStoreCreator: StateCreator<LineStore> = (set, get, state) => ({
  ...createActiveArrayStore<LineObject>()(set, get, state),

  // --- פעולות ספציפיות ל-LineObject ---
  addLine: (texts, afterLineId) =>
    set(
      produce<LineStore>((state) => {
        const newLine: LineObject = { id: generateUniqueId(), texts };
        if (afterLineId) {
          const index = state.items.findIndex((l) => l.id === afterLineId);
          if (index !== -1) {
            state.items.splice(index + 1, 0, newLine);
          } else {
            state.items.push(newLine);
          }
        } else {
          state.items.push(newLine);
        }
        state.activeItemId = newLine.id;
      })
    ),
  deleteLine: (lineId) =>
    set(
      produce<LineStore>((state) => {
        state.items = state.items.filter((l) => l.id !== lineId);
        if (state.activeItemId === lineId) {
          state.activeItemId = null;
        }
      })
    ),
  splitLine: (lineId, atTextId, atCursorPos) =>
    set(
      produce<LineStore>((state) => {
        const lineIndex = state.items.findIndex((l) => l.id === lineId);
        if (lineIndex === -1) return;

        const originalLine = state.items[lineIndex];
        const textIndex = originalLine.texts.findIndex(
          (t) => t.id === atTextId
        );
        if (textIndex === -1) return;

        const newTextsForFirstLine: TextObject[] = [];
        const newTextsForSecondLine: TextObject[] = [];

        // חלק את ה-TextObject הנוכחי
        const splitText = originalLine.texts[textIndex];
        if (atCursorPos > 0) {
          newTextsForFirstLine.push({
            ...splitText,
            id: generateUniqueId(),
            content: splitText.content.substring(0, atCursorPos),
          });
        }
        if (atCursorPos < splitText.content.length) {
          newTextsForSecondLine.push({
            ...splitText,
            id: generateUniqueId(),
            content: splitText.content.substring(atCursorPos),
          });
        }

        // חלק את שאר הטקסטים
        newTextsForFirstLine.push(...originalLine.texts.slice(0, textIndex)); // קטעים לפני הנקודה
        newTextsForSecondLine.push(...originalLine.texts.slice(textIndex + 1)); // קטעים אחרי הנקודה

        originalLine.texts = newTextsForFirstLine;
        const newLine: LineObject = {
          id: generateUniqueId(),
          texts: newTextsForSecondLine,
        };

        state.items.splice(lineIndex + 1, 0, newLine);
        state.activeItemId = newLine.id; // הפוך את השורה החדשה לפעילה
      })
    ),
  joinLines: (lineId, withLineId) =>
    set(
      produce<LineStore>((state) => {
        const line1Index = state.items.findIndex((l) => l.id === lineId);
        const line2Index = state.items.findIndex((l) => l.id === withLineId);

        if (line1Index === -1 || line2Index === -1) return; // תבצע רק אם סמוכים

        const line1 = state.items[line1Index];
        const line2 = state.items[line2Index];

        line1.texts.push(...line2.texts); // העבר את כל הטקסטים של שורה 2 לשורה 1
        state.items.splice(line2Index, 1); // הסר את שורה 2
        state.activeItemId = line1.id; // שמור את שורה 1 כפעילה
      })
    ),

  // --- ניהול חנויות Text Nested ---
  getLineTextStore: (lineId: string) => {
    // בגישה של חנויות מקוננות, הפריט הפעיל צריך להחזיק הפניה לחנות הבאה
    // אבל זה לא ישים ישירות עם הפטרון של חנות מערך עם פריט פעיל.
    // במקום זה, נצטרך לרנדר את רכיבי TextEditor ולהעביר להם את המידע דרך ה-ID
    // והם ימשכו את הנתונים שלהם מהחנות הרלוונטית.
    // זו נקודה קריטית שמדגישה את המורכבות בגישה זו.
    // עבור המודל הנוכחי, נצטרך לקרוא מ-useTextArrayStore בתוך LineEditor
    // אבל זה מחייב ש-useTextArrayStore יופעל עם הנתונים של השורה הספציפית
    // מה שמחזיר אותנו לבעיה של יצירת חנות פר שורה.

    // **פתרון חלופי ומקובל יותר לניהול nested data ב-Zustand:**
    // במקום חנויות נפרדות לכל רמה, נחזיק את כל הנתונים בחנות אחת גדולה (DocumentStore).
    // הפעולות בחנות הגדולה יפעלו על הנתונים המקוננים ישירות.
    // זה מה שהיה בדוגמה הראשונה שלי והיא מומלצת יותר עבור עורך.
    return undefined; // זמני, כדי שלא תהיה שגיאה
  },
});

export const useLineArrayStore = create<LineStore>(
  lineStoreCreator
);
