import MyDatePicker from "components/Fields/DatePicker";
import Field, { FieldStyle } from "components/Fields/Field";
import ImageField from "components/Fields/ImageField";
import MapField from "components/Fields/MapField";
import TextField from "components/Fields/TextField";
import { useTheme } from "contexts/ThemeContexts";
import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
const Create = () => {
  const [locationText, setLocationText] = useState("");
  const [visible, setVisible] = useState(false);
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        height: htdp("80%"),
        justifyContent: "center",
        paddingHorizontal: 20,
        gap: 20,
      }}
    >
      <ImageField/>
      {/* <Field label="Title">
        <TextInput
          maxLength={30}
          placeholder="Amazing product"
          placeholderTextColor={theme.hr}
        />
      </Field>
      <Field label="Description">
        <TextInput
          maxLength={150}
          placeholder="Amazing product Description"
          placeholderTextColor={theme.hr}
          multiline
          numberOfLines={4}
          blurOnSubmit
          returnKeyType="done"
          style={{height:150, textAlignVertical:'top'}}
        />
      </Field> 
      <MyDatePicker />
      */}
    </View>
  );
};

export default Create;
