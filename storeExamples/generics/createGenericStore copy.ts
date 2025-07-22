import { Action } from 'myy-common';
import { create } from 'zustand';

/**
 * פונקציה גנרית ליצירת Zustand stores.
 * מקבלת את טיפוסי ה-props של ה-store וערכי ברירת המחדל.
 *
 * @param defaultProps - אובייקט עם ערכי ברירת המחדל של ה-store.
 * @returns פונקציה ליצירת Zustand hook.
 */
export function createGenericStore<TProps extends object>(defaultProps: TProps) {
  // הגדרת טיפוס משולב עבור ה-API של ה-store
  type GenericStoreApi = TProps & {
    initialize: (props: Partial<TProps>) => void;
    getState: (action: Action<TProps>) => void;
    resetToDefault: () => void;
  };

  // מחזירים את הפונקציה שיוצרת את ה-Zustand hook
  return create<GenericStoreApi>((set, get) => ({
    ...defaultProps,
    initialize: (props) => set(() => (props as TProps)),
    getState: (action) => {
      action(get());
    },
    resetToDefault: () => set(() => (defaultProps)),
  }));
}

// --- שימוש בפונקציה הגנרית ליצירת useMainStore ---

/* MainStore */
export type MainStoreProps = { count: number };
export const defaultMainStoreProps: MainStoreProps = { count: 0 };

export const useMainStore = createGenericStore(defaultMainStoreProps);

export default useMainStore;