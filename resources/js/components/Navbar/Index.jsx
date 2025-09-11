import { IoHome, IoInformationCircle } from "react-icons/io5";
import { RiContactsBook2Fill } from "react-icons/ri";
import { TiThMenu } from "react-icons/ti";
import { NavLink } from "react-router-dom";

function Index() {
    const handleClick = () => {
        const nav = document.querySelector("nav ul");
        nav.classList.toggle("top-[80px]");
        nav.classList.toggle("opacity-100");
    };
    return (
        <div>
            <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between relative">
                <divc className="flex justify-between items-center">
                    <span className="text-2xl font-[Poppins]">tailwind</span>
                    <span className="text-3xl cursor-pointer md:hidden">
                        <TiThMenu
                            className="text-3xl md:hidden absolute right-8 top-6 cursor-pointer"
                            onClick={handleClick}
                        />
                    </span>
                </divc>
                <ul className="md:flex md:items-center z-10 md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-6 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in-out duration-500 md:shadow-none shadow-lg ">
                    <li className="mx-2 my-6 md:my-0">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "p-3 bg-blue-600 text-white rounded-sm"
                                    : "p-3 bg-blue-300 rounded-sm hover:bg-sky-400"
                            }
                        >
                            <IoHome className="inline text-2xl" />
                        </NavLink>
                    </li>
                    <li className="mx-2 my-6 md:my-0">
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive
                                    ? "p-3 bg-blue-600 text-white rounded-sm"
                                    : "p-3 bg-blue-300 rounded-sm hover:bg-sky-400"
                            }
                        >
                            <IoInformationCircle className="inline text-2xl" />
                        </NavLink>
                    </li>
                    <li className="mx-2 my-6 md:my-0">
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive
                                    ? "p-3 bg-blue-600 text-white rounded-sm"
                                    : "p-3 bg-blue-300 rounded-sm hover:bg-sky-400"
                            }
                        >
                            <RiContactsBook2Fill className="inline text-2xl" />
                        </NavLink>
                    </li>
                    <li className="mx-2 my-6 md:my-0">
                        <button className="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-400">
                            Get Started
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Index;
