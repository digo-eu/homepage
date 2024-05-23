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
      <body>{children}</body>
    </html>
  );
}
