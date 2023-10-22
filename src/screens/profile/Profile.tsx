import { useAuth } from "contexts/AuthContext";
import { useUserDetails} from "contexts/UserDetailsContext";
import LoginStack from "navigation/LoginStack";
import ProfileTab from "navigation/ProfileTab";
import React, { useEffect } from "react";
import { getProfile } from "utils/Forms/getProfile";

export default () => {
  const {userDetails,setUserDetails} = useUserDetails()
  useEffect(()=>{
    getProfile(setUserDetails)
    
  },[])
  const { isAuth } = useAuth();
  
  if(!userDetails.deals) return;
  return <ProfileTab />;
};
