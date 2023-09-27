import React from "react";
import {
  useState,
  useContext,
  createContext,
  useEffect,
  useRef,
  ReactNode,
  Context,
} from "react";

type scrollContextType = {
  setParentScrollable: Function;
  parentScrollable: boolean;
};

const ScrollContext: Context<scrollContextType> = createContext({});

type props = {
  children: ReactNode;
};


export const useScrollable = ()=>{
    return useContext(ScrollContext)
}

export default ({ children }: props) => {
  const [parentScrollable, setParentScrollableState] = useState(true);

  const setParentScrollable = (isScrollable: boolean) => {
    setParentScrollableState(isScrollable);
    
  };

  return (
    <ScrollContext.Provider
      value={{
        setParentScrollable: setParentScrollable,
        parentScrollable: parentScrollable,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
