export default function Weather(props){
    if(props.temperature > 25){
        return (
            <h1>It's a Sunny Day Today</h1>
        )
    }else if(props.temperature < 10){
        return (
            <h1>It's Cold Today</h1>
        )
    }else{
        return (
            <h1>It's Good Day Today</h1>
        )
    }
}