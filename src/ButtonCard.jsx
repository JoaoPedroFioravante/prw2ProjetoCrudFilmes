import { useNavigate} from "react-router-dom";

export default function ButtonCard({linkTo, name}){
    const navigate = useNavigate();
    return (
            <button onClick={()=>{
                navigate(linkTo)
            }} children={name}/>
    );
}