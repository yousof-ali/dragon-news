import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { Authcontext } from "../../authprovider/Authprovider";

const Register = () => {
    const [error,setError]=useState('');
    const [check,setCheck]=useState(false);
    const {user,creatUser}=useContext(Authcontext);
    console.log(user);
    const handleRegister = e=>{
        e.preventDefault();
        setError('');
        setCheck(false);
        const userData = new FormData(e.currentTarget);
        const name = userData.get("name");
        const photo = userData.get("photo");
        const email = userData.get("email");
        const password = userData.get("password");
        const check = userData.get("check");
        console.log(name,photo,email,password);

        if(!check){
            setCheck(true);
            return
        }

        creatUser(email,password)
        .then((result)=>{
            console.log(result.user);
        })
        .catch((error)=>{
            setError(error.message)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero  mt-6">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-semibold border-b pb-4">Register your Account</h2>
                        <form onSubmit={handleRegister} className="mt-4" >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo" className="input input-bordered"  />
                            </div>
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
                            </div>
                            <p className={`mt-2 text-sm ${check&& "text-red-600"}`} ><input name="check" type="checkbox" />Accept Term & Conditions</p>
                            <p className="text-sm text-red-600 mt-2">{error}</p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <p>already register? <Link className="btn btn-link" to={'/login'}>Login</Link> </p>
                    </div>                  
                </div>
            </div>
        </div>
    );
};

export default Register;