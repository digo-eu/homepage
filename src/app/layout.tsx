import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "Rodrigo Andrade",
  description: "Site pessoal e portfólio",
  icons: [{ rel: "icon", url: "https://utfs.io/f/648b28b1-0df2-40e0-8854-c753d60edfdd-1l7cp.png" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
    <body>
    <nav data-orientation="horizontal" dir="ltr" className="w-full sticky top-0 flex gap-12 px-4 py-4">
    <span className="container flex text-4xl font-extrabold tracking-tight text-white sm:text-[3rem]">Rodrigo Andrade</span>
    <ul data-orientation="horizontal" dir="rtl" className="container flex gap-12">
    <li><a className="text-2xl font-bold" href="/casamento">Casamento</a></li>
    <li><a className="text-2xl font-bold" href="/air">Go+HTMX</a></li>
    <li><a className="text-2xl font-bold" href="/geoserver">Geoserver</a></li>
    </ul>
    <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 24 40" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
	    <line x1="4" x2="20" y1="6" y2="6"></line>
    <line x1="4" x2="20" y1="12" y2="12"></line>
    <line x1="4" x2="20" y1="18" y2="18"></line>
    </svg>
    </nav>

    {children}

    </body>
    </html>
  );
}
