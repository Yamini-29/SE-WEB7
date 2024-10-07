"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname for route checking

import { SlHome } from 'react-icons/sl';
import { BsInfoSquare, BsEnvelopeAt } from 'react-icons/bs';
import { FaTshirt, FaRedhat } from 'react-icons/fa';

export default function Sidebar({ show, setter }) {
    const pathname = usePathname(); // Get the current route

    const className = `fixed left-0 top-0 h-screen p-5 bg-black w-[250px] transition-[margin-left] ease-in-out duration-500 z-40 ${show ? "ml-0" : "ml-[-250px] md:ml-0"}`;

    const MenuItem = ({ icon, name, route }) => {
        const colorClass = pathname === route ? "text-white" : "text-white/50 hover:text-white"; // Compare current path with route

        return (
            <Link
                href={route}
                onClick={() => setter(oldVal => !oldVal)} // Toggle sidebar on click
                className={`flex gap-1 [&>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-b-white/10 ${colorClass}`}
            >
                <div className="text-xl flex [&>*]:mx-auto w-[30px] text-purple-500">
                    {icon}
                </div>
                <div>{name}</div>
            </Link>
        );
    };

    const ModalOverlay = () => (
        <div
            className="flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30"
            onClick={() => setter(oldVal => !oldVal)} // Close sidebar when overlay is clicked
        />
    );

    return (
        <>
            <div className={className}>
                <div className="flex flex-col">
                    <MenuItem
                        name="Home"
                        route="/"
                        icon={<SlHome />}
                    />
                    <MenuItem
                        name="Create"
                        route="/t-shirts"
                        icon={<FaTshirt />}
                    />
                    <MenuItem
                        name="Tutorials"
                        route="/tutorials"
                        icon={<FaRedhat />}
                    />
                    <MenuItem
                        name="Community"
                        route="/about"
                        icon={<BsInfoSquare />}
                    />
                    <MenuItem
                        name="Myfiles"
                        route="/contact"
                        icon={<BsEnvelopeAt />}
                    />
                </div>
            </div>
            {show ? <ModalOverlay /> : null}
        </>
    );
}
