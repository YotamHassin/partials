import { Action } from "myy-common";
import { create, StateCreator } from "zustand"; // ייבוא StateCreator

/**
 * פונקציה גנרית ליצירת Zustand stores הניתנים להרחבה.
 * מקבלת את טיפוסי ה-props של ה-store, ערכי ברירת המחדל,
 * ופונקציה המגדירה פעולות נוספות ספציפיות ל-store.
 *
 * @param defaultProps - אובייקט עם ערכי ברירת המחדל של ה-store.
 * @param additionalCreator - פונקציה מסוג StateCreator שמגדירה פעולות נוספות (אקשנים).
 * @returns פונקציה ליצירת Zustand hook.
 */
export function createExtensibleStore<
  TProps extends object,
  TAdditionalActions extends object
>(
  defaultProps: TProps,
  additionalCreator?: StateCreator<
    TProps & TAdditionalActions,
    [],
    [],
    TAdditionalActions
  > // שינוי כאן
) {
  // הגדרת הממשק הגנרי עבור ה-API של ה-store
  // הוא יכלול גם את ה-Props וגם את ה-Actions
  type ExtensibleStoreApi = TProps &
    TAdditionalActions & {
      // שימוש ב-& עבור איחוד טיפוסים
      initialize: (props: Partial<TProps>) => void;
      getState: (action: Action<TProps>) => void;
      resetToDefault: () => void;
    };

  // מחזירים את הפונקציה שיוצרת את ה-Zustand hook
  return create<ExtensibleStoreApi>((set, get, store) => {
    // הוספת store (למקרה שנרצה להשתמש בו)
    // פעולות הבסיס שיהיו בכל store
    const baseActions = {
      initialize: (props: Partial<TProps>) =>
        set(props as Partial<ExtensibleStoreApi>), // אולי נצטרך cast קטן
      getState: (action: Action<TProps>) => {
        action(get() as TProps);
      }, // אולי נצטרך cast קטן
      resetToDefault: () => set(defaultProps as ExtensibleStoreApi), // אולי נצטרך cast קטן
    };

    // יצירת הפעולות הנוספות באמצעות ה-additionalCreator
    // ה-StateCreator מקבל את ה-set, get ואת ה-store כפרמטרים
    const additionalActions = additionalCreator
      ? additionalCreator(set, get, store)
      : ({} as TAdditionalActions);

    return {
      ...defaultProps,
      ...baseActions,
      ...additionalActions,
    };
  });
}

// --- שימוש בפונקציה הגנרית המורחבת ליצירת useMainStore ו-useAnotherStore ---

/* MainStore */
export type MainStoreProps = { count: number };
export const defaultMainStoreProps: MainStoreProps = { count: 0 };

// MainStore עם פונקציות בסיס בלבד
export const useMainStore = createExtensibleStore(defaultMainStoreProps);

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
>(defaultAnotherStoreProps, (set, get) => ({
  // כאן אנו מגדירים את הפונקציות הספציפיות
  toggleActive: () => set((state) => ({ isActive: !state.isActive })),
  updateText: (newText: string) => set(() => ({ text: newText })),
}));

// דוגמה לשימוש ב-AnotherStore
// const { text, isActive, toggleActive, updateText, resetToDefault } = useAnotherStore();
// toggleActive();
// updateText("New text!");
