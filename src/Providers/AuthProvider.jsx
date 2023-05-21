import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config"


export const AuthContext = createContext();
const auth = getAuth(app)
const provider = new GoogleAuthProvider();


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

    const logOut = () =>{
        setSpinner(true);
        return signOut(auth);
    }

    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            console.log(error)
        })
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            // console.log('current user', currentUser);
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
        signIn,
        logOut,
        handleGoogleSignIn

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;