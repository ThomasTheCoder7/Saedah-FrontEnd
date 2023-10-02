import { View, Text } from "react-native";
import React from "react";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { useTheme } from "contexts/ThemeContexts";
import StyledText from "components/StyledText";

const DateTimePicker = () => {
    const theme = useTheme()
  return (
    <View style={{gap:10, padding:0}}>
      <StyledText style={{color:theme.header, paddingLeft:3}} weight='SemiBold'>World</StyledText>
      <RNDateTimePicker
        value={new Date()}
        display="calendar"
        accentColor={theme.bottomTabActiveIcon}
        
      />
    </View>
  );
};

export default DateTimePicker;
