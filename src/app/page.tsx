import Link from "next/link";
import React from "react";
import { FeaturedProjectGallery } from "~/components/gallery";

type NavItem = {
    name: string;
    href: string;
    icon: React.ReactNode;
};

export default function HomePage() {
	return (
		<main className="">
			<div className="w-fit p-4">
				<p className="text-justify text-2xl font-bold">Bem vindo à minha página!</p>
				<p>Essa é a casa de meus projetos mais importantes. Mais coisas em breve.</p>
				<br></br>
				<details className="rounded-xl bg-deep-blue bg-opacity-75 p-2">
					<summary className="text-2xl font-bold">Resumo profissional</summary>
					<p>Rodrigo tem experiência com BI, análise de dados e gestão financeira. Também desenvolve aplicativos web e dashboards, sempre buscando promover a visibilidade dos dados para apoiar decisões estratégicas. Tem proficiência com servidores e diversas ferramentas, incluindo programação com Python e TypeScript, geoprocessamento com QGIS e outras tecnologias de GIS, além de plataformas como Power BI e Tableau.</p>
				</details>
				<br></br>
				<div className="rounded-xl bg-deep-blue bg-opacity-75 p-2">
					<h2 className="text-2xl font-bold">Projetos</h2>
					<ul className="flex flex-col gap-2 items-stretch">
						<li>Links e demonstrações em breve!</li>
						<FeaturedProjectGallery />
					</ul>
				</div>
			</div>
			<p className="bottom-0 text-xl sm:text-8xl text-center text-red-600 hover:text-yellow-400">Em construção</p>
		</main>
	);
}
