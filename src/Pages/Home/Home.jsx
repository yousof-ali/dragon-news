import Header from "../shared/Header/Header";
import Leftsidenav from "../shared/Leftsidenav/Leftsidenav";
import Navbar from "../shared/Navbar/Navbar";
import Rightsidenav from "../shared/Rightsidenav/Rightsidenav";
import Breakingnews from "./Breakingnews";


const Home = () => {
    return (
        <div className="space-y-4">
            <Header></Header>
            <Breakingnews></Breakingnews>
            <Navbar></Navbar>
            <div className="grid grid-colos-1 md:grid-cols-4 gap-4">
                <div className="">
                    <Leftsidenav></Leftsidenav>
                </div>
                <div className="grid md:col-span-2 ">
                   <h2>news comming soon</h2>
                </div>
                <div className="">
                    <Rightsidenav></Rightsidenav>
                </div>
            </div>
        </div>
    );
};

export default Home;