import { useIsFocused } from "@react-navigation/native";
import { useAuth } from "contexts/AuthContext";
import { useTheme } from "contexts/ThemeContexts";
import { useUserDetails } from "contexts/UserDetailsContext";
import ProfileTab from "navigation/ProfileTab";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { getProfile } from "utils/GetProfile";

export default (props: any) => {
  const { userDetails, setUserDetails } = useUserDetails();
  const [loading, setLoading] = useState(true);
  const { isAuth } = useAuth();

  const theme = useTheme();
  const isFocused = useIsFocused();
  useEffect(() => {
    if (!isFocused) {
      return;
    }

    getProfile(setUserDetails, setLoading, userDetails);
  }, [isFocused, userDetails]);

  if (!userDetails.deals || loading)
    return (
      <View
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size={"large"} color={theme.bottomTabActiveIcon} />
      </View>
    );
  return <ProfileTab />;
};
