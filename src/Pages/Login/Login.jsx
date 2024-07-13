import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { Authcontext } from "../../authprovider/Authprovider";



const Login = () => {
    const{login}=useContext(Authcontext);
    const [error,setError]=useState('');
    const location = useLocation()
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault();
        setError('');
        const userData = new FormData(e.currentTarget);
        const email = userData.get('email');
        const password = userData.get('password');
        login(email,password)
        .then(result=>{
            console.log(result.user);
            navigate(location?.state ? location.state:'/')
        })
        .catch(error=>{
            console.log(error.message);
            setError(error.message)
        })
    }
    return (

        <div>
            <Navbar></Navbar>
            <div className="hero  mt-8">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-semibold border-b pb-4">Login your Account</h2>
                        <form onSubmit={handleLogin}className="mt-4" >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            {
                                error&& <p className="text-sm text-red-600">{error}</p>
                            }
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p>new? <Link className="btn btn-link" to={'/register'}>Register</Link> </p>
                    </div>                  
                </div>
            </div>
        </div>
    );
};

export default Login;