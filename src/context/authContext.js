import { createContext, useContext, useState } from "react";


const AuthContext = createContext()

const AuthProvider = ({ children }) => {
 
    const [isAuth, setAuth] = useState(true)
    
    
    return <AuthContext.Provider value={{ isAuth, setAuth }}>{ children }</AuthContext.Provider>
}

const useAuth = () => useContext(AuthContext)

export { useAuth, AuthProvider}