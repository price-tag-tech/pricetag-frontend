import { useMemo, useState, useEffect } from 'react'
import Section from '../layout/Section'
import SearchBar from '../common/SearchBar'
import { debounce } from 'lodash';
import { useStoreState } from '../../store/search-store';

const HeroSection = () => {
    const { stores, setFilteredStores } = useStoreState();
    
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const rotatingTexts = [
        "Business at the speed of search",
        "Find stores near you instantly",
        "Compare prices in real-time",
        "Discover amazing deals today",
        "Connect with local businesses"
    ];

    const [businessCount, setBusinessCount] = useState(0);
    const targetCount = 5000;

    const [avatarPositions, setAvatarPositions] = useState([
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 }
    ]);

    const sampleStores = [
        "TechHub Electronics",
        "Fresh Market Groceries", 
        "Fashion Forward Boutique",
        "HomeDecor Paradise",
        "Sports Zone",
        "Book Haven",
        "Coffee Corner",
        "Pet Paradise"
    ];

    const [currentStoreIndex, setCurrentStoreIndex] = useState(0);

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

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const duration = 2000;
        const steps = 60;
        const increment = targetCount / steps;
        let currentCount = 0;
        
        const timer = setInterval(() => {
            currentCount += increment;
            if (currentCount >= targetCount) {
                setBusinessCount(targetCount);
                clearInterval(timer);
            } else {
                setBusinessCount(Math.floor(currentCount));
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const animateAvatars = () => {
            setAvatarPositions(prev => prev.map(() => ({
                x: (Math.random() - 0.5) * 10,
                y: (Math.random() - 0.5) * 10
            })));
        };

        const interval = setInterval(animateAvatars, 2000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStoreIndex((prev) => (prev + 1) % sampleStores.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <Section className='overflow-hidden'>
            <div className='flex items-center justify-around flex-col lg:flex-row gap-4'>
                <div className='w-full lg:w-1/2 flex flex-col gap-y-3'>
                    
                    <div className="h-32 sm:h-40 md:h-48 flex items-center">
                        <h1 className="text-4xl text-center sm:text-left sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                            <span 
                                key={currentTextIndex}
                                className="inline-block animate-fade-in-up"
                                style={{
                                    animation: 'fadeInUp 0.8s ease-out'
                                }}
                            >
                                {rotatingTexts[currentTextIndex].split(' ').map((word, index) => (
                                    <span 
                                        key={index}
                                        className="inline-block mr-2 md:mr-3"
                                        style={{
                                            animationDelay: `${index * 0.1}s`,
                                            animation: 'slideInFromLeft 0.6s ease-out forwards'
                                        }}
                                    >
                                        {word === 'search' || word === 'instantly' || word === 'real-time' || word === 'today' || word === 'businesses' ? (
                                            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                                                {word}
                                            </span>
                                        ) : word}
                                        {index < rotatingTexts[currentTextIndex].split(' ').length - 1 && ' '}
                                    </span>
                                ))}
                            </span>
                        </h1>
                    </div>

                    <p className="mt-4 text-sm text-center md:text-left sm:text-lg text-gray-600 max-w-sm sm:max-w-xl px-4 sm:px-0 font-bold sm:font-normal mx-auto sm:mx-0 animate-fade-in">
                        Create e-stores, be seen, sell, grow, compare prices, shop, and earn on{" "}
                        <span className="font-semibold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                            Price Tag
                        </span>!
                    </p>

                    <div className="mt-6 sm:mt-8 flex justify-center items-start w-full px-4 sm:px-0 relative">
                        <div className="w-full max-w-full sm:max-w-[400px] md:max-w-[500px] lg:max-w-[595px] relative">
                            <SearchBar
                                onSearch={handleSearch}
                                placeholder={`Search products, services, or stores...`}
                            />
                            
                            <div className="absolute -top-8 left-4 hidden sm:block">
                                <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 shadow-lg border border-gray-200/50 text-sm text-gray-600 animate-bounce">
                                    <span className="text-green-500">💡</span> Try: "{sampleStores[currentStoreIndex]}"
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 flex justify-center sm:justify-start space-x-4 text-sm text-gray-500">
                        <div className="flex items-center animate-pulse">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-ping"></div>
                            <span>Live searches</span>
                        </div>
                        <div className="flex items-center animate-pulse" style={{ animationDelay: '0.5s' }}>
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-ping"></div>
                            <span>New stores joining</span>
                        </div>
                    </div>
                </div>

                <div className='w-full lg:w-1/2 h-full flex flex-col gap-3'>
                    <div className='w-full group'>
                        <img 
                            src="/assets/hero/hero-1.jpg" 
                            alt="Hero section 1" 
                            className='rounded-3xl bg-gray-100 h-[200pt] w-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:shadow-xl' 
                        />
                    </div>
                    
                    <div className="flex gap-x-3">
                        <div className='w-1/2 relative group'>
                            <img 
                                src="/assets/hero/hero-2.jpg" 
                                alt="Hero section 2" 
                                className='rounded-3xl bg-gray-100 h-[150pt] w-full object-cover transition-all duration-500 group-hover:scale-105' 
                            />
                            
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 shadow-lg border border-gray-200/50 text-xs font-medium text-gray-700 animate-bounce">
                                <span className="text-green-500">●</span> Live
                            </div>
                        </div>

                        <div className="w-1/2 flex flex-col gap-3 items-center justify-center">
                            <div className='flex justify-around relative'>
                                {(["avatar-1.png", "avatar-2.png", "avatar-3.png"]).map((item: string, index) => (
                                    <img 
                                        key={item} 
                                        src={`/assets/hero/${item}`} 
                                        alt={item} 
                                        className='h-10 md:h-20 w-10 md:w-20 rounded-full bg-gray-200 transition-all duration-500 hover:scale-110 hover:shadow-lg border-2 border-white shadow-md'
                                        style={{
                                            transform: `translate(${avatarPositions[index]?.x || 0}px, ${avatarPositions[index]?.y || 0}px)`,
                                            transition: 'transform 2s ease-in-out, scale 0.3s ease'
                                        }}
                                    />
                                ))}
                                
                                <div className="absolute inset-0 pointer-events-none">
                                    <div className="absolute top-2 left-2 w-1 h-1 bg-green-400 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
                                    <div className="absolute bottom-3 right-4 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                                    <div className="absolute top-5 right-2 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
                                </div>
                            </div>
                            
                            <div className='text-center'>
                                <h3 className="font-bold text-4xl md:text-6xl bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                                    {businessCount.toLocaleString()}+
                                </h3>
                                <p className='text-light text-xs md:text-sm leading-loose animate-pulse'>
                                    Top businesses
                                </p>
                                
                                <div className="mt-2 w-16 h-1 bg-gray-200 rounded-full mx-auto overflow-hidden">
                                    <div 
                                        className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full transition-all duration-1000"
                                        style={{ width: `${(businessCount / targetCount) * 100}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS Animations */}
            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes slideInFromLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                
                .animate-fade-in {
                    animation: fadeIn 1s ease-out;
                }
                
                .animate-fade-in-up {
                    animation: fadeInUp 0.8s ease-out;
                }
            `}</style>
        </Section>
    )
}

export default HeroSection