import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";


const Login = () => {
    const handleLogin = e => {
        e.preventDefault();
        const userData = new FormData(e.currentTarget);
        console.log(userData.get('email'));
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