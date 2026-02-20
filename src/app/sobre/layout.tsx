export default function Layout({children,}: {children: React.ReactNode;}) {
    return (
        <div className="p-4 max-w-screen-lg">
            {children}
        </div>
    );
}