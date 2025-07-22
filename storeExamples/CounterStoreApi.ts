import { Action } from "myy-common";
import { create, StateCreator } from "zustand";
/* CounterStore */
export type CounterStoreProps = {
  count: number;
};

export type CounterStoreActions = {
  //inc: () => void,
  inc: () => number;
  reset: () => void;
};

export type CounterStoreApi = CounterStoreProps & CounterStoreActions;


// Define the initial state and actions for the CounterStore
// This is a Zustand store that manages a simple counter state.
// It provides actions to increment and reset the counter.
// The store can be used in multiple components without re-creating it.
export const initializer: StateCreator<CounterStoreApi, [], []> =(set, get) => ({
  count: 0,
  //inc: () => set((state) => ({ count: state.count + 1 })),
  inc: () => { set((state) => ({ count: state.count + 1 }));
    return get().count; },
  
  reset: () => set(() => ({ count: 0 })),
});

// Create the Zustand store using the initializer
// This function initializes the store with the initial state and actions.
// It returns a Singleton Zustand store that can be used in multyple components.
// The store will have a `count` property and two actions: `inc` and `reset`.
export const useCounterStore = create<CounterStoreApi>(initializer);

useCounterStore.subscribe(
  (state, prevState) => console.log("CounterStore current state:", state, prevState));

export default useCounterStore;
