import { create, StateCreator, StoreApi, UseBoundStore } from "zustand";
import { convertStateToJson, parseJsonToState } from "./useRootStore helpers";
import {
  ProductStore,
  ProductStoreProps,
  useProductStore,
  UserStore,
  UserStoreProps,
  useUserStore,
} from "./useRootStore subStores";

// --- הגדרת חנות העל (Root Store) ---

// טיפוס עזר עבור אובייקט ה-state המאוחד שייושמר ב-JSON
export type AllStoresState = {
  userStore: UserStoreProps;
  productStore: ProductStoreProps;
  // כאן ניתן להוסיף states של stores נוספים
};

export type RootStoreProps = {
  lastDataLoad: Date | null;
  // כאן נשמור רפרנסים ל-StoreApi של חנויות הבת
  // חשוב להשתמש ב-StoreApi המלאה כדי לגשת ל-getState, setState ולמתודות החדשות
  userStore: UseBoundStore<StoreApi<UserStore>>;
  productStore: UseBoundStore<StoreApi<ProductStore>>;
};

export type RootStoreActions = {
  initializeListeners: () => void;

  /**
   * מייצא את כל ה-state של כל החנויות ל-JSON יחיד.
   * @returns מחרוזת JSON המכילה את כל נתוני החנויות.
   */
  exportAllStores: () => AllStoresState;
  exportAllStoresToJson: () => string;

  /**
   * טוען נתונים מ-JSON יחיד ומעדכן את כל החנויות.
   * @param jsonString - מחרוזת JSON המכילה את נתוני החנויות.
   */
  importAllStores: (allState: AllStoresState) => void;
  importAllStoresFromJson: (jsonString: string) => void;
};

export type RootStore = RootStoreProps & RootStoreActions;

const RootStoreCreator: StateCreator<RootStore> = (set, get) => ({
  lastDataLoad: null,
  userStore: useUserStore, // ה-hook עצמו הוא ה-StoreApi ב-Zustand
  productStore: useProductStore, // ה-hook עצמו הוא ה-StoreApi ב-Zustand

  // פונקציית אתחול (אם עדיין רוצים רישום לשינויים)
  initializeListeners: () => {
    console.log(
      "RootStore listeners initialized. Subscribing to sub-stores..."
    );

    get().userStore.subscribe((state, prevState) => {
      if (JSON.stringify(state) !== JSON.stringify(prevState)) {
        console.log("RootStore: UserStore state changed.");
        // כאן אפשר לעדכן state כלשהו ב-RootStore אם רוצים תגובה ישירה
      }
    });

    get().productStore.subscribe((state, prevState) => {
      if (JSON.stringify(state) !== JSON.stringify(prevState)) {
        console.log("RootStore: ProductStore state changed.");
        // כאן אפשר לעדכן state כלשהו ב-RootStore אם רוצים תגובה ישירה
      }
    });
  },

  /**
   * מייצא את כל ה-state של כל החנויות ל-JSON יחיד.
   * @returns מחרוזת JSON המכילה את כל נתוני החנויות.
   */
  exportAllStores: (): AllStoresState => {
    const allState: AllStoresState = {
      userStore: get().userStore.getState(),
      productStore: get().productStore.getState(),
    };
    return allState;
  },

  exportAllStoresToJson: (): string => {
    const allState: AllStoresState = get().exportAllStores();
    return convertStateToJson(allState);
  },

  /**
   * טוען נתונים מ-JSON יחיד ומעדכן את כל החנויות.
   * @param jsonString - מחרוזת JSON המכילה את נתוני החנויות.
   */
  importAllStores: (allState: AllStoresState) => {
    try {
      // טוען את ה-state לכל חנות בת בנפרד
      get().userStore.setState(allState.userStore);
      get().productStore.setState(allState.productStore);

      set({ lastDataLoad: new Date() });
      console.log("All stores loaded successfully from JSON.");
    } catch (error) {
      console.error("Failed to import stores from allState object:", error);
    }
  },
  importAllStoresFromJson: (jsonString: string) => {
    try {
      const allState: AllStoresState = parseJsonToState(jsonString);

      // טוען את ה-state לכל חנות בת בנפרד
      get().importAllStores(allState);
    } catch (error) {
      console.error("Failed to import stores from JSON:", error);
    }
  },
});

export const useRootStore = create<RootStore>(RootStoreCreator);
