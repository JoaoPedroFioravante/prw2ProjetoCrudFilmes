import { useNavigate} from "react-router-dom";

export default function ButtonCard({linkTo, name}){
    const navigate = useNavigate();
    return (
            <button className="bg-yellow-500 m-1 p-1 rounded text-black" onClick={()=>{
                navigate(linkTo)
            }} children={name}/>
    );
}