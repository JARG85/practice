import { useState } from 'react';
import { createContext } from 'react';
import { useHistory } from 'react-router';
import roles from '../helpers/roles'

export const AuthContext = createContext();

export default function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const history = useHistory();

    const login = (userCredentials, location) => {
        setUser({id:1, name:'Luis', email:'example@example.com', role:roles.regular});
        
        if (location){
            history.push(location);
        }
    }
    const logout = () => setUser(null);

    const isLogged = () => !!user;
    const hasRole = (role) => user?.role === role;

    const contextValue = {
        user,
        isLogged,
        hasRole,
        login,
        logout
    };

    return <AuthContext.Provider value={contextValue}> 
        {children} 
    </AuthContext.Provider>

}