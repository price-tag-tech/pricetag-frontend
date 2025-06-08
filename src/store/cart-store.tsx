import { create } from "zustand";

interface Item {
    id: string
    name: string,
    quantity: number
}

interface CartStore {
    items: Item[],
    count: number,

    add: (item: Item) => void,
    remove: (index: number) => void
}

export const useCartStore = create<CartStore>((set, get) => ({
    items: [],
    count: 0,

    add: (item) => {
        const prevItems = get().items
        set({ items: [...prevItems, item], count: get().count++ })
    },
    remove: (index) => {
        const items = get().items
        const newItems = items.filter((_, i) => 1 !== index)
        set({ items: newItems, count: get().count-- })
    }
}))