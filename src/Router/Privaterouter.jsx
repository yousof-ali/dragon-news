import { useContext } from "react";
import { Authcontext } from "../authprovider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";


const Privaterouter = ({children}) => {
    const {loder,user}=useContext(Authcontext);
    const location = useLocation();
    console.log(location)
    if(loder){
        return
    }
    if(user){
       return children
    }
    return <Navigate state={location.pathname} to={"/login"}></Navigate>
};

export default Privaterouter;