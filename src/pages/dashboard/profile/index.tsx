import Label from '../../../components/ui/form/label'
import Input from '../../../components/ui/form/input'
import Select from '../../../components/ui/form/select'
import Textarea from '../../../components/ui/form/textarea'
import Button from '../../../components/common/Button'

const ProfilePage = () => {

    return (
            <div className='w-full md:w-1/2 flex flex-col gap-y-6'>
                <div className='flex flex-col gap-y-2'>
                    <Label title='Email Address' />
                    <Input type='email' value="princegodson24@gmail.com" />
                </div>
                <div className='flex flex-col gap-y-2'>
                    <Label title='First Name' />
                    <Input type="text" value="Prince" />
                </div>
                <div className='flex flex-col gap-y-2'>
                    <Label title='Last Name' />
                    <Input type="text" value="Godson" />
                </div>
                <div className='flex flex-col gap-y-2'>
                    <Label title="Phone Number" />
                    <Input type='text' value='09037494084' />
                </div>
                <div className='flex flex-col gap-y-2'>
                    <Label title='Country' />
                    <Select default='--Select Country--' />
                </div>
                <div className='flex flex-col gap-y-2'>
                    <Label title="State/City" />
                    <Select default='--Select State/City--' />
                </div>
                <div className='flex flex-col gap-y-2'>
                    <Label title='Enter Full Address' />
                    <Textarea value='' />
                </div>
                <div>
                    <Button variant='secondary' className='w-full font-montserrat'>
                        Save Profile
                    </Button>
                </div>
            </div>
    )
}

export default ProfilePage