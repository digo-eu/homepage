import Link from "next/link";

export default function HomePage() {
	return (
		<main className="">
			<p className="text-xl sm:text-8xl text-center text-red-600 hover:text-yellow-400 py-4 px-4">Em construção!</p>
            <p className="text-justify">Vamos ver se eu consigo!</p>
            <div className="w-100">
                <img src="https://utfs.io/f/648b28b1-0df2-40e0-8854-c753d60edfdd-1l7cp.png" alt="Vlad is a cat" />
            </div>
            <div className="sm:text-9xl font-extrabold tracking-tight text-center">
                Este é o Vlad
            </div>
		</main>
	);
}
