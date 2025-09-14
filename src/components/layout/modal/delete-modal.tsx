import { FC } from "react"
import { useModalStore } from "../../../store/modal-store"
import Button from "../../common/Button"

interface Props {
    note: string
    approve?: () => void
}

export const DeleteModal: FC<Props> = (props) => {
    const { closeModal } = useModalStore()

    const approve: () => void = () => {
        props.approve && props.approve()
        closeModal()
    }

    return (
        <div className="flex flex-col py-5 gap-y-4">
            <div>
                {props.note}
            </div>
            <div className='flex justify-end items-between gap-3'>
                <Button onClick={approve} variant='outline' size="sm" className='button-outline-dark'>
                    Yes
                </Button>
                <Button onClick={closeModal} variant='secondary' size="sm" className='bg-red-500 hover:bg-red-600'>
                    Cancel
                </Button>
            </div>
        </div>
    )
}