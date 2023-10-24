import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import StyledText from "components/StyledText";
import { useTheme } from "contexts/ThemeContexts";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Platform, Pressable, View } from "react-native";
import { heightPercentageToDP as htdp } from "react-native-responsive-screen";
import { formatDate } from "utils/logicUtils";
type props = {
  date: Date;
  setDate: Function;
};

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const DateTime = ({ date, setDate }: props) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const MyDateTimePicker = () => (
    <DateTimePicker
      value={date == null ? new Date() : date}
      display="inline"
      accentColor={theme.bottomTabActiveIcon}
      style={{}}
      themeVariant={theme.isDark ? "dark" : "light"}
      minimumDate={new Date()}
      onChange={(event: DateTimePickerEvent) => {
        const currentDate = new Date(event.nativeEvent.timestamp!)
        currentDate.setMonth(currentDate.getMonth())
        setVisible(false);
        setDate(currentDate);
      }}
    />
  );

  return Platform.OS == "ios" ? (
    <View style={{ gap: 10 }}>
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
    <Pressable
      onPress={() => {
        setVisible(true);
      }}
    >
      <View style={{ gap: 10, padding: 0 }}>
        <View
          style={{
            padding: 15,
            backgroundColor: theme.fieldBackground,
            borderRadius: 10,
          }}
        >
          <StyledText
            style={{
              fontSize: htdp("3%"),
              color: theme.header,
              textAlign: "center",
            }}
          >
            {formatDate(
              `${date.getFullYear()}-${
                date.getMonth()+1
              }-${date.getUTCDate()}`
            )}
          </StyledText>
        </View>
      </View>
      {visible && <MyDateTimePicker />}
    </Pressable>
  );
};

export default DateTime;
