'use client';
import React, { PropsWithChildren, useState } from "react";
import Link from "next/link";
import SideBar from "../components/sidebar";

const NavLayout = (props: PropsWithChildren) => {

    const [collapsed, setSidebarCollapsed] = useState(true);
    const [showSideBar, setShowSideBar] = useState(false);

    return (
        <div className={`grid min-h-screen transition-[grid-template-columns] duration-300 ease-in-out
            ${collapsed ?
            "grid-cols-sidebar-collapsed" :
            "grid-cols-sidebar"
            }
        `}>
            <SideBar
                collapsed={collapsed}
                setCollapsed={setSidebarCollapsed}
                shown={showSideBar}
            />
            <div className="">
                <nav className="flex justify-between w-full top-0 sticky gap-6 md:gap-12 px-4 md:text-2xl font-bold">
                    <Link className="font-extrabold text-xl md:text-4xl" href="/">Rodrigo Andrade</Link>
                    <div>Entrar</div>
                </nav>
                {props.children}
            </div>
        </div>
    );
}

export default NavLayout;
