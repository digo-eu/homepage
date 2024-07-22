export default function Layout({children,}: {children: React.ReactNode;}) {
    return (
        <div className="bg-50% bg-contain bg-right-top bg-no-repeat bg-[url('https://utfs.io/f/c85322a8-0a8c-4ca7-926b-305ef9a1931c-e0n5iu.webp')]">
            {children}
        </div>
    );
}
