import { Search, LogOut, Menu } from "lucide-react"
import Input from "../../ui/form/input"
import Button from "../../common/Button"
import RatingStars from "../../ui/rating-stars"

export function BusinessHeader() {
    return (
        <div className="flex items-center justify-between w-full px-6 py-4 bg-white md:bg-transparent shadow md:shadow-none">
            <div className="flex items-center">
                <div className="md:hidden flex items-center space-x-2 mb-4 border-b-2 border-b-gray-200">
                    <div className="text-2xl font-bold">
                        <img src="/logo.svg" alt="" />
                    </div>
                </div>

                <div className="hidden md:flex items-center space-x-4">
                    <div className="relative w-72 text-sm">
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

            <Button variant="outline" size="sm" className="block md:hidden button-outline-dark">
                <Menu />
            </Button>
        </div>
    )
}
