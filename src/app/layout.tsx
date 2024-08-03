import dynamic from 'next/dynamic'
import "~/styles/globals.css";
import NavLayout from "../components/navlayout";
import { GeistSans } from "geist/font/sans";
import { CSPostHogProvider } from './provider'

export const metadata = {
    title: "Rodrigo Andrade",
    description: "Site pessoal e portfólio",
    icons: [{ rel: "icon", url: "https://utfs.io/f/648b28b1-0df2-40e0-8854-c753d60edfdd-1l7cp.png" }],
};

export default function Layout({children,}: {children: React.ReactNode;}) {
    return (
        <html lang="pt" className={`${GeistSans.variable}`}>
            <CSPostHogProvider>
                <body>
                    <NavLayout>

                        {children}

                    </NavLayout>
                </body>
            </CSPostHogProvider>
        </html>
    );
}