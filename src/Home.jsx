
import CardFilme from "./CardFilme";

export default function Home({listafilmes = []}){
    listafilmes.sort((a, b) => a.id - b.id);
    return(
        <div className=" text-sm sm:text-base  lg:text-lg xl:text-2xl min-h-screen bg-black text-white ">
        <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"> 
            {listafilmes.map(e => <CardFilme key={e.id} id={e.id} nome={e.nome}/>)}
        </div>
        </div>
    )
}