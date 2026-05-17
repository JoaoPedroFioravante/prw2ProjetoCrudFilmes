import ButtonCard from "./ButtonCard";


export default function CardFilme({id, nome}){
    return (
        <div className=" my-1 mx-2 flex flex-col h-min py-3 bg-zinc-900">
            <p className=" self-center underline font-semibold py-1">{nome}</p>
            <div className="self-center">
            <ButtonCard linkTo={`/dados/${id}`} name="more about"/>
            <ButtonCard linkTo={`/edit/${id}`} name="edit"/>
            <ButtonCard linkTo={`/delete/${id}`} name="delete"/>
            </div>
        </div>
    )
}