import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import Leftsidenav from "../shared/Leftsidenav/Leftsidenav";
import Navbar from "../shared/Navbar/Navbar";
import Rightsidenav from "../shared/Rightsidenav/Rightsidenav";
import Breakingnews from "./Breakingnews";
import Singlenews from "./Singlenews";


const Home = () => {
    const allNews = useLoaderData();
    console.log(allNews);

    return (
        <div className="space-y-4">
            <Header></Header>
            <Breakingnews></Breakingnews>
            <Navbar></Navbar>
            <div className="grid grid-colos-1 md:grid-cols-4 gap-4">
                <div className="">
                    <Leftsidenav></Leftsidenav>
                </div>
                <div className="grid md:col-span-2 space-y-8 mt-6 ">
                   {
                    allNews.map(anews =><Singlenews key={anews.key} news={anews} ></Singlenews>)
                   }
                </div>
                <div className="">
                    <Rightsidenav></Rightsidenav>
                </div>
            </div>
        </div>
    );
};

export default Home;