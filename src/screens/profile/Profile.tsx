import { useAuth } from "contexts/AuthContext";
import LoginStack from "navigation/LoginStack";
import ProfileTab from "navigation/ProfileTab";
import React from "react";

export default () => {
  const { isAuth } = useAuth();
  return <ProfileTab />;
};
