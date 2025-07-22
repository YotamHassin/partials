

import { createExtensibleStore } from "./createGenericStore";

// --- שימוש בפונקציה הגנרית המורחבת ליצירת useMainStore ו-useAnotherStore ---


/* MainStore */
export type MainStoreProps = { count: number };
export const defaultMainStoreProps: MainStoreProps = { count: 0 };

// MainStore עם פונקציות בסיס בלבד
export const useMainStore = createExtensibleStore(defaultMainStoreProps);
/* const getMainStoreState = useMainStore(s => s.getState);


const logAction: (state: MainStoreProps) => void = 
  (state) => console.log("MainStore current state:", state)
getMainStoreState(logAction); */


/* AnotherStore */
export type AnotherStoreProps = {
  text: string;
  isActive: boolean;
};
export const defaultAnotherStoreProps: AnotherStoreProps = {
  text: "Hello",
  isActive: false,
};

// הגדרת פעולות נוספות עבור AnotherStore
type AnotherStoreActions = {
  toggleActive: () => void;
  updateText: (newText: string) => void;
};

// שימוש ב-StateCreator עבור הפעולות הנוספות
export const useAnotherStore = createExtensibleStore<
  AnotherStoreProps,
  AnotherStoreActions
>(defaultAnotherStoreProps, (set, get, store) => ({
  toggleActive: () => set((state) => ({ isActive: !state.isActive })),
  updateText: (newText: string) => set(() => ({ text: newText })),
}));
