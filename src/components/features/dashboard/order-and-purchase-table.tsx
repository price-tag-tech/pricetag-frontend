import { FC } from 'react'
import Button from '../../common/Button'
import FilterIcon from '../../ui/filter-icon'
import { ChevronsLeft, ChevronsRight } from 'lucide-react'

interface Order {
    id: number,
    imageUrl: string,
    order: string,
    productCode: string,
    quantity: number,
    amount: number,
    store: string,
    phoneNumber: string,
    date: string,
}

interface Props {
    title: string,
    orders: Order[]
}

const OrderAndPurchasesTable: FC<Props> = (props) => {

    return (
        <div className='w-full'>
            <div className='w-full flex-between flex-col md:flex-row gap-y-2'>
                <h2 className='text-lg md:text-3xl font-medium'>
                    {props.title}
                </h2>
                <div className='flex items-center gap-x-4'>
                    <span className='text-sm'>
                        {props.orders.length} Orders
                    </span>
                    <Button
                        variant='outline'
                        size='sm'
                        leftIcon={<FilterIcon />}
                        className='button-outline-secondary text-xs'
                    >
                        <span>
                            Filters
                        </span>
                    </Button>
                </div>
            </div>

            <div className='mt-4 md:my-8 text-xs'>
                <div className="hidden md:grid grid-cols-12 border-y-2 border-y-gray-200 py-3 font-semibold uppercase">
                    <div className="col-span-1">S/N</div>
                    <div className="col-span-3">Orders</div>
                    <div className="col-span-1">Product Code</div>
                    <div className="col-span-1">Quantity</div>
                    <div className="col-span-1">Amount</div>
                    <div className="col-span-1">Store</div>
                    <div className="col-span-1">Phone Number</div>
                    <div className="col-span-2">Date/Time</div>
                    <div className="col-span-1">Action</div>
                </div>
                <div className='w-full flex flex-col py-2 md:py-4 divide-y-2'>

                    {props.orders.map(order => (
                        <div key={order.id} className='grid grid-cols-1 md:grid-cols-12 gap-y-2 py-3'>
                            <div className='hidden md:block md:col-span-1'>
                                {order.id}
                            </div>
                            <div className='col-span-12 md:col-span-3 text-gray-600 flex flex-col md:flex-row md:items-center pr-2 gap-y-1'>
                                <div className='w-[80pt]'>
                                    <img src={order.imageUrl} alt={order.store} className='w-[30pt] h-[30pt] object-cover rounded-full text-[9pt]' />
                                </div>
                                <div className='full'>
                                    Quality Blue color Nike shoe with a fancy Light blue printing indicator on the foot
                                </div>
                            </div>
                            <div className='col-span-12 md:col-span-1'>
                                {order.productCode}
                            </div>
                            <div className='col-span-12 md:col-span-1'>
                                {order.quantity}
                            </div>
                            <div className='col-span-12 md:col-span-1'>
                                {order.amount}
                            </div>
                            <div className='col-span-12 md:col-span-1'>
                                {order.store}
                            </div>
                            <div className='col-span-12 md:col-span-1'>
                                {order.phoneNumber}
                            </div>
                            <div className='col-span-12 md:col-span-2'>
                                {order.date}
                            </div>
                            <div className='col-span-1'>
                                <Button variant='outline' size='sm' className='button-outline-secondary font-medium text-xs w-full md:w-fit'>
                                    Remove
                                </Button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            <div className='flex justify-end'>
                <div className='flex items-center gap-4'>
                    <Button variant='outline' disabled size='sm' className='button-outline-secondary'>
                        <ChevronsLeft className='h-4' />
                    </Button>
                    <span>
                        Page 1
                    </span>
                    <Button variant='outline' size='sm' className='button-outline-secondary'>
                        <ChevronsRight className='h-4' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default OrderAndPurchasesTable