"use client";

import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const router = useRouter();

    const handleNavbar = () => {
        setNavbarOpen(!navbarOpen);
    }

    const closeNavbar = () => {
        setNavbarOpen(false);
    }

    const goToHome = () => {
        router.push("/");
        closeNavbar();
    };

    const goToAbout = () => {
        router.push("/about");
        closeNavbar();
    };

    const goToProjects = () => {
        router.push("/projects");
        closeNavbar();
    };

    const goToContact = () => {
        router.push("/contact");
        closeNavbar();
    };

    return (
        <nav className="fixed top-0 right-0 left-0 z-10 bg-white bg-opacity-90">
            <div className="flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="text-3xl text-black font-semibold">
                    LOGO
                </Link>
                {/* Mobile menu button for small screens */}
                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                        <button 
                            onClick={handleNavbar} 
                            className="text-black flex items-center border rounded border-slate-200 hover:text-black p-2"
                        >
                            <Bars3Icon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button 
                            onClick={closeNavbar} 
                            className="text-black flex items-center border rounded border-slate-200 hover:text-black p-2"
                        >
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    )}
                </div>
                {/* Main navigation menu */}
                <div className={`menu ${navbarOpen ? 'block' : 'hidden'} md:flex md:items-center md:space-x-6`} id="navbar">
                    <ul className="flex flex-col md:flex-row md:space-x-6 md:mt-0"> {/* Corrected the layout here */}
                        <li className="mt-2 md:mt-0">
                            <Button 
                                onClick={goToHome} 
                                className="text-white hover:text-blue-600"
                            >
                                Home
                            </Button>
                        </li>
                        <li className="mt-2 md:mt-0">
                            <Button 
                                onClick={goToAbout} 
                                className="text-white hover:text-blue-600"
                            >
                                About
                            </Button>
                        </li>
                        <li className="mt-2 md:mt-0">
                            <Button 
                                onClick={goToProjects} 
                                className="text-white hover:text-blue-600"
                            >
                                Projects
                            </Button>
                        </li>
                        <li className="mt-2 md:mt-0">
                            <Button 
                                onClick={goToContact} 
                                className="text-white hover:text-blue-600"
                            >
                                Contact
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
