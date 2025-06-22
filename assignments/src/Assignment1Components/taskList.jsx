function ListComponent({name}){
    return (
        <li>{name}</li>
    )
}

export default function taskList({list}){
    const arr = list.map((i) => <ListComponent name = {i}/>);

    return (
        
            <ol>{arr}</ol>
    );
}