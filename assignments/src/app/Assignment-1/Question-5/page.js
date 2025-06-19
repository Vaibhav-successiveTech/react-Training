import TaskList from "../../../components/taskList";
export default function Home(){
    let list = ['task1','task2','task3','task4','task5'];
    return (
        <TaskList list = {list}/>
    );
}