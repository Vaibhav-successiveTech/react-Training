import UserCard from "@/Question-2/usercard";
import Weather from "@/Question-3/weatherComponent";
import MyComponent from "@/Question-1/component";
import ChangeCount from "@/Question-4/count";
import TaskList from "@/Question-5/taskList";
import Button from "@/Question-6/button";

// image1 = 'https://lnk.ink/wlXSO'
// image2 = 'https://lnk.ink/pGKId'
// image3 = 'https://lnk.ink/7vkiI'


export default function Home() {
   let list = ['task1','task2','task3','task4','task5'];
  return (
     //<Button text = 'This is Button' color='Blue'></Button>
    // <TaskList list={list}/>
    <>
    <UserCard name = 'Vaibhav' email = 'vaibhav@successive.tech' image = './man.png'/>
    <UserCard name = 'Aklhi' email = 'aklhil@successive.tech' image = './man.png'/>
    <UserCard name = 'Divyanshu' email = 'Divyanshu@successive.tech' image = './man.png'/>
    </>
  );
}
