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
                        <Link key={_} to={item.link} onClick={() => setActiveUrl(item.link)} className={`hidden md:block text-lg font-light text-gray-600 ${activeUrl === item.link && "nav-active transition-all duration-500"} hover:nav-active flex gap-2`}>
                            <span>
                                {item.name}
                            </span>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Navbar