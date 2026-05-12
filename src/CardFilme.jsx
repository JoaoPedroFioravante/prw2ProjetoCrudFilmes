import ButtonCard from "./ButtonCard";


export default function CardFilme({id, nome}){
    return (
        <div>
            <p>{nome}</p>
            <ButtonCard linkTo={`/dados/${id}`} name="mais informações"/>
            <ButtonCard linkTo={`/edit/${id}`} name="edit"/>
            <ButtonCard linkTo={`/delete/${id}`} name="delete"/>
        </div>
    )
}