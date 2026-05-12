import {Button} from "react-bootstrap";
import {Link} from "react-router";

export default function ButtonCard({linkTo, name}){
    return (
        <Link to={linkTo}>
            <Button>{name}</Button>
        </Link>
    );
}