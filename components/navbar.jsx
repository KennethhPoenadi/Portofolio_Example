"use client";

import Link from "next/link";
import NavLink from "@/components/navlink";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"; // Correct import for XMarkIcon

const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact", 
    }
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false); // Correct state destructuring

    return (  
        <nav className="fixed top-0 right-0 left-0 z-10 bg-white bg-opacity-90"> {/* Ensure bg-white is not overridden */}
            <div className="flex flex-wrap items-center justify-between mx-auto p-2">
                <Link href={"/"} className="text-3xl text-black font-semibold"> {/* Changed text color to black for visibility */}
                    LOGO
                </Link>
                {/* Mobile menu button for small screens */}
                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                        <button 
                            onClick={() => setNavbarOpen(true)} 
                            className="text-black flex items-center border rounded border-slate-200 hover:text-black p-2" // Changed hover color to black for consistency
                        >
                            <Bars3Icon className="h-5 w-5" /> {/* Check if this icon is rendering */}
                        </button> 
                    ) : (
                        <button 
                            onClick={() => setNavbarOpen(false)} 
                            className="text-black flex items-center border rounded border-slate-200 hover:text-black p-2" // Changed hover color to black for consistency
                        >
                            <XMarkIcon className="h-5 w-5" /> {/* Correct icon name */}
                        </button>
                    )}
                </div>
                {/* Main navigation menu */}
                <div className={`menu ${navbarOpen ? 'block' : 'hidden'} md:block md:w-auto`} id="navbar">
                    <ul className="flex space-x-6">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
 
export default Navbar;
