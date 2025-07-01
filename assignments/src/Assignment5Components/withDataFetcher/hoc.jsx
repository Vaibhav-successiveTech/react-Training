import axios from "axios";
export default function withDataFetcher(InnerComp){
    async function WithDataFetcher(props){

        let data = [];

        try{
            const res = await axios('https://jsonplaceholder.typicode.com/users');
            data = res.data;
        }catch(err){
            console.log(err);
        }

        return (
            <InnerComp {...props} data = {data}/>
        );
    }
    return WithDataFetcher;

}