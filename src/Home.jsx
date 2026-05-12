
import CardFilme from "./CardFilme";

export default function Home({listafilmes = []}){
    
    return(
        <div> 
            {listafilmes.map(e => <CardFilme key={e.id} id={e.id} nome={e.nome}/>)}
        </div>
    )
}