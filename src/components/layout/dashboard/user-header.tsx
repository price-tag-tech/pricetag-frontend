import { Link } from "react-router-dom"
import SearchBar from "../../common/SearchBar"
import Button from "../../common/Button"
import { useCartStore } from "../../../store/cart-store"
import { LogOut, Menu, X } from "lucide-react"
import { useState } from "react"

const UserHeader = () => {
    const menu = [
        { label: "Find Stores", path: "" },
        { label: "Become an Agent", path: "" },
        { label: "Open a Store", path: "" },
    ]

    const { count: cartItemCount } = useCartStore()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="flex items-center justify-between mb-5 md:mb-8 px-5 md:px-10">
            <div className="flex gap-x-6 items-center">
                <div>
                    <img src="/logo.svg" className="h-12" alt="Pricetag" />
                </div>
                <div className="hidden md:block">
                    <SearchBar
                        placeholder={`Search products, services, or stores...`}
                    />
                </div>
            </div>
            <div className="text-sm lg:text-md font-medium flex items-center gap-x-5">
                <div className="hidden md:flex items-center gap-x-5">
                    {menu.map(link => (
                        <Link to={link.path} key={link.path}>
                            {link.label}
                        </Link>
                    ))}
                    <Button size="sm" variant="outline" className="font-montserrat">
                        <LogOut className="h-4" />
                        Logout
                    </Button>
                </div>
                <div className="flex items-center h-full z-20 group">
                    <div className="relative flex items-center justify-center flex-shrink-0 w-[1.375rem] h-[1.3125rem] cursor-pointer transition-transform duration-300 ease-out group-hover:scale-110">
                        <div className="flex flex-shrink-0 justify-center items-center w-3.5 h-[0.8125rem]">
                            <svg
                                width="14"
                                height="13"
                                viewBox="0 0 14 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.1812 7.15C10.706 7.15 11.1679 6.8835 11.4058 6.4805L13.9108 2.262C14.1697 1.833 13.8339 1.3 13.3021 1.3H2.94591L2.28815 0H0V1.3H1.39948L3.91855 6.2335L2.9739 7.8195C2.46309 8.6905 3.13484 9.75 4.19844 9.75H12.5953V8.45H4.19844L4.96816 7.15H10.1812ZM3.61066 2.6H12.1125L10.1812 5.85H5.26904L3.61066 2.6ZM4.19844 10.4C3.42873 10.4 2.80596 10.985 2.80596 11.7C2.80596 12.415 3.42873 13 4.19844 13C4.96816 13 5.59792 12.415 5.59792 11.7C5.59792 10.985 4.96816 10.4 4.19844 10.4ZM11.1958 10.4C10.4261 10.4 9.80336 10.985 9.80336 11.7C9.80336 12.415 10.4261 13 11.1958 13C11.9656 13 12.5953 12.415 12.5953 11.7C12.5953 10.985 11.9656 10.4 11.1958 10.4Z"
                                    fill="#1F1F1F"
                                />
                            </svg>
                        </div>

                        {cartItemCount > 0 && (
                            <div className="absolute top-0 right-0 flex items-center justify-center flex-shrink-0 w-[0.9375rem] h-[0.9375rem] rounded-full bg-[#1f1f1f] animate-pulse">
                                <span className="text-white text-center font-['Poppins'] text-[10px] font-bold leading-normal">
                                    {cartItemCount > 9 ? "9+" : cartItemCount}
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="md:hidden flex items-center">
                    <Button onClick={() => setIsMenuOpen(true)} variant="outline" size="sm" className="button-secondary-outline">
                        <Menu />
                    </Button>
                </div>

                {/* Mobile Menu Overlay */}
                <div
                    className={`fixed inset-0 bg-white z-20 transform transition-all duration-500 ease-out lg:hidden ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                        }`}
                >

                    <div className="flex flex-col h-full pt-20 px-6 pb-6 overflow-y-auto">
                        <div className="w-full flex justify-end">
                            <Button onClick={() => setIsMenuOpen(false)} variant="outline" size="sm" className="button-outline-secondary">
                                <X />
                            </Button>
                        </div>
                        <nav className="flex flex-col space-y-6 mb-8">

                            {menu.map(link => (
                                <Link
                                    to={link.path}
                                    className="flex items-center text-black text-left font-['Poppins'] text-lg font-[500] leading-normal hover:text-green-600 transition-all duration-300 ease-out transform hover:translate-x-2"

                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        <Button size="md" variant="outline" className="font-montserrat">
                            <LogOut className="h-4" />
                            Logout
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserHeader