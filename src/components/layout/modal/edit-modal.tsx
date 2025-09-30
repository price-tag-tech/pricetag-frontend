import { FC, useState } from 'react'
import { useModalStore } from '../../../store/modal-store'
import Select from '../../ui/form/select'
import Input from '../../ui/form/input'
import Label from '../../ui/form/label'
import Button from '../../common/Button'
import { Save } from 'lucide-react'

interface Props {
    save: (data: string[]) => void
    inputs: {
        label: string,
        name?: string,
        value?: string,
        type: "text" | "number" | "select" | string,
        options?: { label: string, value: string }[]
    }[]
}

const EditModal: FC<Props> = (props) => {
    const { closeModal } = useModalStore()
    const [data, setData] = useState<Record<string, string>>(() => (
        Object.fromEntries(props.inputs.map(input => [input.name || input.label, input.value, ""]))
    ));

    const save = () => {
        props.save(Object.values(data))
        closeModal()
    }

    const handleChange = (name: string, value: string) => {
        setData(prev => ({ ...prev, [name]: value }))
    }

    return (
        <div className="flex flex-col py-5 gap-y-4">
            <form onSubmit={save}>
                <div>
                    {
                        props.inputs.map(({ label, type, name, options }, index) => {
                            const field = name || label;
                            return (
                                <div className='my-2' key={index}>
                                    <Label title={label} for={Input.name} />
                                    {type === "select" ? (
                                        <Select size='sm' change={val => handleChange(field, val)} name={label} options={options} />
                                    ) : (
                                        <Input value={data[field]} size='sm' change={val => handleChange(field, val)} type={type} name={name} />
                                    )}
                                </div>
                            )
                        })
                    }
                </div>

                <div className='flex mt-4 justify-end'>
                    <Button variant='secondary' leftIcon={<Save size={20} />} className='w-full md:w-fit'>
                        Save Changes
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default EditModal