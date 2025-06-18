function userCard(props){
    return (
        <div>
            <p>{props.name}  {props.email} <img src = {props.image} style={{width : '50px',height:'50px'}}/>
            </p> 
        </div>
    )
}

export default userCard;