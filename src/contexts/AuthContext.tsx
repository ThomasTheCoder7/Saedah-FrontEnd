import { useNavigation } from "@react-navigation/native";
import {
  useState,
  useContext,
  createContext,
  useEffect,
  ReactNode,
  Context,
} from "react";
import React from "react";
import { ActivityIndicator } from "react-native-paper";
import { getDealsHome } from "utils/GetDeals";
import { load } from "utils/storageHandler";
import { widthPercentageToDP as wtdp ,heightPercentageToDP as htdp } from 'react-native-responsive-screen'
import { View } from "react-native";
const AuthContext = createContext<{ isAuth: boolean; setAuth: Function }>({
  isAuth: false,
  setAuth: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

const loadToken = async (
  setAuth: Function,
  setLoading: (loading: boolean) => void
) => {
  getDealsHome(
    (obj: any) => {},
    (nop: boolean) => {}
  );
  const token = await load("token");
  setAuth(token != null);
  setLoading(false);
};

type props = {
  children: ReactNode;
};

export default ({ children }: props) => {
  const [isAuth, setAuth]: [boolean, Function] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    loadToken(setAuth, setLoading);
  }, []);
  if (loading)
    return (
      <View style={{width:wtdp('100%'), height:htdp('100%')}}>
        <ActivityIndicator size={'large'}/>
      </View>
    );
  return (
    <AuthContext.Provider value={{ isAuth: isAuth, setAuth: setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
