import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword,onAuthStateChanged,signOut,signInWithEmailAndPassword } from "firebase/auth";


export const Authcontext = createContext(null)
const Authprovider = ({children}) => {

    const[user,setUser]=useState(null);
    const[loder,setLoder]=useState(true);
    

    const creatUser = (email,password)=>{
        setLoder(true);
        return createUserWithEmailAndPassword(auth,email,password);
        
    }

    const login = (email,password)=>{
        setLoder(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        setLoder(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const userStateChange = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            setLoder(false);
        })
        return ()=>{
            userStateChange();
        }
    },[])

    const values = {user,creatUser,logOut,login,loder}
    return (
        <Authcontext.Provider value={values}>
             {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;