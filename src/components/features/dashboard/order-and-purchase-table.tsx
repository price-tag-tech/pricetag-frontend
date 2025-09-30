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
        <div className='w-full bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden'>
            <div className='bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-5 border-b border-gray-200'>
                <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                    <div>
                        <h2 className='text-xl md:text-2xl font-bold text-gray-900 mb-1'>
                            {props.title}
                        </h2>
                        <p className='text-sm text-gray-600'>
                            Track and manage your recent orders
                        </p>
                    </div>
                    <div className='flex items-center gap-x-4'>
                        <div className='bg-brand-100 text-brand-700 px-3 py-1.5 rounded-full text-sm font-medium'>
                            {props.orders.length} Orders
                        </div>
                        <Button
                            variant='outline'
                            size='sm'
                            leftIcon={<FilterIcon />}
                            className='bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                        >
                            Filters
                        </Button>
                    </div>
                </div>
            </div>

            <div className='p-6'>
                <div className='text-sm'>
                    <div className="hidden md:grid grid-cols-12 bg-gray-50 rounded-xl px-4 py-3 font-semibold text-gray-700 text-xs uppercase tracking-wide border border-gray-200">
                        <div className="col-span-1">S/N</div>
                        <div className="col-span-3">Orders</div>
                        <div className="col-span-1">Code</div>
                        <div className="col-span-1">Qty</div>
                        <div className="col-span-1">Amount</div>
                        <div className="col-span-1">Store</div>
                        <div className="col-span-1">Phone</div>
                        <div className="col-span-2">Date/Time</div>
                        <div className="col-span-1">Action</div>
                    </div>

                    <div className='w-full flex flex-col mt-4 space-y-3'>
                        {props.orders.map(order => (
                            <div key={order.id} className='bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all duration-200 hover:border-brand-300'>
                                <div className='grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-2 items-center'>
                                    <div className='hidden md:block md:col-span-1 text-gray-500 font-medium'>
                                        #{order.id.toString().padStart(3, '0')}
                                    </div>
                                    <div className='col-span-12 md:col-span-3 flex items-center gap-3'>
                                        <div className='flex-shrink-0'>
                                            <img
                                                src={order.imageUrl}
                                                alt={order.store}
                                                className='w-12 h-12 object-cover rounded-xl border-2 border-gray-200'
                                            />
                                        </div>
                                        <div className='flex-1 min-w-0'>
                                            <p className='text-gray-900 font-medium text-sm leading-tight line-clamp-2'>
                                                {order.order}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-span-6 md:col-span-1'>
                                        <span className='md:hidden text-xs text-gray-500 font-medium'>Code: </span>
                                        <span className='text-gray-700 font-mono text-sm'>{order.productCode}</span>
                                    </div>
                                    <div className='col-span-6 md:col-span-1'>
                                        <span className='md:hidden text-xs text-gray-500 font-medium'>Qty: </span>
                                        <span className='text-gray-700 font-semibold'>{order.quantity}</span>
                                    </div>
                                    <div className='col-span-6 md:col-span-1'>
                                        <span className='md:hidden text-xs text-gray-500 font-medium'>Amount: </span>
                                        <span className='text-brand-600 font-bold'>₦{order.amount.toLocaleString()}</span>
                                    </div>
                                    <div className='col-span-6 md:col-span-1'>
                                        <span className='md:hidden text-xs text-gray-500 font-medium'>Store: </span>
                                        <span className='text-gray-700 font-medium'>{order.store}</span>
                                    </div>
                                    <div className='col-span-12 md:col-span-1 text-xs text-gray-600'>
                                        <span className='md:hidden text-gray-500 font-medium'>Phone: </span>
                                        {order.phoneNumber}
                                    </div>
                                    <div className='col-span-12 md:col-span-2 text-xs text-gray-600'>
                                        <span className='md:hidden text-gray-500 font-medium'>Date: </span>
                                        {order.date}
                                    </div>
                                    <div className='col-span-12 md:col-span-1'>
                                        <Button
                                            variant='outline'
                                            size='sm'
                                            className='w-full md:w-auto bg-red-50 border-red-200 text-red-600 hover:bg-red-100 hover:border-red-300 text-xs'
                                        >
                                            Remove
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='flex justify-between items-center mt-6 pt-4 border-t border-gray-200'>
                    <p className='text-sm text-gray-600'>
                        Showing {props.orders.length} of {props.orders.length} orders
                    </p>
                    <div className='flex items-center gap-2'>
                        <Button variant='outline' disabled size='sm' className='bg-white border-gray-300 text-gray-400'>
                            <ChevronsLeft className='h-4' />
                        </Button>
                        <div className='bg-brand-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium'>
                            1
                        </div>
                        <Button variant='outline' size='sm' className='bg-white border-gray-300 text-gray-700 hover:bg-gray-50'>
                            <ChevronsRight className='h-4' />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderAndPurchasesTable