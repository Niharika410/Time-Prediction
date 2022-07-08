import { createContext, useState } from "react";

export const User = createContext(null);
const NameContext=({children})=>{
    const [name,setName]=useState('');
    
    return(
    <User.Provider
    value={{ name,
        setName}}
    >
       
      {children}
      </User.Provider>  
    );
}
export default NameContext;