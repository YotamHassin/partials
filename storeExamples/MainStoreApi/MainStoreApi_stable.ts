import { Action } from 'myy-common';
import { create } from 'zustand'


/* MainStore */
export type MainStoreProps = { count: number };
export const defaultMainStoreProps: MainStoreProps = { count: 0 };

export interface MainStoreApi extends MainStoreProps { 
  initialize: (props: Partial<MainStoreProps>) => void, 
  getState: (action: Action<MainStoreProps>) => void, 
  resetToDefault: () => void };

export const useMainStore = create<MainStoreApi>((set, get) => ({
  ...defaultMainStoreProps,
  initialize: (props) => set(() => (props)),
  getState: (action) => { action(get()); },
  resetToDefault: () => set(() => (defaultMainStoreProps)),
}))


export default useMainStore;