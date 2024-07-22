import Image from "next/image";
import Link from "next/link";
import { FeaturedImageGallery } from "~/components/gallery";

export default function CasamentoPage() {
	return (
		<main className="">
			<div className="w-fit p-4">
				<h1 className="text-4xl">Bem vindo!</h1>
				<br></br>
				<details className="rounded-xl bg-deep-blue bg-opacity-75 p-2">
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
					<p>Nosso dress code será “vá arrumado, mas pode deixar o terno e a gravata em casa se quiser”.</p>
				</details>
				<br></br>
				<details className="rounded-xl bg-deep-blue bg-opacity-75 p-2">
					<summary className="text-2xl font-bold">Sobre o casal</summary>
					<p>Por muitos anos estudamos na mesma escola, mas em séries diferentes. Nos víamos nos corredores, sabíamos da existência do outro e seguíamos um ao outro em redes sociais (Facebook e Instagram). Mas até sairmos desta escola para nos prepararmos para o vestibular, nunca nos falamos.</p>
					<p>Até que, em outubro de 2014, o Rodrigo resolveu puxar assunto com a Taís. Era uma longa aula de química do 3º ano do ensino médio, que ele fazia em São José dos Campos. Entediado, Rodrigo olhava o Instagram em seu celular e o perfil da Taís lhe chamou a atenção. Vendo que o perfil estava repleto dos desenhos dela, ele decidiu comentar sobre um dos quadros, perguntando a Taís sobre como o havia feito.</p>
					<p>[Quadro de Campos do Jordão aqui]</p>
					<p>Aproveitaram para conversar pessoalmente também, e em pouquíssimo tempo descobriram coisas essenciais em comum:</p>
					<p>Amor pelas artes. Enquanto Taís era desenhista, Rodrigo escrevia poesias.</p>
					<p>[Colocar a poesia - ou trechos dela - que o meu amor escreveu pra mim]</p>
					<br></br>
					<p>Ambos são loucos por bichinhos e conviveram com vários no decorrer da vida, cultivando um amor infinito por cada um deles. Hoje moram com 2 gatinhos lindos, Pinta e Vlad.</p>
					<p>[FOTO DOS GATINHOS LINDOS]</p>
					<br></br>
					<p>Amam conhecer lugares novos e andar no meio da natureza, mais ainda se der para avistar bichos!</p>
					<p>[Fotos de nós dois em umas paisagens fofinhas]</p>
					<br></br>
					<p>Amor por jogos (de computador, videogame).</p>
					<p>[Pode botar fotos da nossa casinha do Minecraft - e outras]</p>
				</details>
				<br></br>
				<details className="rounded-xl bg-deep-blue bg-opacity-75 p-2">
					<summary className="text-2xl font-bold">Lista de Presentes</summary>
					<p>Como já moramos juntos, em um lindo lar mobiliado, estamos focando em juntar recursos para nossa lua de mel. Sinta-se à vontade para contribuir com nossos planos de viagem!</p>
					<p>A chave PIX é roz.andrade@gmail.com ou através dos QR Codes abaixo.</p>
					<div className="grid md:grid-cols-2">
						<div className="p-2">
							<p>R$ 50  - Jantar feito pelo próprio Remi do Ratatouille</p>
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
							<p>R$ 200 - Entrada no restaurante da Torre Eiffel</p>
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
							<p>R$ 500 - Upgrade de quarto para uma noite</p>
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
							<p>R$ 1.000 - Vamos fazer biquinho de francês até voltar pro Brasil</p>
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
							<p>R$ 50.000 - Fiança se falharmos em roubar o Pantera-Cor-de-Rosa</p>
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

						<p></p>
						<p>[Prato com 2 ervilhas]</p>
						<p></p>
						<p>[Quarto xexelento com seta pra cima indicando upgrade]</p>
						<p></p>
						<p>[Foto fazendo biquinho e com o mindinho levantado]</p>
						<p></p>
						<p>[Foto do Clouseau preso]</p>

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
									src='https://utfs.io/f/0ba0a920-f5b2-4506-a6df-e838145d4ba7-jhy2de.jpg'
									width={150} height={150}
									alt=""
									className="object-cover"
								/>
							</div>
						</div>
					</div>
				</details>
			</div>

			<FeaturedImageGallery />

		</main>
	);
}
