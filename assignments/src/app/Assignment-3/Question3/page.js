import HomeComponent from "@/Assignment3Comopnents/page/home";

export default function Home(){
    return (
       <>
        <p> creat pages: Home and About.
            Implement file routing.
            Create navigation links to switch between the Home and About pages.
            Display appropriate content on each page.
            Add a "404 Not Found" page for any invalid routes. 
        </p>
        <HomeComponent/>
       </>
    );
}