import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Breakingnews = () => {
    return (
        <div>
            <div className="flex bg-gray-200 p-2">
                <button className="btn border-none bg-red-600 text-white rounded-none hover:bg-red-400">Latest</button>
                <Marquee pauseOnHover={true}>
                    <Link className="mr-4" to={'/'}>I can be a React component.......</Link>
                    <Link className="mr-4"  to={'/'}>Sports.......</Link>
                    <Link className="mr-4"  to={'/'}>National.......</Link>
                    <Link className="mr-4"  to={'/'}>InterNational.......</Link>
                </Marquee>    
            </div>
        </div>
    );
};

export default Breakingnews;