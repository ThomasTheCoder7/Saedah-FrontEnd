import AuthButton from "components/Fields/AuthButton";
import MyDatePicker from "components/Fields/DatePicker";
import Field from "components/Fields/Field";
import ImageField from "components/Fields/ImageField";
import LocationField from "components/Fields/LocationField";
import ModalImageLocation from "components/Fields/ModalImageLocation";
import { useTheme } from "contexts/ThemeContexts";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, TextInput, View } from "react-native";
import {
  widthPercentageToDP as wtdp
} from "react-native-responsive-screen";
import {
  getAppendImageFunction,
  getDeleteImageFunction,
} from "utils/CreateFormHandlers";
const Create = () => {
  const [images, setImages]: [string[], Function] = useState([]);
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const theme = useTheme();

  return (
    <>
      <ModalImageLocation
        visible={visible}
        setVisible={setVisible}
        appendImage={getAppendImageFunction(setImages)}
      />

      <View
        style={{
          flex: 1,
          paddingHorizontal: wtdp("2%"),
        }}
      >
        <ScrollView
          contentContainerStyle={{ paddingVertical: 10, gap: 20 }}
          showsVerticalScrollIndicator={false}
        >
          <Field label="Product Images" disableStyles>
            <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator>
              {images.map((image, index) => {
                return (
                  <ImageField
                    staticImage
                    uri={image}
                    key={index}
                    deleteImage={getDeleteImageFunction(setImages)}
                  />
                );
              })}
              <ImageField
                onPress={() => {
                  setVisible(true);
                }}
              />
            </ScrollView>

            <View
              style={{
                position: "absolute",
                alignSelf: "center",
                bottom: 10,
              }}
            ></View>
          </Field>
          <View style={{ gap: 20 }}>
            <Field label="Location" disableStyles>
              <LocationField />
            </Field>
            <View style={{ backgroundColor: theme.backgroundColor, gap: 20 }}>
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
          <AuthButton label={t("Submit")} onPress={() => {}} />
        </ScrollView>
      </View>
    </>
  );
};

export default Create;
