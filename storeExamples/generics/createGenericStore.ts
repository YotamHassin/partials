import { Action } from "myy-common";
import { create, StateCreator } from "zustand";

export interface StatibleStoreApi<TProps extends object> {
  initialize: (props: Partial<TProps>) => void;
  getState: (action: Action<TProps>) => void;
  resetToDefault: () => void;
}

/**
 * פונקציה ליצירת פעולות הבסיס ל-Zustand store.
 * פעולות אלו כוללות: initialize, getState, ו-resetToDefault.
 *
 * @param defaultProps - אובייקט עם ערכי ברירת המחדל של ה-store.
 * @returns אובייקט המכיל את פעולות הבסיס.
 */
export const createBaseActions = <TProps extends object, TStoreApi extends TProps>(
  defaultProps: TProps
): StatibleStoreApi<TProps> => {
  // הגדרת טיפוס ה-Action עבור פעולות ה-store
  return {
    initialize: (props: Partial<TProps>) => {
      // שימוש ב-set() עם פונקציה כדי להבטיח את הטיפוס הנכון
      (set: (state: Partial<TStoreApi>) => void) =>
        set(props as Partial<TStoreApi>);
    },
    getState: (action: Action<TProps>) => {
      // שימוש ב-get() עם פונקציה כדי להבטיח את הטיפוס הנכון
      (set: (state: Partial<TStoreApi>) => void, get: () => TStoreApi) =>
        action(get() as TProps);
    },
    resetToDefault: () => {
      // שימוש ב-set() עם פונקציה כדי להבטיח את הטיפוס הנכון
      (set: (state: TStoreApi) => void) => set(defaultProps as TStoreApi);
    },
  };
}

/**
 * פונקציה גנרית ליצירת Zustand stores הניתנים להרחבה.
 * מקבלת את טיפוסי ה-props של ה-store, ערכי ברירת המחדל,
 * ופונקציה המגדירה פעולות נוספות ספציפיות ל-store.
 *
 * @param defaultProps - אובייקט עם ערכי ברירת המחדל של ה-store.
 * @param additionalCreator - פונקציה מסוג StateCreator שמגדירה פעולות נוספות (אקשנים).
 * @returns פונקציה ליצירת Zustand hook.
 */
export const createExtensibleStore = <
  TProps extends object,
  TAdditionalActions extends object
>(
  defaultProps: TProps,
  additionalCreator?: StateCreator<
    TProps & TAdditionalActions,
    [],
    [],
    TAdditionalActions
  >
) => {
  // הגדרת הממשק הגנרי עבור ה-API של ה-store
  type ExtensibleStoreApi = TProps &
    TAdditionalActions &
    StatibleStoreApi<TProps>;

  // מחזירים את הפונקציה שיוצרת את ה-Zustand hook
  return create<ExtensibleStoreApi>((set, get, store) => {
    // יצירת פעולות הבסיס באמצעות הפונקציה החדשה
    const baseActions = createBaseActions<TProps, ExtensibleStoreApi>(
      defaultProps
    );

    // יצירת הפעולות הנוספות באמצעות ה-additionalCreator
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
