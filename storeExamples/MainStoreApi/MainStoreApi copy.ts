import { Action } from 'myy-common';
import { create } from 'zustand'


/* MainStore */
export type MainStoreProps = { count: number };
export const defaultMainStoreProps: MainStoreProps = { count: 0 };

export type MainStoreApi = MainStoreProps & { 
  init: (props: Partial<MainStoreProps>) => void, 
  getState: (action: Action<MainStoreProps>) => void, 
  resetToDefault: () => void };

export const useMainStore = create<MainStoreApi>((set, get) => ({
  ...defaultMainStoreProps,
  init: (props) => set((state) => (props)),
  getState: (action) => { action(get()); },
  resetToDefault: () => set(() => (defaultMainStoreProps)),
}))


export default useMainStore;