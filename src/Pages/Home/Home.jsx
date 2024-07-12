import Header from "../shared/Header/Header";
import Leftsidenav from "../shared/Leftsidenav/Leftsidenav";
import Navbar from "../shared/Navbar/Navbar";
import Rightsidenav from "../shared/Rightsidenav/Rightsidenav";
import Breakingnews from "./Breakingnews";


const Home = () => {
    return (
        <div>
            
            <Header></Header>
            <Breakingnews></Breakingnews>
            <Navbar></Navbar>
            <div className="grid grid-colos-1 md:grid-cols-4 gap-4">
                <div className="border">
                    <Leftsidenav></Leftsidenav>
                </div>
                <div className="grid col-span-2 border">
                   <h2>news comming soon</h2>
                </div>
                <div className="border">
                    <Rightsidenav></Rightsidenav>
                </div>
            </div>
        </div>
    );
};

export default Home;