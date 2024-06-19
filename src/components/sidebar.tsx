'use client';
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuIcon, HomeIcon, GitHubIcon, GeoServerIcon, HtmxIcon, WeddingIcon } from "../components/assets";
 
type NavItem = {
    name: string;
    href: string;
    icon: React.ReactNode;
};

const defaultNavItems: NavItem[] = [
    { name: "Home", href: "/", icon: <HomeIcon /> },
    { name: "GitHub", href: "https://github.com/digo-eu", icon: <GitHubIcon /> },
    { name: "GeoServer", href: "/geoserver", icon: <GeoServerIcon /> },
    { name: "Go+HTMX", href: "/air", icon: <HtmxIcon /> },
    { name: "Casamento", href: "/casamento", icon: <WeddingIcon /> },
];
 
type Props = {
    collapsed: boolean;
    navItems?: NavItem[];
    setCollapsed(collapsed: boolean): void;
    shown: boolean;
};

const SideBar = ({
    collapsed,
    navItems = defaultNavItems,
    setCollapsed,
    shown,
}: Props ) => {

    return (
        <div className={`h-screen sticky top-0 overflow-hidden fixed md:static md:translate-x-0 z-20 transition-all duration-300 ease-in-out md:ring-1 ring-white
            ${collapsed ? '-translate-x-full w-[40px]' : 'w-[200px]'}
        `}>
            <div className="flex flex-col justify-between h-screen w-full">
                <div className={`flex items-center transition-none px-4
                    ${collapsed ?'justify-center' :'justify-between'}
                `}>

                    {!collapsed && <span className="font-bold whitespace-nowrap">Navegação</span>}

                    <button 
                        className="max-md:hidden grid place-content-center rounded-full size-10 px-2 stroke-white hover:stroke-black hover:bg-white transition-colors duration-300"
                        onClick={() => setCollapsed(!collapsed)}
                    >
                        <MenuIcon />
                    </button>
                </div>
                <nav className="flex-grow">
                    <ul className="flex flex-col gap-2 items-stretch">
                        {navItems.map((item, index) => {
                            return (
                                
                                <li key={index} className=""> 
                                    <Link href={item.href} className={`
                                        flex gap-2 fill-white hover:fill-black p-2 font-medium hover:bg-white hover:text-black flex transition-all duration-300
                                        ${collapsed ?
                                        "rounded-full" :
                                        "rounded-md w-300 h-10"
                                        }
                                    `}>
                                        {<span>{item.icon}</span>}
                                        {!collapsed && <span>{item.name}</span>}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <div className="grid place-content-stretch">
                    <div className="flex gap-4 items-center px-1 py-10">
                        <Image src="https://utfs.io/f/d7585ec3-7641-46e1-a816-3ed4f8794d73-vjw3ro.jpg"
                            width={32} height={32}
                            alt="Avatar"
                            className="rounded-full"
                        />
                        {!collapsed && <span className="text-nowrap">Rodrigo Andrade</span>}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SideBar;
