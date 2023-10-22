import { View, Text, StyleSheet, Platform } from "react-native";
import React from "react";
import StyledText from "components/StyledText";
import { useTheme } from "contexts/ThemeContexts";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
import { useTranslation } from "react-i18next";
import StyledBlurView from "./StyledBlurView";
import DarkTheme from "assets/Themes/dark";
import { formatDate } from "utils/logicUtils";

const cutString = (text: string, maxLength: number) => {
  return text?.length <= maxLength
    ? text
    : text?.substring(0, maxLength - 3) + "...";
};

type props = {
  title:string;
  description:string;
  price:string;
  expiry_date:string;
}

const ProductInfo = ({description,expiry_date,price,title}:props) => {
  const theme = DarkTheme;
  const { i18n } = useTranslation();
  const flexDirection = i18n.language == "en" ? "row" : "row-reverse";
  const isAndroid = Platform.OS == "android";

  return (
    <StyledBlurView>
      <View style={{ padding: 10, justifyContent: "space-between", flex: 1 }}>
        <View>
          <StyledText
            style={[styles.textStyle, { color: theme.header, fontSize: 20 }]}
          >
            {title}
          </StyledText>
          <StyledText
            style={[styles.textStyle, { color: theme.header, fontSize: 13 }]}
          >
            {cutString(
              description,
              80
            )}
          </StyledText>
        </View>

        <View
          style={{
            flexDirection: isAndroid ? flexDirection : "row",
            justifyContent: "space-between",
          }}
        >
          <StyledText
            style={[styles.textStyle, { color: theme.header, fontSize: 15 }]}
          >
            {price} {"SAR"}
          </StyledText>
          <StyledText
            style={[styles.textStyle, { color: theme.header, fontSize: 15 }]}
          >
            {formatDate(expiry_date)}
          </StyledText>
        </View>
      </View>
    </StyledBlurView>
  );
};

export default ProductInfo;

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "Poppins-Regular",
  },
});
