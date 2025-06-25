import { FormEvent } from 'react'
import Label from '../../../ui/form/label'
import Select from '../../../ui/form/select'
import Input from '../../../ui/form/input'
import Button from '../../../common/Button'

interface Props {
    action: (e: FormEvent) => void
}

const PaymentOptions = ({ action }: Props) => {
    return (
        <div className='flex flex-wrap flex-col md:flex-row'>
            <div className='w-full p-2'>
                <Label title='Mode of Payment' />
                <Select default='--Select Mode of Payment--' options={[]} />
            </div>

            <div className='mt-4 w-full'>
                <h4 className='text-lg font-semibold'>
                    Bank Details
                </h4>
                <div className='mt-2 w-full flex flex-wrap flex-col md:flex-row'>
                    <div className='w-full md:w-1/2 p-2'>
                        <Label title='Bank Name' />
                        <Input type="text" placeholder='Enter Bank Name' />
                    </div>


                    <div className='w-full md:w-1/2 p-2'>
                        <Label title='Account Name' />
                        <Input type="text" placeholder='Enter Account Name' />
                    </div>


                    <div className='w-full md:w-1/2 p-2'>
                        <Label title='Account Number' />
                        <Input type="tel" placeholder='Enter Account Number (0000000000)' />
                    </div>

                    <div className='w-full p-2'>
                        <Button
                            onClick={action}
                            variant='secondary'
                            className='font-montserrat'
                        >
                            Upload Product
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentOptions