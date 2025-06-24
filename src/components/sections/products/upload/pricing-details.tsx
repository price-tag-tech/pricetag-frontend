import Label from '../../../ui/form/label'
import Input from '../../../ui/form/input'
import Select from '../../../ui/form/select'
import Button from '../../../common/Button'

const PricingDetails = () => {
    return (
        <div className='flex flex-wrap flex-col md:flex-row'>
            <div className='w-full md:w-1/2 p-2'>
                <Label title='Price' size='md' className='font-medium' />
                <Input type="tel" placeholder='0.00' />
            </div>

            <div className='w-full md:w-1/2 p-2'>
                <Label title='Discount Price' size='md' className='font-medium' />
                <Input type="tel" placeholder='0.00' />
            </div>

            <div className='w-full md:w-1/2 p-2'>
                <Label title='Currency' size='md' className='font-medium' />
                <Select name='currency' options={[{ label: "Naira", value: 'naira' }]} />
            </div>

            <div className='w-full mt-4'>
                <Button variant='secondary'>
                    Next
                </Button>
            </div>
        </div>
    )
}

export default PricingDetails