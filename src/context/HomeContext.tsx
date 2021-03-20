import { createContext, ReactNode, useState } from "react";

interface HomeContextData {
    email: string;
    setEmail: (email: string)=>void;
}

interface HomeContextProviderProps {
    children: ReactNode;
}

export const HomeContext = createContext({} as HomeContextData);

const HomeContextProvider = ({children}:HomeContextProviderProps)=> {
    const [email, setEmail] = useState("");
    return (
        <HomeContext.Provider value={
            {   
                email, 
                setEmail
            }
        }>
        {children}
        </HomeContext.Provider>
    );
}

export default HomeContextProvider;