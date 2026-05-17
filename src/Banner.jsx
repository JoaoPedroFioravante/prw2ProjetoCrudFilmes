import {Link, Outlet} from "react-router-dom";
export default function Banner(){
    return(
    
    <>
        <div className="bg-neutral-800 text-sm sm:text-base  lg:text-lg xl:text-2xl text-white flex gap-20 px-5 py-5">
            <Link to={"/home"} className="bg-yellow-400 p-3 rounded text-black font-semibold">HOME</Link>
            <h1 className="bg-yellow-400 p-3 rounded ml-auto text-black font-semibold">Melhores filmes da Galaxia</h1>
            <Link to={"/create"} className="bg-yellow-400 p-3 rounded ml-auto  text-black font-semibold" children={"Adicionar um filme épico"}/>
        </div>
        <Outlet />
    </>
    )
}