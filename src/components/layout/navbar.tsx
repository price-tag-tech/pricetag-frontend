import { Link } from "react-router-dom"

interface IMenuItem { name: string, link: string, active: boolean, links?: IMenuItem[] }

const Navbar = () => {
    const items: IMenuItem[] = [
        { name: "Home", link: "", active: true },
        { name: "Find stores", link: "", active: false },
        { name: "Become an agent", link: "", active: false },
        { name: "Open a store", link: "", active: false },
        { name: "More", link: "#", links: [], active: false }
    ]

    return (
        <div className="mt-4">
            <div className="flex gap-6">
                {
                    items.map((item, _) => (
                        <Link key={_} to={item.link} className={`hidden md:block text-lg font-light text-gray-600 ${item.active && "nav-active"} hover:nav-active flex gap-2`}>
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