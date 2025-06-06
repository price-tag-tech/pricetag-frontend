import { Link } from "react-router-dom"
import { useUrlStore } from "../../store/nav-store"

interface IMenuItem { name: string, link: string, links?: IMenuItem[] }

const Navbar = () => {
    const items: IMenuItem[] = [
        { name: "Home", link: "/" },
        { name: "Find stores", link: "/stores" },
        { name: "Become an agent", link: "/become-agent" },
        { name: "Open a store", link: "/open-store" },
        { name: "More", link: "#", links: [] }
    ]

    const { activeUrl, setActiveUrl } = useUrlStore()

    return (
        <div className="mt-4">
            <div className="flex gap-6">
                {
                    items.map((item, _) => (
                        <Link key={_} to={item.link} onClick={() => setActiveUrl(item.link)} className={`hidden md:block text-lg font-light text-gray-600 ${activeUrl === item.link && "nav-active"} hover:nav-active transition-all duration-1000 flex gap-2 group relative`}>
                            <span className="relative z-10">
                                {item.name}
                            </span>
                            <div className="absolute inset-0 bg-green-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Navbar