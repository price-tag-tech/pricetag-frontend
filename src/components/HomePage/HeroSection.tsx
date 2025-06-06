import { useMemo } from 'react'
import Section from '../layout/Section'
import SearchBar from '../common/SearchBar'
import { debounce } from 'lodash';
import { useStoreState } from '../../store/search-store';

const HeroSection = () => {

    const { stores, setFilteredStores } = useStoreState();

    const handleSearch = useMemo(
        () =>
            debounce((query: string) => {
                const results = stores.filter((store) =>
                    store.name.toLowerCase().includes(query.toLowerCase())
                );
                setFilteredStores(results);
                console.log(`Searching for: ${query}`, results);
            }, 300),
        [stores]
    );

    return (
        <Section className=''>
            <div className='flex items-center justify-around flex-col lg:flex-row gap-4'>
                <div className='w-full lg:w-1/2 flex flex-col gap-y-3'>
                    <h1 className="text-4xl text-center sm:text-left sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                        Business at the <br className="hidden sm:block" /> speed of search
                    </h1>

                    <p className="mt-4 text-sm text-center md:text-left sm:text-lg text-gray-600 max-w-sm sm:max-w-xl px-4 sm:px-0 font-bold sm:font-normal mx-auto sm:mx-0">
                        Create e-stores, be seen, sell, grow, compare prices, shop, and earn on{" "}
                        <span className="font-semibold">Price Tag</span>!
                    </p>

                    <div className="mt-6 sm:mt-8 flex justify-center items-start w-full px-4 sm:px-0">
                        <div className="w-full max-w-full sm:max-w-[400px] md:max-w-[500px] lg:max-w-[595px]">
                            <SearchBar
                                onSearch={handleSearch}
                                placeholder="Search products, services, or stores..."
                            />
                        </div>
                    </div>
                </div>

                <div className='w-full lg:w-1/2 h-full flex flex-col gap-3'>
                    <div className='w-full'>
                        <img src="/assets/hero/hero-1.jpg" alt="Hero section 1" className='rounded-3xl bg-gray-100 h-[200pt] w-full object-cover' />
                    </div>
                    <div className="flex gap-x-3">
                        <div className='w-1/2 relative'>
                            <img src="/assets/hero/hero-2.jpg" alt="Hero section 1" className='rounded-3xl bg-gray-100 h-[150pt] w-full object-cover' />
                            {/* <div className='bg-white absolute h-[50pt] w-[70pt] -bottom-[2pt] -right-[2pt] rounded-tl-3xl after:contents-[""] after:absolute after:right-5 after:bg-white after:h-40 after:w-40 after:rounded-full'>

                            </div> */}
                        </div>

                        <div className="w-1/2 flex flex-col gap-3 items-center justify-center">
                            <div className='flex justify-around'>
                                {
                                    (["avatar-1.png", "avatar-2.png", "avatar-3.png"]).map((item: string) => (
                                        <img key={item} src={`/assets/hero/${item}`} alt={item} className='h-10 md:h-20 w-10 md:w-20 rounded-full bg-gray-200' />
                                    ))
                                }
                            </div>
                            <div className='text-center'>
                                <h3 className="font-bold text-4xl md:text-6xl">
                                    5000+
                                </h3>
                                <p className='text-light text-xs md:text-sm leading-loose'>
                                    Top businesses
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default HeroSection