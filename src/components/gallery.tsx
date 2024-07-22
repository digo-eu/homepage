'use client';
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { HomeIcon, GitHubIcon, GeoServerIcon, HtmxIcon, WeddingIcon } from "../components/assets";

type GalleryItem = {
    name: string;
    href: string;
    orientation: string;
};

type NavItem = {
    name: string;
    href: string;
    icon: React.ReactNode;
};

export const anos: GalleryItem[] = [
    { name: "1", href: "https://utfs.io/f/8a844b55-fe73-4185-8cfb-d34934dc583d-lr1026.jpg", orientation: "vertical" },
    { name: "2", href: "https://utfs.io/f/7c66e064-7da9-46ee-8cbe-154cb7b34f14-1x9crt.png", orientation: "vertical" },
    { name: "3", href: "https://utfs.io/f/2f09e551-890a-4d9b-a73c-d8091c936d3d-zcj4op.jpg", orientation: "vertical" },
    { name: "4", href: "https://utfs.io/f/4c8e3fa8-b9fc-4074-a147-0671c6f54720-lr101e.jpg", orientation: "vertical" },
    { name: "5", href: "https://utfs.io/f/5d02f5bd-e3b8-4a4c-ab9f-3bfe5951a0eb-jeriqf.jpg", orientation: "vertical" },
    { name: "6", href: "https://utfs.io/f/93d3c15c-0d64-4fd1-8e9e-d754ea278f34-243uhm.jpg", orientation: "vertical" },
    { name: "7", href: "https://utfs.io/f/71cda862-2ce4-46a3-8f64-8dc64149269b-bnmi20.jpg", orientation: "vertical" },
    { name: "8", href: "https://utfs.io/f/9f3eb6c6-7c0a-4479-8dec-f365dca381a5-hlnchg.jpg", orientation: "vertical" },
    { name: "9", href: "https://utfs.io/f/d86c5046-168b-451e-bd96-611d7ab7a657-m4nb1f.jpg", orientation: "vertical" },
    { name: "10", href: "https://utfs.io/f/00845900-bd21-48e5-9419-23fe57dffc6d-oxgbmr.jpg", orientation: "vertical" },
    { name: "14", href: "https://utfs.io/f/0ec7a7c0-fadf-40d6-bad7-b8c27d19045e-1xal9d.jpg", orientation: "vertical" },
    { name: "15", href: "https://utfs.io/f/a1524815-91e5-4c22-8dc2-7d716ba6e17d-1xa1xl.HEIC", orientation: "vertical" },
    { name: "16", href: "https://utfs.io/f/6b32ce12-2740-469c-83a1-7a30e4cf42c6-1x9vdk.HEIC", orientation: "vertical" },
    { name: "17", href: "https://utfs.io/f/ce271a9f-b7fa-4e2a-9165-a58e2dec5e7b-1xb8ap.HEIC", orientation: "vertical" },
    { name: "18", href: "https://utfs.io/f/3885b727-ce7d-4aba-97f9-d647833aaf3b-bex22l.jpg", orientation: "vertical" },
    { name: "19", href: "https://utfs.io/f/29b3d95a-5702-4000-83c2-f735182cd43c-1xb58a.HEIC", orientation: "vertical" },
    { name: "20", href: "https://utfs.io/f/3da01629-2226-4b07-bd73-4d47026c8e81-z68cej.jpg", orientation: "vertical" },
    { name: "11", href: "https://utfs.io/f/ac4a9ae4-7f9c-4a54-adea-b12ea6ab1550-hmxawg.jpg", orientation: "vertical" },
    { name: "12", href: "https://utfs.io/f/6943c850-d612-434e-b80f-2d6016d07158-1x9z43.HEIC", orientation: "vertical" },
    { name: "13", href: "https://utfs.io/f/d9fcc441-1afb-4a38-8d48-7758d549000b-3km35b.jpg", orientation: "vertical" },
]

const Projetos: NavItem[] = [
    { name: "Site Pessoal", href: "/sobre", icon: <HomeIcon /> },
    { name: "WebGIS", href: "/webgis", icon: <GitHubIcon /> },
    { name: "Servidores", href: "/servidores", icon: <GeoServerIcon /> },
    { name: "Eletrônicos", href: "/eletronicos", icon: <HtmxIcon /> },
    { name: "Projeto Fíbula", href: "/tibia-3d", icon: <WeddingIcon /> },
	{ name: "Frappé Bird", href: "/frappe-bird", icon: <WeddingIcon /> },
];

export function FeaturedImageGallery() {
    const [active, setActive] = React.useState(
        anos[0]?.href
    );
    
    return (
      <div className="grid gap-2 p-4">
        <div className="flex justify-center h-[600px]">
          <img
            className="rounded-lg object-center object-contain"
            src={active}
            alt=""
          />
        </div>
        <div className="grid grid-cols-10 gap-1">
          {anos.map(({ href, name }, index) => (
            <div key={index}>
              <img
                onClick={() => setActive(href)}
                src={href}
                className="h-20 w-20 cursor-pointer rounded-lg object-cover object-center"
                alt={name}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

export function FeaturedProjectGallery() {
	return(
		<nav className="flex-grow">
			<ul className="flex gap-2 items-stretch">
				{Projetos.map((item, index) => {
					return (
						<li key={index} className=""> 
							<Link href={item.href} className={'flex gap-2 fill-white hover:fill-black p-2 font-medium hover:bg-white hover:text-black flex transition-all duration-300'}>
								{<span>{item.icon}</span>}
								{<span>{item.name}</span>}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}