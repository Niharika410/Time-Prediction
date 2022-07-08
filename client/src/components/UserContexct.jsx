import { createContext, useState } from "react";

export const Prediction = createContext(null);
const UserContext=({children})=>{
    const [predict,setUser]=useState('');
    
    return(
    <Prediction.Provider
    value={{ predict,
        setUser}}
    >
       
      {children}
      </Prediction.Provider>  
    );
}
export default UserContext;