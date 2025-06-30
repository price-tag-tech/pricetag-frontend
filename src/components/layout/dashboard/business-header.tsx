import { Search, LogOut, Menu, X } from "lucide-react"
import Input from "../../ui/form/input"
import Button from "../../common/Button"
import RatingStars from "../../ui/rating-stars"
import { useState } from "react"
import { Link } from "react-router-dom"
import { businessNavItems } from "./business-sidenav"

export function BusinessHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className="flex items-center justify-between w-full px-6 py-4 bg-white md:bg-transparent shadow md:shadow-none">
            <div className="flex items-center">
                <div className="md:hidden flex items-center space-x-2 mb-4 border-b-2 border-b-gray-200">
                    <div className="text-2xl font-bold">
                        <img src="/logo.svg" alt="" />
                    </div>
                </div>

                <div className="hidden md:flex items-center space-x-4">
                    <div className="relative w-72 text-sm me-4">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input placeholder="Search for Products and Services" className="pl-10 bg-white border-gray-400 w-64" />
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-6">
                    <div className="flex flex-col">
                        <span className="text-lg text-gray-900 font-semibold ">Customers Reviews</span>
                        <div className="flex items-center space-x-1">
                            <span className="font-semibold">4.3</span>
                            <RatingStars rating={4} />
                            <span className="text-sm text-gray-800 font-light">(10 Reviews)</span>
                        </div>
                    </div>
                    <Button variant="outline" className="button-outline-dark" size="sm">
                        Manage Reviews
                    </Button>
                </div>

            </div>

            <Button variant="outline" size="sm" className=" hidden md:block items-center space-x-2">
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
            </Button>

            <Button onClick={() => setIsMenuOpen(true)} variant="outline" size="sm" className="block md:hidden button-outline-dark">
                <Menu />
            </Button>

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

                        {businessNavItems.map(link => (
                            <Link
                                to={link.route}
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center text-black text-left font-montserrat text-lg font-[500] leading-normal hover:text-green-600 transition-all duration-300 ease-out transform hover:translate-x-2"

                            >
                                {link.name}
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
    )
}
