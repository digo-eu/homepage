'use client';
import React, { PropsWithChildren, useState } from "react";
import SideBar from "../components/sidebar";
import { MenuIcon } from "../components/assets";

const NavLayout = (props: PropsWithChildren) => {

    const [collapsed, setSidebarCollapsed] = useState(true);

    return (
            <div className={`grid h-full transition-[grid-template-columns] duration-300 ease-in-out
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
                <nav className="flex justify-between top-0 sticky text-xl px-4">
                    <button className="md:hidden grid place-content-center rounded-full size-10 px-2 stroke-white hover:stroke-black hover:bg-white transition-colors duration-300"
                        onClick={() => setSidebarCollapsed(!collapsed)}> <MenuIcon />
                    </button>
                    <img className="md:hidden size-8" src="https://utfs.io/f/648b28b1-0df2-40e0-8854-c753d60edfdd-1l7cp.png" alt="Vlad is a cat" />
                </nav>
                {props.children}
            </div>
        </div>
    );
}

export default NavLayout;
