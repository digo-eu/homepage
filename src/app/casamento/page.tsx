import Image from "next/image";

const urlList = [
	"https://utfs.io/f/8af43d3e-891a-47f6-83f3-51d4d12de5f5-1k805c.2014-1.jpg",
	"https://utfs.io/f/efa1d735-c776-436d-be40-be40f187c223-1k805c.2014-2.jpg",
	"https://utfs.io/f/f871f8e5-ab96-4e85-9371-276a50bb457b-1k805c.2015.jpg",
	"https://utfs.io/f/d6af02ad-3369-4194-9763-33ea05e99050-1k805c.2016.jpg",
	"https://utfs.io/f/29de2cc4-6fd9-4c88-ad26-4bdaad498b5b-1k805c.2017.png",
	"https://utfs.io/f/081b2a3e-6e86-48ba-ba30-76349e959b8f-1k805c.2018.jpg",
	"https://utfs.io/f/4ff53297-8e71-471d-b4a9-d5cdf69a7bf8-1k805c.2019.jpg",
	"https://utfs.io/f/05e71805-1851-462d-821a-e89b5a126466-1k805c.2020.jpg",
	"https://utfs.io/f/57313332-3189-437b-874a-315eff67084c-1k805c.2021.jpg",
	"https://utfs.io/f/ad982f93-b31e-4205-8b1e-029a6e6b4354-1k805c.2022.jpg",
	"https://utfs.io/f/0560ad38-c02b-4ea5-83d9-9aa1b6398364-1k805c.2023-1.jpg",
	"https://utfs.io/f/a9d4f781-57df-49db-accd-409eeffa83e3-1k805c.2023-2.jpg",
	"https://utfs.io/f/2938d582-9e1d-45e6-8633-26eae3aca29d-1k805c.2024.jpg",
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
					<div>Taís e Rodrigo</div>
				</div>
			))}
		</div>
	);
}

export default function CasamentoPage() {
	return (
		<main className="">
			<p className="text-8xl text-center text-red-600 hover:text-yellow-400 py-4 px-4">
				Em construção!
			</p>
			<Images />
		</main>
	);
}
