import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../config/firebase.config";


export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const githubProvider = new GithubAuthProvider();


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //create user by registation
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }


    // logIn user
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // create user by Google 
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // create user by GitHub
    const signInWithGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }


    //user observation 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unSubscribe();
        }
    }, []);


    // log out 
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // user update profile
    const handleUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        });
      };


    const userInfo = {
        user,
        loading,
        createUser,
        logIn,
        signInWithGoogle,
        signInWithGithub,
        logOut,
        handleUpdateProfile
    }


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


AuthProvider.propTypes = {
    children : PropTypes.node
}