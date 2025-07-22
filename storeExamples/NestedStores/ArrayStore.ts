import { produce } from "immer";
import { StateCreator } from "zustand";


export const generateUniqueId = () => crypto.randomUUID();

export type HasId = { id: string };

export interface ArrayStoreProps<T extends HasId> {
  items: T[];
}


export interface ArrayStoreActions<T extends HasId> {
  setItems: (newItems: T[]) => void;
  deleteItem: (id: string) => void;
}
export interface ArrayStore<T extends HasId> extends ArrayStoreProps<T>, ArrayStoreActions<T> {}

export const createArrayStore = <T extends HasId>(
  initialItems: T[] = []
): StateCreator<ArrayStore<T>> => {
      return (set, get) => ({
    items: initialItems,

    setItems: (newItems) => set({ items: newItems }),
        deleteItem: (textId) =>
          set(
            produce<ArrayStore<T>>((state) => {
              state.items = state.items.filter((t) => t.id !== textId);
            })
          ),
    
  });

}
  
