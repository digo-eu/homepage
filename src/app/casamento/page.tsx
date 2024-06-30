import Image from "next/image";

const urlList = [
    "https://utfs.io/f/2938d582-9e1d-45e6-8633-26eae3aca29d-1k805c.2024.jpg",
    "https://utfs.io/f/a9d4f781-57df-49db-accd-409eeffa83e3-1k805c.2023-2.jpg",
    "https://utfs.io/f/0560ad38-c02b-4ea5-83d9-9aa1b6398364-1k805c.2023-1.jpg",
    "https://utfs.io/f/ad982f93-b31e-4205-8b1e-029a6e6b4354-1k805c.2022.jpg",
    "https://utfs.io/f/57313332-3189-437b-874a-315eff67084c-1k805c.2021.jpg",
    "https://utfs.io/f/05e71805-1851-462d-821a-e89b5a126466-1k805c.2020.jpg",
	"https://utfs.io/f/4ff53297-8e71-471d-b4a9-d5cdf69a7bf8-1k805c.2019.jpg",
    "https://utfs.io/f/081b2a3e-6e86-48ba-ba30-76349e959b8f-1k805c.2018.jpg",
    "https://utfs.io/f/29de2cc4-6fd9-4c88-ad26-4bdaad498b5b-1k805c.2017.png",
    "https://utfs.io/f/d6af02ad-3369-4194-9763-33ea05e99050-1k805c.2016.jpg",
    "https://utfs.io/f/f871f8e5-ab96-4e85-9371-276a50bb457b-1k805c.2015.jpg",
    "https://utfs.io/f/efa1d735-c776-436d-be40-be40f187c223-1k805c.2014-2.jpg",
    "https://utfs.io/f/8af43d3e-891a-47f6-83f3-51d4d12de5f5-1k805c.2014-1.jpg",
]

const imageList = urlList.map(( url, index ) => ({ id: index + 1, url, }));

async function Images() {
	return (
		<div className="flex flex-wrap justify-center gap-4 p-4">
			{imageList.map((image) => (
				<div key={image.id} className="flex h-48 w-48 flex-col">
					<Image
						src={image.url}
						style={{ objectFit: "contain" }}
						width={192}
						height={192}
						alt="Foto do casal"
					/>
				</div>
			))}
		</div>
	);
}

export default function CasamentoPage() {
	return (
		<main className="">
			<div className="p-4">
					<h1 className="text-4xl">Bem vindo!</h1>
					<br></br>
					<h2 className="text-2xl font-bold">Como confirmar presença?</h2>
					<p>Através do Whatsapp de um dos noivos:</p>
					<p>Taís: (11) 96370-5024</p>
					<p>Rodrigo: (11) 99243-5070</p>
					<p>Pedimos para que seja confirmado presença o quanto antes possível, pois essa informação será repassada aos fornecedores do evento.</p>
					<br></br>
					<h2 className="text-2xl font-bold">O que saber sobre o dia?</h2>
					<p>O casamento será dia 20 de Novembro de 2024. Uma quarta-feira, feriado nacional. Escolhemos essa data por ser especial para nós: completaremos 10 anos juntos.</p>
					<p>Não pretendemos fazer cerimônia, e sim recepção, que será um café colonial. Portanto, é só chegar, se servir à vontade e se divertir!</p>
					<br></br>
					<h2 className="text-2xl font-bold">Sobre o casal:</h2>
					<p>Por muitos anos estudamos na mesma escola, mas em séries diferentes. Nos víamos nos corredores, sabíamos da existência do outro, seguíamos um ao outro em redes sociais (Facebook e Instagram). Mas, até sairmos desta escola para nos prepararmos para o vestibular, nunca nos falamos.</p>
					<p>Em outubro de 2014, Rodrigo, vendo que os perfis de redes sociais da Taís possuíam muitos desenhos dela, resolveu puxar assunto sobre isso.</p>
					<p>[De repente, colocar o quadro de Campos do Jordão aqui]</p>
					<p>Aproveitaram para conversar pessoalmente também, e em pouquíssimo tempo descobriram coisas essenciais em comum:</p>
					<p>Amor pelas artes. Enquanto Taís era desenhista, Rodrigo escrevia poesias.</p>
					<p>[Colocar a poesia – ou trechos dela – que o meu amor escreveu pra mim]</p>
					<br></br>
					<p>Amor por animais. Ambos conviveram com muitos bichinhos no decorrer da vida, e cultivaram com isso um amor infinito por cada um deles (6 cachorros e 25 gatos da Taís; 1 coelho, 2 cachorros e 10 gatos do Rodrigo). Hoje, moram com 2 gatinhos lindos, Pinta e Vlad.</p>
					<p>[FOTO DOS GATINHOS LINDOS]</p>
					<br></br>
					<p>6 cachorros e 25 gatos: Godinha, Lepinha, Dollynha, Lila, Tammy, Kell, Fifo, Bóris, Zazá, Branco, Lili, Bibi, Zilu, Bóris Júnior, Bóris Chorão, Pelé, Fuka, Filó, Laila, Peter, Safi, Sininho, Negrinho, Mia, Jack, Toulouse, Luna, Tommen, Nala, Maggie e Quin.</p>
					<p>2 cachorros, 1 coelho e 10 gatos: Tico Puccini e Teco Vivaldi, Floquinho, Pepe, Elvis, Felpudo, Ozzy, Princesa, Ágata, Pinta, Nina, Vlad, Frajolinha.</p>
					<br></br>
					<p>Amor por passear em lugares bonitos. Conhecer lugares, andar no meio da natureza, ver bichinhos.</p>
					<p>[Fotos de nós dois em umas paisagens fofinhas)</p>
					<br></br>
					<p>Amor por jogos (de computador, videogame).</p>
					<p>[Pode botar fotos da nossa casinha do Minecraft – e outras)</p>
					<br></br>
			</div>
			
			<Images />

		</main>
	);
}
