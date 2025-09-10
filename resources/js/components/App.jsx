import { NavLink } from "react-router-dom";
import Router from "../router/Index.jsx";
import { IoHome , IoInformationCircle  } from "react-icons/io5";

function App() {
    const active = "px-3 bg-purple-600 text-white rounded-xs";

    return (
        <div>
            {/* <nav>
                <NavLink to="/" className={"text-2xl font-bold"}>
                    Home
                </NavLink>
                <NavLink to="/about" className={"text-2xl font-bold ms-3"}>
                    About
                </NavLink>
            </nav> */}
            <div className="relative p-5 bg-gray-100">
                Menu
                <div className="absolute top-0 right-0 items-center p-3">
                    <div className="flex gap-3">
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? "px-4 py-1 bg-blue-600 text-white rounded-xs" : "px-4 py-1 bg-blue-300 rounded-xs")}
                        >
                            <IoHome className="inline text-2xl" />
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => (isActive ? "px-4 py-1 bg-blue-600 text-white rounded-xs" : "px-4 py-1 bg-blue-300 rounded-xs")}

                        >
                            <IoInformationCircle className="inline text-2xl" />
                        </NavLink>
                        <NavLink className={({ isActive }) => (isActive ? "px-4 py-1 bg-blue-600 text-white rounded-xs" : "px-4 py-1 bg-blue-300 rounded-xs")} to="/contact">
                            Contact
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="p-3">
                <Router />
            </div>
        </div>
    );
}

export default App;
