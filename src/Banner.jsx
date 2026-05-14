import {Link, Outlet} from "react-router-dom";
export default function Banner(){
    return(
    
    <>
        <div>
            <h1>Melhores filmes da Galaxia</h1>
            <Link to={"/create"} children={"adicionar um filme épico"}/>
        </div>
        <Outlet/>
    </>
    )
}