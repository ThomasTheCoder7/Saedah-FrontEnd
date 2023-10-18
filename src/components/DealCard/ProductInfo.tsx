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

const cutString = (text: string, maxLength: number) => {
  return text?.length <= maxLength
    ? text
    : text?.substring(0, maxLength - 3) + "...";
};

const ProductInfo = () => {
  const theme = useTheme();
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
            KtUc2h8N*EoPzJd7$LmQ
          </StyledText>
          <StyledText
            style={[styles.textStyle, { color: theme.header, fontSize: 13 }]}
          >
            {cutString(
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A error nulla, unde iste voluptate saepe voluptatum soluta dolorum cumque itaque officia reprehenderit. Eligendi, fugiat? Natus soluta quis voluptas eum molestias?",
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
            320 {"SAR"}
          </StyledText>
          <StyledText
            style={[styles.textStyle, { color: theme.header, fontSize: 15 }]}
          >
            18 Hours ago
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
