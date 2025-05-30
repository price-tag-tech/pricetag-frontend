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
                    <h1 className="text-5xl text-center sm:text-left sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                        Business at the <br className="hidden sm:block" /> speed of search
                    </h1>

                    <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-sm sm:max-w-xl px-4 sm:px-0 font-bold sm:font-normal mx-auto sm:mx-0">
                        Sell, Grow, and Compare Prices with{" "}
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
                    <div className='w-full rounded-3xl bg-gray-100 h-1/2 min-h-[150pt]'>

                    </div>
                    <div className="flex gap-x-3">
                        <div className='w-3/5 bg-gray-100 rounded-3xl min-h-[150pt]'>

                        </div>

                        <div className="w-2/5 flex flex-col gap-3 items-center justify-center">
                            <div className='flex justify-around'>
                                {
                                    ([0, 0, 0]).map((item: number) => <div key={item} className='h-10 md:h-20 w-10 md:w-20 rounded-full bg-gray-200'
                                    ></div>)
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