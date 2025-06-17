function userCard(props){
    return (
        <div>
            <p>{props.name}  {props.email} <img src = {props.image}/> </p>
        </div>
    )
}

export default userCard;