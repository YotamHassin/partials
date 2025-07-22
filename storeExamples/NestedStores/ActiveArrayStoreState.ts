// store/textStore.ts
import { create, StateCreator } from "zustand";
import { produce } from "immer";
import { ArrayStoreActions, ArrayStoreProps, HasId } from "./ArrayStore";


// --- חנות מערך עם פריט פעיל (Active Item Array Store) ---
// זו תהיה תבנית שנשתמש בה לכל הרמות (Text, Line, Paragraph)
export interface ActiveArrayStoreProps<T extends HasId> extends ArrayStoreProps<T> {
  //items: T[];
  activeItemId: string | null;
}


export interface ActiveArrayStoreActions<T extends HasId> extends ArrayStoreActions<T> {
  // פעולות כלליות לחנות מערך
  //setItems: (newItems: T[]) => void;
  setActiveItem: (id: string | null) => void;

  // פעולות המופעלות על הפריט הפעיל בלבד
  updateActiveItem: (updater: (item: T) => void) => void;

  // פונקציות עזר לקריאה
  getActiveItem: () => T | undefined;
}

export interface ActiveArrayStore<T extends HasId>
  extends ActiveArrayStoreProps<T>,
    ActiveArrayStoreActions<T> {}

// פונקציית עזר ליצירת חנות מערך גנרית
export const createActiveArrayStore = <T extends HasId>(
  initialItems: T[] = []
): StateCreator<ActiveArrayStore<T>> =>{
  return (set, get) => ({
    items: initialItems,
    activeItemId: null,

    setItems: (newItems) => set({ items: newItems, activeItemId: null }),
    setActiveItem: (id) => set({ activeItemId: id }),
    deleteItem: (textId) =>
      set(
        produce<ActiveArrayStore<T>>((state) => {
          state.items = state.items.filter((t) => t.id !== textId);
          if (state.activeItemId === textId) {
            state.activeItemId = null; // נקה את הפריט הפעיל אם נמחק
          }
        })
      ),

    updateActiveItem: (updater) =>
      set(
        produce<ActiveArrayStore<T>>((state) => {
          if (!state.activeItemId) return;
          const activeItem = state.items.find(
            (item) => item.id === state.activeItemId
          );
          if (activeItem) {
            updater(activeItem as T);
          }
        })
      ),

    getActiveItem: () => {
      const state = get();
      if (!state.activeItemId) return undefined;
      return state.items.find((item) => item.id === state.activeItemId);
    },
  });
}

