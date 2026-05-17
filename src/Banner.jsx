import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Banner() {
    return (
        <div className="min-h-screen flex flex-col bg-black text-black">
            
            <div className="bg-neutral-800 text-sm sm:text-base lg:text-lg xl:text-2xl flex gap-5 px-5 py-5   ">
                
                <Link
                    to={"/home"}
                    className="bg-yellow-400 p-3 rounded text-black font-semibold"
                >
                    HOME
                </Link>

                <h1 className="bg-yellow-400 p-3 rounded mx-auto text-black font-semibold">
                    Melhores filmes da Galaxia
                </h1>

                <Link
                    to={"/create"}
                    className="bg-yellow-400 p-3 rounded text-black font-semibold"
                >
                    Adicionar um filme épico
                </Link>
            </div>

            <main className="flex-1">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}