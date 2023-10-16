import Field from "components/Fields/Field";
import ImageField from "components/Fields/ImageField";
import ModalImageLocation from "components/Fields/ModalImageLocation";
import { useTheme } from "contexts/ThemeContexts";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { heightPercentageToDP as htdp } from "react-native-responsive-screen";
import MyDatePicker from "components/Fields/DatePicker";
import { TextInput } from "react-native";
import MapField from "components/Fields/MapField";
import LocationField from "components/Fields/LocationField";

const Create = () => {
  const [locationText, setLocationText] = useState("");
  const [visible, setVisible] = useState(false);
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        // justifyContent: "center",
        paddingHorizontal: 10,
      }}
    >
      <ScrollView
        contentContainerStyle={{ paddingVertical: 10, gap: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <ModalImageLocation visible={visible} setVisible={setVisible} />
        <Field label="Images" disableStyles>
          <View style={{ width: "100%" }}>
            <ScrollView horizontal contentContainerStyle={{ width: "100%" }}>
              <ImageField
                onPress={() => {
                  setVisible(true);
                }}
              />
            </ScrollView>
          </View>
        </Field>
        <View style={{ gap: 20 }}>
          <Field label="Location" disableStyles>
            <LocationField />
          </Field>
          <View style={{backgroundColor:theme.backgroundColor, gap:20}}>
            <Field label="Title">
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
                style={{ height: 150, textAlignVertical: "top" }}
              />
            </Field>

            <Field label="Expiry Date">
              <MyDatePicker />
            </Field>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Create;
