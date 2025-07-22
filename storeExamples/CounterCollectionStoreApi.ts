// stores/dynamicCountersStore.ts
import { create, StateCreator, UseBoundStore, StoreApi } from "zustand";

import {
  CounterStoreApi,
  initializer as counterInitializer,
} from "./CounterStoreApi";

// --- Store המנהל את אוסף המונים ---
export type CounterCollection = {
  [id: string]: UseBoundStore<StoreApi<CounterStoreApi>>; // מפה של Hooks למונים ספציפיים
};

export type CounterCollectionStoreProps = {
  counters: CounterCollection;
};

export type CounterCollectionStoreActions = {
  createCounter: (id: string, initialCount?: number) => UseBoundStore<StoreApi<CounterStoreApi>>;
  getCounter: (
    id: string
  ) => UseBoundStore<StoreApi<CounterStoreApi>> | undefined;
  removeCounter: (id: string) => void;
  resetAllCounters: () => void;
  exportAllCounters: () => { [id: string]: number }; // לייצוא כל המונים
};

export type CounterCollectionApi = CounterCollectionStoreProps &
  CounterCollectionStoreActions;

export const useCounterCollectionStore = create<CounterCollectionApi>(
  (set, get) => ({
    counters: {}, // אתחול כאובייקט ריק

    createCounter: (id: string, initialCount: number = 0) => {
      if (get().counters[id]) {
        //console.warn(`Counter with ID '${id}' already exists.`);
        return get().counters[id];
      }
      
      // יוצרים מופע חדש של ה-store באמצעות ה-initializer
      const newCounter = create<CounterStoreApi>((...a) => ({
        ...counterInitializer(...a),
        count: initialCount,
      }));

      set((state) => ({
        counters: {
          ...state.counters,
          [id]: newCounter, // מוסיפים את ה-hook (שהוא גם ה-StoreApi) לאוסף
        },
      }));
      return get().counters[id];
    },

    getCounter: (id: string) => get().counters[id],

    removeCounter: (id: string) => {
      set((state) => {
        const newCounters = { ...state.counters };
        delete newCounters[id];
        // אופציונלי: קריאה ל-destroy() על ה-store שנמחק אם ה-initializer תומך בזה
        // state.counters[id]?.destroy?.();
        return { counters: newCounters };
      });
    },

    resetAllCounters: () => {
      Object.values(get().counters).forEach((counterHook) => {
        counterHook.getState().reset(); // ניגשים ל-reset דרך ה-StoreApi
      });
    },

    exportAllCounters: () => {
      const allCounts: { [id: string]: number } = {};
      Object.entries(get().counters).forEach(([id, counterHook]) => {
        allCounts[id] = counterHook.getState().count; // ניגשים ל-count דרך ה-StoreApi
      });
      return allCounts;
    },
  })
);
