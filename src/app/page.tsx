import Link from "next/link";
import React from "react";
import { MenuIcon } from "~/components/assets";
import { FeaturedProjectGallery } from "~/components/gallery";

type NavItem = {
    name: string;
    href: string;
    icon: React.ReactNode;
};

export default function HomePage() {
	return (
		<main className="">
			<div className="p-4 max-w-screen-lg">
				<p className="text-justify text-4xl font-bold">Bem vindo à minha página!</p>
				<p>Essa é a casa de meus projetos mais importantes. Sinta-se à vontade para explorar e entre em contato para maiores detalhes sobre algum projeto do seu interesse!</p>
				<br></br>
				<div className="rounded-xl bg-deep-blue bg-opacity-75 p-2">
					<h2 className="text-2xl font-bold">Resumo profissional</h2>
					<p>Rodrigo Andrade é Analista na A&M Performance – Operações. Lá conduziu BIDs e negociações de fretes, diagnóstico amplo de logística e automações de processos administrativos. Atuou próximo aos clientes, acolhendo suas necessidades e entregando soluções.​</p>
					<p>Ingressou no ramo da consultoria há 3 anos, realizando estudos de mercado para expansão de redes de varejo e serviços. Trabalhou junto a um fundo soberano dos EAU em um processo de due dilligence, criou planos detalhados de abertura de lojas com sistemas de informação geográfica aliados a dados abertos e proprietários, além de planejar rotas de voo e editar muitas horas de vídeo com drones para apresentações de pontos comerciais.​</p>
					<p>Experiente com diversas tecnologias, Rodrigo busca trazer visibilidade para dados e relações complexas traduzindo-os em visualizações simples ou experiências interativas. Se utiliza de aplicativos web, ferramentas de BI e diversos softwares para suas criações, sempre explorando novos caminhos.​</p>
					<p>Em suas outras aventuras profissionais já foi analista de controladoria, participou de uma equipe de inovação hospitalar em reabilitação, atuou como agente de saúde comunitária e criou com amigos um estúdio de jogos.​</p>
					<p>É graduado em Administração de Empresas pela FGV-EAESP. Fala português e inglês fluentemente, compreende bem espanhol e é iniciante em alemão.</p>
				</div>
				<br></br>
				<div className="rounded-xl bg-deep-blue bg-opacity-75 p-2">
					<h2 className="text-2xl font-bold">Projetos</h2>
					<p>Navegue pela aba lateral com o botão de menu no topo da página e conheça meus projetos favoritos.</p>
				</div>
			</div>
		</main>
	);
}
