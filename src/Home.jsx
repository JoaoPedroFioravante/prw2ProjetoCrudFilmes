
import CardFilme from "./CardFilme";

export default function Home({listafilmes = []}){
    listafilmes.sort((a, b) => a.id < b.id);
    return(
        <div> 
            {listafilmes.map(e => <CardFilme key={e.id} id={e.id} nome={e.nome}/>)}
        </div>
    )
}