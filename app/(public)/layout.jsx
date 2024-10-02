import { Navbar } from "@/components/navbar/Navbar";

export default function PublicLayout({children}) {
    return (
        <>
            <Navbar/>
            <main>
                <h1>Hola Mundo</h1>
                {children}
            </main>
        </>
    );
}