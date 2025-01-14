import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    console.log(localStorage.getItem("roles"))
    const [auth, setAuth] = useLocalStorage( "auth",{roles : [], isLoggedIn: false });

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;