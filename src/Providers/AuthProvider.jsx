import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config"

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [spinner, setSpinner] = useState(true);

    const createUser = (email, password) =>{
        setSpinner(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        setSpinner(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('current user', currentUser);
            setSpinner(false);
        });
        return () =>{
            return unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        spinner,
        createUser,
        signIn

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;