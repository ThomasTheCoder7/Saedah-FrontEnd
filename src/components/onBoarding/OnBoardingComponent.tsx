import { useTheme } from "contexts/ThemeContexts";
import React, { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View } from "react-native";
import {
  heightPercentageToDP as htdp,
  widthPercentageToDP as wtdp,
} from "react-native-responsive-screen";
import OnBoardingButton from "./OnBoardingButton";

type props = {
  isLast?: boolean;
  isFirst?: boolean;
  children: ReactNode;
  headerIcon?: ReactNode;
};

const OnBoardingComponent = ({
  children,
  headerIcon=<></>,
  isLast = false,
  isFirst = false,
}: props) => {
  const theme = useTheme();
  const { i18n } = useTranslation();
  return (
    <View
      style={[
        styles.animationContainer,
        {
          backgroundColor: theme.backgroundColor,
          width: wtdp("100%"),
          height: htdp("95%"),
          padding:0
        },
      ]}
    >
      <View
        style={{
          width: htdp("38%"),
          height: htdp("38%"),
          marginTop: htdp("5%"),
        }}
      >
        {headerIcon}
      </View>
      <View style={styles.textContainer}>{children}</View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          flexDirection:'row',
          direction:i18n.language == 'ar'?'rtl':'ltr',
          justifyContent: "space-between",
          width: "95%",
          alignItems: "center"
        }}
      >
        <OnBoardingButton type='previous' />
        <OnBoardingButton type='next' last={isLast?'Initial':null}/>
      </View>
    </View>
  );
};

export default OnBoardingComponent;

const styles = StyleSheet.create({
  animationContainer: {
    alignItems: "center",
    flex: 1,
  },
  textContainer: {
    marginTop: 10,
    paddingHorizontal: 25,
  },
});
