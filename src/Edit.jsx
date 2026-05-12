import {useParams} from "react-router-dom"

export default function Edit({listaFilmes, mudarFilme}){
    const id = useParams().id;
    let ano = new Date.getFullYear();
    const filme = listaFilmes.filter(e => e.id == id?true:false);
    //adicionar logica de useState para form
    return(
        <div>
            <h2>alteração das informações do filme de id: {id}</h2>
            <form onSubmit={e => e.preventDefault()}>
                <p>nome do filme</p>
                <input required type="text" placeholder="digite o nome do filme"/>
                <p>ano de lançamento</p>
                <input type="number" min={1900} max={ano}/>
                <p>diretor</p>
                <input required type="text" placeholder="digite o nome do diretor do filme"/>
                <button type="submit" children="enviar" /> //envia e volta para home
                <button type="button" onClick={console.log("click")} children="cancelar"/> //botao cancelar vai para home nada acontece
            </form>
        </div>
    )
}