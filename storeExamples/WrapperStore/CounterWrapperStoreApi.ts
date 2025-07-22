import { Action } from "myy-common";
import { create, StoreApi, UseBoundStore } from "zustand";
/* CounterStore */

export type CounterType = number;

export const useCounterObjStore = create<CounterType>((set, get) => (0));
useCounterObjStore.subscribe(
  (state, prevState) => console.log("CounterObjStore current state:", state, prevState));


export type CounterStoreProps = {
  count: UseBoundStore<StoreApi<CounterType>>;
};
export type CounterStoreActions = {
  //inc: () => void,
  inc: () => CounterType;
  reset: () => void;
  export: () => CounterType;
};

export type CounterStoreApi = CounterStoreProps & CounterStoreActions;

export const useCounterStore = create<CounterStoreApi>((set, get) => {
  //get().count.subscribe(); // Initialize the count to 0
  return ({
  count: useCounterObjStore,
  //inc: () => set((state) => ({ count: state.count + 1 })),
  inc: () => { get().count.setState((state) => state + 1); return get().count.getState(); },
  reset: () => { get().count.setState(0); },
  //export: () => { return get().count.getState(); },
  export: () => { return get().count(); },
})});
useCounterStore.subscribe(
  (state, prevState) => console.log("CounterStore current state:", state, prevState));


export default useCounterStore;
