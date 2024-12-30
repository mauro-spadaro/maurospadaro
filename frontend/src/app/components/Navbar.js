"use client"; //Mark this as a client component
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#0C1C5A] text-white">
            <div className="container mx-auto flex justify-between items-center px-6 py-4">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <Link href="/">maurospadaro</Link>
                </div>

                {/* Hamburger Menu Button */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        )}
                    </svg>
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-4">
                    <Link
                        href="/articles"
                        className="relative px-4 py-2 rounded-full text-white hover:bg-[#93C1D9]/20 transition duration-300"
                    >
                        Articles ✍️
                    </Link>
                    <Link
                        href="/about"
                        className="relative px-4 py-2 rounded-full text-white hover:bg-[#93C1D9]/20 transition duration-300"
                    >
                        About me 👨‍💻
                    </Link>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`${
                    isOpen ? 'block' : 'hidden'
                } md:hidden bg-blue-800 px-6 py-4`}
            >
                <Link
                    href="/articles"
                    className="block py-2 text-white hover:bg-[#93C1D9]/20 hover:underline rounded transition duration-300 text-center"
                >
                    Articles ✍️
                </Link>
                <Link
                    href="/about"
                    className="block py-2 text-white hover:bg-[#93C1D9]/20 hover:underline rounded transition duration-300 text-center"
                >
                    About me 👨‍💻
                </Link>
            </div>
        </nav>
    );
}
