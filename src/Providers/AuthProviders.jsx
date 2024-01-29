import { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase.cofig";

export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user);
    const [loading, setLoading] = useState(true);
    const authInfo = {
        user,
        loading
    }

    return (
        <AuthContext.Provider value={{ authInfo }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;