import ButtonCard from "./ButtonCard";

export default function Home(listafilmes = []){
    
    return(
        <div> 
            {listafilmes.map(e => <ButtonCard key={e.id} id={e.id} nome={e.nome}/>)}
        </div>
    )
}