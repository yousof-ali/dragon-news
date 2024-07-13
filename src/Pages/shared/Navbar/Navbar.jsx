import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { Authcontext } from "../../../authprovider/Authprovider";


const Navbar = () => {
    const { user, logOut } = useContext(Authcontext);
    const links = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/about"}>About</NavLink></li>
        <li><NavLink to={"/carrer"}>Career</NavLink></li>
    </>

    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error.message)
            })


    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <p className="text-sm">{user.displayName}</p>
                            <div tabIndex={0} role="button" className="btn btn-ghost mx-2 outline btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="user"
                                        src={user.photoURL} />
                                </div>
                            </div>
                            <button onClick={handleLogOut} className="btn btn-outline">Log Out</button>
                        </>
                        : <Link to={'/login'}>
                            <button className="btn btn-outline">Log In</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;