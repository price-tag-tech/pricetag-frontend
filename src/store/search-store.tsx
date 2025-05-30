import { create } from "zustand";

interface Store {
    id: string
    name: string,
    rating: number,
    reviews: number,
    author: string,
    image: string,
}

interface StoreState {
    filteredStores: Store[],
    stores: Store[],
    query: string,
    isSearching: boolean,
    setIsSearching: (state: boolean) => void;
    setStores: (stores: Store[]) => void;
    setFilteredStores: (store: Store[]) => void;
    setQuery: (query: string) => void;
}

export const useStoreState = create<StoreState>((set, get) => ({
    filteredStores: [],
    query: "",
    stores: [],
    isSearching: false,

    setIsSearching: (state: boolean) => set({ isSearching: true }),
    setStores: (stores: Store[]) => set({ stores }),
    setFilteredStores: (stores: Store[]) => set({ filteredStores: stores, isSearching: true }),
    setQuery: (query: string) => set({ query })
}))