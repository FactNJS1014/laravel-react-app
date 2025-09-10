import { NavLink } from "react-router-dom";
import Router from "../router/Index.jsx";
function App() {

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
            <div className="relative p-3 bg-gray-100">
                Menu
                <div className="absolute top-0 right-0 p-3">
                    <div className="flex gap-3">
                        <NavLink
                            to="/"
                            className={"px-3 bg-purple-300 rounded-xs"}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={"px-3 bg-purple-300 rounded-xs"}

                        >
                            About
                        </NavLink>
                        <NavLink className={"px-3 bg-purple-300 rounded-xs"}>
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
