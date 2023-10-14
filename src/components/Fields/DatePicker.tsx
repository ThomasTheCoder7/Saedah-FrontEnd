import { View, Text, Platform, TouchableOpacity } from "react-native";
import DateTimePicker, {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import React, { useEffect } from "react";
import { useTheme } from "contexts/ThemeContexts";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
import StyledText from "components/StyledText";
import { useTranslation } from "react-i18next";
type props = {
  visible: boolean;
  setVisible: Function;
};

const DateTime = ({ visible = false }: props) => {
  const theme = useTheme();
  const { t } = useTranslation();

  const MyDateTimePicker = () => (
    <DateTimePicker
      value={new Date()}
      display="inline"
      accentColor={theme.bottomTabActiveIcon}
      style={{}}
      themeVariant={theme.isDark ? "dark" : "light"}
      minimumDate={new Date()}
      
      onChange={(event: DateTimePickerEvent) => {
        console.log(new Date(event.nativeEvent.timestamp!));
      }}
    />
  );

  if (!visible && Platform.OS != "ios") return;
  return Platform.OS == "ios" ? (
    <View style={{margin: 20, gap:10}}>
      <StyledText
        style={{ color: theme.header, alignSelf: "flex-start" }}
        weight="SemiBold"
      >
        {t("Expiry Date:")}
      </StyledText>
      <View
        style={{
          backgroundColor: theme.bottomTabBackground,
          
          
          borderRadius: 15,
          gap: 10,
        }}
      >
        <MyDateTimePicker />
      </View>
    </View>
  ) : (
    <MyDateTimePicker />
  );
};

export default DateTime;
