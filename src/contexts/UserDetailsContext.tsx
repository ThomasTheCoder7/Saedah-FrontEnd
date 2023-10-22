import React, {
    ReactNode,
    createContext,
    useContext,
    useState
} from "react";

const UserDetailsContext = createContext<{ userDetails: object; setUserDetails: Function }>(
  {
    userDetails: {},
    setUserDetails: () => {},
  }
);

export const useUserDetails = () => {
  return useContext(UserDetailsContext);
};

type props = {
  children: ReactNode;
};

export default ({ children }: props) => {
  const [userDetails, setUserDetails]: [object, Function] = useState({});

  return (
    <UserDetailsContext.Provider
      value={{ userDetails: userDetails, setUserDetails: setUserDetails }}
    >
      {children}
    </UserDetailsContext.Provider>
  );
};
