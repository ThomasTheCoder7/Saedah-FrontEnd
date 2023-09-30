import {
  useState,
  useContext,
  createContext,
  useEffect,
  ReactNode,
  Context,
} from "react";
import React from 'react'
import { load } from "utils/storageHandler";

const AuthContext = createContext<{isAuth:boolean,setAuth:Function}>({isAuth:false, setAuth:()=>{}});


export const useAuth = ()=>{
    return useContext(AuthContext);
}

const loadToken = async (setAuth: Function) => {
  const token = await load("token");
  if (token) {
    setAuth(true);
  }
};

type props = {
    children:ReactNode
}

export default ({children}:props) => {
  const [isAuth, setAuth]: [boolean, Function] = useState(false);

  useEffect(() => { loadToken(setAuth); }, []);


  return (
    <AuthContext.Provider value={{isAuth:isAuth, setAuth:setAuth}}>
        {children}
    </AuthContext.Provider>
  )
};
