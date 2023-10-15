import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import StyledText from "components/StyledText";
import { useTheme } from "contexts/ThemeContexts";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Platform, Pressable, View } from "react-native";
import { heightPercentageToDP as htdp } from "react-native-responsive-screen";
type props = {
  date:Date;
  setDate:Function;
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

const DateTime = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const MyDateTimePicker = () => (
    <DateTimePicker
      value={date}
      display="inline"
      accentColor={theme.bottomTabActiveIcon}
      style={{}}
      themeVariant={theme.isDark ? "dark" : "light"}
      minimumDate={new Date()}
      onChange={(event: DateTimePickerEvent) => {
        setVisible(false);
        setDate(new Date(event.nativeEvent.timestamp!));
      }}
    />
  );

  return Platform.OS == "ios" ? (
    <View style={{ gap: 10 }}>
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
            {`${date.getFullYear()}-${
              MONTHS[date.getMonth()]
            }-${date.getUTCDate()}`}
          </StyledText>
        </View>
      </View>
      {visible && <MyDateTimePicker />}
    </Pressable>
  );
};

export default DateTime;
