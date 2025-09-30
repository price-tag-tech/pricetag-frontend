import { ReactNode } from 'react'
import { create } from 'zustand'

type ModalType = 'edit' | 'view' | 'delete' | null

interface ModalStore {
    type: ModalType,
    title: string | null,
    data: ReactNode,
    visible: boolean,
    openModal: (type: ModalType, title: string, data: any) => void
    closeModal: () => void
}


export const useModalStore = create<ModalStore>((set) => ({
    type: null,
    data: null,
    title: null,
    visible: false,
    openModal: (type: ModalType, title: string, data: any) => set({ data, type, visible: true, title }),
    closeModal: () => set({ data: null, visible: false, title: null })
}))
