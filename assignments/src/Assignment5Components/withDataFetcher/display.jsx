import withDataFetcher from "./hoc";

function DisplayComponent(props){
    let list = props.data;
    return (
        <>
        {
            list.map((i,idx) => <h4><div key={idx}> {JSON.stringify(i)} <br/></div></h4>)
        }
        </>
    );
}

export default withDataFetcher(DisplayComponent);