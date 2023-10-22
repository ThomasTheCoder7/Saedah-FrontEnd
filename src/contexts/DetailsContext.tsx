import React, {
    ReactNode,
    createContext,
    useContext,
    useState
} from "react";

const DetailsContext = createContext<{ details: object; setDetails: Function }>(
  {
    details: {},
    setDetails: () => {},
  }
);

export const useDetails = () => {
  return useContext(DetailsContext);
};

type props = {
  children: ReactNode;
};

export default ({ children }: props) => {
  const [details, setDetails]: [object, Function] = useState({});

  return (
    <DetailsContext.Provider
      value={{ details: details, setDetails: setDetails }}
    >
      {children}
    </DetailsContext.Provider>
  );
};
