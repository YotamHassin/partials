import { create, StateCreator, StoreApi } from 'zustand';
import { convertStateToJson, parseJsonToState } from './useRootStore helpers';


// Store 1: UserStore
export type UserStoreProps = {
  username: string;
  isLoggedIn: boolean;
};
export type UserStoreActions = {
  login: (name: string) => void;
  logout: () => void;
};
export type UserStore = UserStoreProps & UserStoreActions;

// הגדרת ה-StoreCreator עבור UserStore
const userStoreCreator: StateCreator<UserStore> = (set, get) => ({
  username: 'Guest',
  isLoggedIn: false,
  login: (name: string) => set({ username: name, isLoggedIn: true }),
  logout: () => set({ username: 'Guest', isLoggedIn: false }),
});

export const useUserStore = create(userStoreCreator);


// Store 2: ProductStore
export type ProductStoreProps = {
  products: string[];
  lastUpdate: Date;
};
export type ProductStoreActions = {
  addProduct: (product: string) => void;
  removeProduct: (product: string) => void;
};
export type ProductStore = ProductStoreProps & ProductStoreActions;

// הגדרת ה-StoreCreator עבור ProductStore
const productStoreCreator: StateCreator<ProductStore> = (set, get) => ({
  products: ['Laptop', 'Mouse'],
  lastUpdate: new Date(),
  addProduct: (product: string) => set((state) => ({
    products: [...state.products, product],
    lastUpdate: new Date(),
  })),
  removeProduct: (product: string) => set((state) => ({
    products: state.products.filter(p => p !== product),
    lastUpdate: new Date(),
  })),
});

export const useProductStore = create(productStoreCreator);

