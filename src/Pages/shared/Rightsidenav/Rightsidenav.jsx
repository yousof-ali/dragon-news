import { FaFacebook, FaGoogle, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'

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
                <img  src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />

            </div>
        </div>
    );
};

export default Rightsidenav;