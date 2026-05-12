export default function Create({setarFilmes}){
    let ano = new Date.getFullYear();
    return(
        <div>
            <h2>preencha os dados e adicione um filme</h2>
            <form>
                <p>id do filme</p>
                <input required type="text" placeholder="digite o id do filme"/>
                <p>nome do filme</p>
                <input required type="text" placeholder="digite o nome do filme"/>
                <p>ano de lançamento</p>
                <input type="number" min={1900} max={ano}/>
                <p>diretor</p>
                <input required type="text" placeholder="digite o nome do diretor do filme"/>
                //1 botao criar manda o http e vai para home
                //botao cancelar vai para home nada acontece
                <button type="submit"/>
                <button type="button" onClick={console.log("click....")}/>
            </form>
            
        </div>
    )
}