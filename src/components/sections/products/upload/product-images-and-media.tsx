import React from 'react'
import FileUpload from '../../../ui/form/file-upload'
import Button from '../../../common/Button'

interface Props {
    action: () => void
}

const ProductImagesAndMedia = ({ action }: Props) => {
    return (
        <div className='flex flex-wrap flex-col md:flex-row'>
            <FileUpload />

            <div className='w-full mt-4'>
                <Button
                    onClick={action}
                    variant='secondary'
                    className='font-montserrat'
                >
                    Next
                </Button>
            </div>
        </div>
    )
}

export default ProductImagesAndMedia