import React from 'react'
import Button from '../../common/Button'
import { X } from 'lucide-react'
import { useModalStore } from '../../../store/modal-store'

const Modal = () => {
    const { data, closeModal, visible, title } = useModalStore()

    const preventModalClose = (e: React.MouseEvent) => e.stopPropagation()

    return (
        <div
            onClick={closeModal}
            className={`${!visible && "hidden"} duration-300 transition-all ease-in w-full h-full fixed backdrop-blur-sm bg-black/30 flex items-center justify-center p-5 md:p-10`}
        >
            <div onClick={preventModalClose} className='w-full md:w-2/5 rounded-2xl shadow border bg-white overflow-hidden'>
                <div className='w-full flex items-center justify-between bg-gray-100 px-5 md:px-10 py-3'>
                    <div className='text-sm font-bold'>
                        {title ?? ""}
                    </div>
                    <Button onClick={closeModal} variant="text" size="sm" className="text-red-500 shadow-sm">
                        <X />
                    </Button>
                </div>
                <div className='px-5 md:px-10 overflow-y-auto max-h-[70vh]'>
                    {data}
                </div>
            </div>
        </div>
    )
}

export default Modal