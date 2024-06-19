'use client';
import React, { PropsWithChildren, useState } from "react";
import Link from "next/link";
import SideBar from "../components/sidebar";
import { MenuIcon } from "../components/assets";

const NavLayout = (props: PropsWithChildren) => {

    const [collapsed, setSidebarCollapsed] = useState(true);

    return (
        <div className={`grid min-h-screen transition-[grid-template-columns] duration-300 ease-in-out
            ${collapsed ?
            "grid-cols-sidebar-gone md:grid-cols-sidebar-collapsed" :
            "grid-cols-sidebar"
            }
        `}>
            <SideBar
                collapsed={collapsed}
                setCollapsed={setSidebarCollapsed}
            />
            <div className="w-full">
                <nav className="flex justify-between w-full top-0 sticky px-4 py-1.5 md:text-2xl font-bold">
                    <button className="md:hidden grid place-content-center rounded-full size-10 px-2 stroke-white hover:stroke-black hover:bg-white transition-colors duration-300"
                        onClick={() => setSidebarCollapsed(!collapsed)}> <MenuIcon />
                    </button>
                    <Link className="font-extrabold text-xl md:text-4xl" href="/">Rodrigo Andrade</Link>
                    <div><s>Entrar</s></div>
                </nav>
                {props.children}
            </div>
        </div>
    );
}

export default NavLayout;
