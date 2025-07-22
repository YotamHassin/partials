import { create, StateCreator } from "zustand";
import { ActiveArrayStoreActions, ActiveArrayStoreProps, createActiveArrayStore } from "./ActiveArrayStoreState";
import { produce } from "immer";
import { generateUniqueId, HasId } from "./ArrayStore";

// --- מבנה הנתונים ---
export interface TextObject extends HasId {
    //id: string; // מזהה ייחודי
    content: string; // תוכן הטקסט
    isBold?: boolean; // לדוגמה
    // ...מאפייני עיצוב נוספים
}


// --- חנות ספציפית ל-TextObject ---
interface TextStoreStateProps extends ActiveArrayStoreProps<TextObject> {}

interface TextStoreActions extends ActiveArrayStoreActions<TextObject> {
  updateContent: (newContent: string) => void;
  toggleBold: () => void;
  // ...פעולות ספציפיות ל-TextObject
  addText: (content: string, afterTextId?: string) => void;
  deleteText: (textId: string) => void;
  splitText: (textId: string, splitPos: number) => void;
  joinText: (textId: string, withTextId: string) => void;
}

interface TextStoreState extends TextStoreStateProps, TextStoreActions {}

// קומבינציית ה-StateCreator הסופית עבור useTextArrayStore
const textStoreCreator: StateCreator<TextStoreState> = (
  set,
  get, 
  store
) => ({
  // הרחב את חנות המערך הגנרית
  ...createActiveArrayStore<TextObject>()(set, get, store),

  // --- פעולות ספציפיות ל-TextObject ---
  updateContent: (newContent) =>
    get().updateActiveItem((item) => {
      item.content = newContent;
    }),
  toggleBold: () =>
    get().updateActiveItem((item) => {
      item.isBold = !item.isBold;
    }),
  addText: (content, afterTextId) =>
    set(
      produce<TextStoreState>((state) => {
        const newText: TextObject = { id: generateUniqueId(), content };
        if (afterTextId) {
          const index = state.items.findIndex((t) => t.id === afterTextId);
          if (index !== -1) {
            state.items.splice(index + 1, 0, newText);
          } else {
            state.items.push(newText);
          }
        } else {
          state.items.push(newText);
        }
        state.activeItemId = newText.id; // הפוך את החדש לפעיל
      })
    ),
  deleteText: (textId) =>
    set(
      produce<TextStoreState>((state) => {
        state.items = state.items.filter((t) => t.id !== textId);
        if (state.activeItemId === textId) {
          state.activeItemId = null; // נקה את הפריט הפעיל אם נמחק
        }
      })
    ),
  splitText: (textId, splitPos) =>
    set(
      produce<TextStoreState>((state) => {
        const index = state.items.findIndex((t) => t.id === textId);
        if (index === -1) return;

        const originalText = state.items[index];
        const newText1: TextObject = {
          ...originalText,
          id: generateUniqueId(),
          content: originalText.content.substring(0, splitPos),
        };
        const newText2: TextObject = {
          ...originalText,
          id: generateUniqueId(),
          content: originalText.content.substring(splitPos),
        };

        state.items.splice(index, 1, newText1, newText2);
        state.activeItemId = newText2.id; // מיקוד על החלק הימני
      })
    ),
  joinText: (textId, withTextId) =>
    set(
      produce<TextStoreState>((state) => {
        const text1Index = state.items.findIndex((t) => t.id === textId);
        const text2Index = state.items.findIndex((t) => t.id === withTextId);

        if (text1Index === -1 || text2Index === -1) return;

        const text1 = state.items[text1Index];
        const text2 = state.items[text2Index];

        // נניח ש-text1 ו-text2 הם סמוכים
        const mergedContent = text1.content + text2.content;
        const mergedText: TextObject = {
          ...text1,
          id: generateUniqueId(),
          content: mergedContent,
        };

        // שמור את ה-id של הקטע אליו נרצה להעביר את הסמן לאחר האיחוד
        const newActiveTextId = text1.id;
        const newCursorPos = text1.content.length;

        // הסר את שני הקטעים והכנס את המאוחד
        if (text1Index < text2Index) {
          state.items.splice(text1Index, 2, mergedText);
        } else {
          state.items.splice(text2Index, 2, mergedText);
        }

        state.activeItemId = newActiveTextId;
        // חשוב: צריך דרך לעדכן את ה-cursorPos גם.
        // אולי נשמור את editingPosition גלובלית בחנות העליונה.
      })
    ),
});

export const useTextArrayStore = create<TextStoreStateProps & TextStoreActions>(
  textStoreCreator
);
