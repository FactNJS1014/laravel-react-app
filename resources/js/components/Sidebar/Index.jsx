import { useState, useEffect } from "react";
import {
    FiMenu,
    FiHome,
    FiInfo,
    FiSettings,
    FiMail,
    FiChevronLeft,
    FiChevronRight,
} from "react-icons/fi";
import Router from "../../router/Index.jsx";
import { NavLink } from "react-router-dom";
function Index() {
    const [isExpanded, setIsExpanded] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            if (window.innerWidth <= 768) {
                setIsExpanded(false);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    };

    const navItems = [
        { icon: <FiHome className="w-6 h-6" />, label: "Home", path: "/"},
        { icon: <FiInfo className="w-6 h-6" />, label: "About", path: "/about" },

        {
            icon: <FiMail className="w-6 h-6" />,
            label: "Contact",
            path: "/contact",
        },
    ];
    return (
        <div className="flex min-h-screen bg-gray-100">
            <div
                className={`${
                    isExpanded ? "w-64" : "w-20"
                } bg-white shadow-lg transition-all duration-300 ease-in-out relative`}
                role="navigation"
                aria-label="Main navigation"
            >
                <button
                    onClick={toggleSidebar}
                    className="absolute -right-3 top-4 bg-white rounded-full p-1 shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label={
                        isExpanded ? "Collapse sidebar" : "Expand sidebar"
                    }
                >
                    {isExpanded ? (
                        <FiChevronLeft className="w-4 h-4 text-gray-600" />
                    ) : (
                        <FiChevronRight className="w-4 h-4 text-gray-600" />
                    )}
                </button>

                <div className="p-4">


                    <nav className="space-y-2">
                        {navItems.map((item) => (
                            <NavLink
                                to={`${item.path}`}
                                className={"flex items-center space-x-2 p-3 rounded-lg hover:bg-blue-50 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-blue-500"}
                                role="menuitem"
                                aria-label={item.label}
                            >
                                <div className="text-gray-600 group-hover:text-blue-600 transition-colors duration-200">
                                    {item.icon}
                                </div>
                                {isExpanded && (
                                    <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                                        {item.label}
                                    </span>
                                )}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </div>
             <div className="flex-1 p-8">
                <div className="max-w-1xl mx-auto">
                    <Router />
                </div>
            </div>


        </div>
    );
}

export default Index;
