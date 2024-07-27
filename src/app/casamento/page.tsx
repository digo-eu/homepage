import Image from "next/image";
import Link from "next/link";
import { FeaturedImageGallery } from "~/components/gallery";

export default function CasamentoPage() {
	return (
		<main className="">
			<div className="w-fit p-4">
				<h1 className="text-4xl">Bem vindo!</h1>
				<br></br>
				<details className="rounded-xl bg-deep-blue bg-opacity-75 p-2 gap-2">
					<summary className="text-2xl font-bold">Como confirmar presença?</summary>
					<p>Através do Whatsapp de um dos noivos:</p>
					<p>Taís: (11) 96370-5024</p>
					<p>Rodrigo: (11) 99243-5070</p>
					<p>Pedimos para que seja confirmado presença o quanto antes possível, pois essa informação será repassada aos fornecedores do evento.</p>
				</details>
				<br></br>
				<details className="rounded-xl bg-deep-blue bg-opacity-75 p-2">
					<summary className="text-2xl font-bold">O que saber sobre o dia?</summary>
					<p>O casamento será dia 20 de Novembro de 2024. Uma quarta-feira, feriado nacional. Escolhemos essa data por ser especial para nós: completaremos 10 anos juntos.</p>
					<p>Não pretendemos fazer cerimônia, e sim recepção, que será um café colonial. Portanto, é só chegar, se servir à vontade e se divertir!</p>
					<p>Nosso dress code será "vá arrumado, mas confortável". Vestido ou uma roupa bonita. O entorno tem chão de terra, então saltos finos podem não ser boa opção. Pode também deixar o terno e a gravata em casa se quiser.</p>
				</details>
				<br></br>
				<details className="rounded-xl bg-deep-blue bg-opacity-75 p-2">
					<summary className="text-2xl font-bold">Sobre o casal</summary>
					<div className="text-justify space-y-2">
						<p>Por muitos anos estudaram na mesma escola, mas em séries diferentes. Se viam nos corredores, sabiam da existência do outro e seguiam um ao outro em redes sociais. Mas até sairem da escola para se prepararem para o vestibular, nunca se falaram. Rodrigo diz não se incomodar com esse fato, pois ele era muito esquisito na adolescência.</p>
						<p>Até que, em outubro de 2014, o Rodrigo resolveu puxar assunto com a Taís. Era uma longa aula de química do 3º ano do ensino médio, que ele fazia em São José dos Campos. Entediado, Rodrigo olhava o Instagram em seu celular e o perfil da Taís lhe chamou a atenção. Vendo que o perfil estava repleto dos desenhos dela, ele decidiu comentar sobre um dos quadros, perguntando a Taís sobre como o havia feito.</p>
						<div className="flex-rows justify-center rounded-md ring-white ring-1 p-1">
							<p><b>Este é o quadro.</b> Hoje está pendurado na sala da casa deles.</p>
							<Image src='https://utfs.io/f/f84aea05-6e3e-4833-9d53-f141094a2027-20fhfj.jpg' width={400} height={150} alt="Quadro de Campos do Jordão" className="p-2" />
						</div>

						<p>Taís gostou da pergunta e do jeito que a conversa fluiu com muita facilidade. Os dois descobriram no outro um interesse sincero e em tudo pareciam se encontrar.</p>
						<p>Aproveitaram para conversar pessoalmente também, e em pouquíssimo tempo descobriram coisas essenciais em comum:</p>

						<div className="flex-rows justify-center rounded-md ring-white ring-1 p-1">
							<p><b>Amam as artes.</b> Enquanto Taís é desenhista, Rodrigo escreve poesia.</p>
							<Image src='https://utfs.io/f/f765fe57-495d-48e7-b5f4-00047e828d21-1a0kl6.jpg' width={400} height={150} alt="Poema" className="p-2" />
						</div>
						
						<div className="w-fit flex-rows justify-center rounded-md ring-white ring-1 p-1">
							<p><b>Ambos são loucos por bichinhos</b> e conviveram com vários no decorrer da vida, cultivando um amor infinito por cada um deles. Hoje moram com 2 gatinhos lindos, Vlad e Pinta.</p>
							<div className="grid grid-cols-2 p-2 justify-center">
								<Image src='https://utfs.io/f/49b743d5-13e3-4b71-b0f6-5b4fee88bab2-1l7cp.jpg' width={400} height={150} alt="Vlad" />
								<Image src='https://utfs.io/f/8c7fcd77-9127-4d47-a8af-59b9b2305b1b-19wxia.jpg' width={400} height={150} alt="Pinta" />
							</div>
						</div>
						
						<div className="flex-rows justify-center rounded-md ring-white ring-1 p-1">
							<p><b>Amam conhecer lugares novos</b> e andar no meio da natureza, mais ainda se der para avistar bichos.</p>
							<Image src='https://utfs.io/f/4c8e3fa8-b9fc-4074-a147-0671c6f54720-lr101e.jpg' width={400} height={150} alt="Warframe" className="p-2" />
						</div>

						<div className="flex-rows justify-center rounded-md ring-white ring-1 p-1">
							<p><b>Adoram jogos</b> e fazem muitas aventuras virtuais juntos.</p>
							<Image src='https://utfs.io/f/c2522dc2-7265-4daa-ab61-1a29d66195f0-96shwl.jpg' width={400} height={150} alt="Warframe" className="p-2" />
						</div>

						<p>Hoje esses dois se encaixaram tão bem que mesmo após 10 anos juntos, nunca desgrudam um do outro. Este casamento será mais um marco na história deles, e por isso deve contar com a sua presença!</p>
					</div>
				</details>
				<br></br>
				<details className="rounded-xl bg-deep-blue bg-opacity-75 p-2">
					<summary className="text-2xl font-bold">Lista de Presentes</summary>
					<p>Como já moram juntos, em um lindo lar mobiliado, o casal está focando em juntar recursos para a lua de mel. Sinta-se à vontade para contribuir com os planos de viagem!</p>
					<p>A chave PIX é roz.andrade@gmail.com ou através dos QR Codes abaixo.</p>
					<div className="grid md:grid-cols-2">
						<div className="p-2">
							<p>R$ 50  - Jantar feito pelo próprio Remy do Ratatouille</p>
							<div className="w-fit flex justify-center rounded-md ring-white ring-1 p-2">
								<Image
									src='https://utfs.io/f/db173a09-0d5d-4ad2-9dba-880bf3fd5c8d-1h4x9.png'
									width={150} height={150}
									alt="R$50"
									className="bg-white"
								/>
								<Image
									src='https://utfs.io/f/d3a857a2-1387-478d-8f99-565c65354386-1iiin.jpg'
									width={150} height={150}
									alt="Remy"
									className="object-cover"
								/>
							</div>
						</div>

						<div className="p-2">
							<p>R$ 100 - Croissant no palácio de Versalhes</p>
							<div className="w-fit flex justify-center rounded-md ring-white ring-1 p-2">
								<Image
									src='https://utfs.io/f/db173a09-0d5d-4ad2-9dba-880bf3fd5c8d-1h4x9.png'
									width={150} height={150}
									alt="R$100"
									className="bg-white"
								/>
								<Image
									src='https://utfs.io/f/0ba0a920-f5b2-4506-a6df-e838145d4ba7-jhy2de.jpg'
									width={150} height={150}
									alt="Croissant"
									className="object-cover"
								/>
							</div>
						</div>

						<div className="p-2">
							<p>R$ 200 - Aperitivo no restaurante da Torre Eiffel</p>
							<div className="w-fit flex justify-center rounded-md ring-white ring-1 p-2">
								<Image
									src='https://utfs.io/f/db173a09-0d5d-4ad2-9dba-880bf3fd5c8d-1h4x9.png'
									width={150} height={150}
									alt="R$100"
									className="bg-white"
								/>
								<Image
									src='https://utfs.io/f/c1349814-741f-4685-b52a-be2937e2c396-pyh6um.jpg'
									width={150} height={150}
									alt="Aperitivo"
									className="object-cover"
								/>
							</div>
						</div>

						<div className="p-2">
							<p>R$ 500 - Upgrade de quarto para uma noite</p>
							<div className="w-fit flex justify-center rounded-md ring-white ring-1 p-2">
								<Image
									src='https://utfs.io/f/db173a09-0d5d-4ad2-9dba-880bf3fd5c8d-1h4x9.png'
									width={150} height={150}
									alt="R$100"
									className="bg-white"
								/>
								<Image
									src='https://utfs.io/f/0dbcc14c-b6ea-4c5a-8e3c-98069df9f032-o0zynh.png'
									width={150} height={150}
									alt="Upgrade"
									className="object-cover"
								/>
							</div>
						</div>

						<div className="p-2">
							<p>R$ 1.000 - Vamos fazer biquinho de francês até voltar pro Brasil</p>
							<div className="w-fit flex justify-center rounded-md ring-white ring-1 p-2">
								<Image
									src='https://utfs.io/f/db173a09-0d5d-4ad2-9dba-880bf3fd5c8d-1h4x9.png'
									width={150} height={150}
									alt="R$100"
									className="bg-white"
								/>
								<Image
									src='https://utfs.io/f/ae60e78e-5719-4e6f-8974-418dc464d280-zavr4o.png'
									width={150} height={150}
									alt="Francês"
									className="object-cover"
								/>
							</div>
						</div>

						<div className="p-2">
							<p>R$ 50.000 - Fiança se falharmos em roubar o Pantera-Cor-de-Rosa</p>
							<div className="w-fit flex justify-center rounded-md ring-white ring-1 p-2">
								<Image
									src='https://utfs.io/f/db173a09-0d5d-4ad2-9dba-880bf3fd5c8d-1h4x9.png'
									width={150} height={150}
									alt="R$50.000"
									className="bg-white"
								/>
								<Image
									src='https://utfs.io/f/26b83baa-5f26-43a7-80e7-57f97f6fba87-sh83fw.jpg'
									width={150} height={150}
									alt="Pantera Cor-de-Rosa"
									className="object-cover"
								/>
							</div>
						</div>

						<div className="p-2">
							<p>Outros valores</p>
							<div className="w-fit flex justify-center rounded-md ring-white ring-1 p-2">
								<Image
									src='https://utfs.io/f/b002e1cd-5418-457b-a992-305e8ea21a15-l0oci1.png'
									width={150} height={150}
									alt="Qualquer valor"
									className="bg-white"
								/>
								<Image
									src='https://utfs.io/f/2ed0902c-507e-4046-8356-723cae19a4ff-6ezia7.png'
									width={150} height={150}
									alt="Obrigado!"
									className="object-cover"
								/>
							</div>
						</div>
					</div>
				</details>
			</div>

			<div className="md:p-4">
				<FeaturedImageGallery />
			</div>

		</main>
	);
}
