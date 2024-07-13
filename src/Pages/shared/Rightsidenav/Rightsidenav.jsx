import { FaFacebook, FaGoogle, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'
import bg from '../../../assets/bg.png'

const Rightsidenav = () => {
    return (
        <div className="p-4 space-y-8">

            <div className="space-y-2">
                <h2 className="font-semibold">Login With </h2>
                <button className="btn btn-outline md:w-full">
                    <FaGoogle />
                    Login with Google
                </button> <br />
                <button className="btn btn-outline md:w-full">
                    <FaGithub />
                    Login with GitHub
                </button>
            </div>

            <div>
                <h2 className="font-semibold mb-2">Find Us On </h2>
                <a className="flex items-center border rounded-t-md p-4 gap-2" href="/">
                    <FaFacebook />
                    <span className="text-sm">Facebook</span>
                </a>
                <a className="flex items-center border border-y-0 p-4 gap-2" href="/">
                    <FaInstagram />
                    <span className="text-sm">Instagram</span>
                </a>
                <a className="flex items-center border rounded-b-md p-4 gap-2" href="/">
                    <FaTwitter />
                    <span className="text-sm">Twitter</span>
                </a>

            </div>

            <div className="p-4 bg-slate-100">
                <h2 className="font-semibold mb-2">Q-Zone</h2>
                <img className="mx-auto" src={qzone1} alt="" />
                <img className="mx-auto" src={qzone2} alt="" />
                <img className="mx-auto" src={qzone3} alt="" />

            </div>
            <div className="relative text-white" >
                <img src={bg} alt="" />
                <div className="absolute md:top-0  lg:top-16 p-4 lg:space-y-4 text-center">
                    <h2 className="font-semibold text-2xl">Create an Amazing Newspaper</h2>
                    <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <button className="btn rounded-none bg-red-600 hover:bg-red-400 text-white ">Learn more..</button>
                </div>
            </div>
        </div>
    );
};

export default Rightsidenav;