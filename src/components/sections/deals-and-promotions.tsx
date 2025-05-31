import CatalogsHeader from '../ui/catalogs-header'
import Button from '../common/Button'
import { Link } from 'react-router-dom'

const DealsAndPromotions = () => {

    return (
        <div className='w-full px-4 md:px-24 py-24'>
            <CatalogsHeader title='Deals & Promotions' link="#" />
            <div className='py-4 w-full flex flex-col md:flex-row gap-x-4 gap-y-8'>
                <div className={`w-full md:w-1/2 bg-[#F5F4ED] shadow p-4 md:p-8 flex-between`}>
                    <div className='w-full flex flex-col gap-y-3'>
                        <h4 className='text-[#CA8A04] font-semibold'>
                            Limited Time Offer
                        </h4>
                        <h6 className='uppercase text-3xl font-normal'>
                            20% off
                        </h6>
                        <p className='text-lg md:text-2xl font-light'>
                            On all electronics this weekend
                        </p>
                        <div>
                            <Link to="">
                                <Button className={`dont-semibold font-montserrat bg-[#CA8A04] text-white hover:bg-[#CA8A04]/70 transition duration-300`}>
                                    Shop Now
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div className='w-[100pt]'>
                            <img src="/assets/deals-image.png" alt="Limited time offer" className='h-[100pt] object-cover w-full rounded-2xl' />
                        </div>
                    </div>
                </div>


                <div className={`w-full md:w-1/2 bg-[#D7FFE6] shadow p-4 md:p-8 flex-between`}>
                    <div className='w-full flex flex-col gap-y-3'>
                        <h4 className='text-black font-semibold'>
                            New Users Special
                        </h4>
                        <h6 className='uppercase text-3xl font-normal'>
                            $15 off
                        </h6>
                        <p className='text-lg md:text-2xl font-light'>
                            On your first order above $50
                        </p>
                        <div>
                            <Link to="">
                                <Button className={`dont-semibold font-montserrat bg-black text-white hover:bg-black/70 transition duration-300`}>
                                    Shop Now
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div className='w-[100pt]'>
                            <img src="/assets/deals-2-image.png" alt="New Users Special" className='h-[100pt] object-cover w-full rounded-2xl' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DealsAndPromotions