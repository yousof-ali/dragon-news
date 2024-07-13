import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword,onAuthStateChanged,signOut,signInWithEmailAndPassword } from "firebase/auth";

export const Authcontext = createContext(null)
const Authprovider = ({children}) => {

    const[user,setUser]=useState(null);

    const creatUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
        
    }

    const login = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const userStateChange = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
        })
        return ()=>{
            userStateChange();
        }
    },[])

    const values = {user,creatUser,logOut,login}
    return (
        <Authcontext.Provider value={values}>
             {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;