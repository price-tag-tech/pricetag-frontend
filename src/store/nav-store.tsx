import { create } from "zustand";

interface UrlStore {
    activeUrl: string,
    setActiveUrl: (url: string) => void
}

export const useUrlStore = create<UrlStore>((set, get) => ({
    activeUrl: "/",
    setActiveUrl: (url: string) => set({ activeUrl: url })
}))