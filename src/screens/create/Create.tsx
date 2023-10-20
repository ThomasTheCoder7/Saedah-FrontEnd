import AuthButton from "components/Fields/AuthButton";
import MyDatePicker from "components/Fields/DatePicker";
import Field from "components/Fields/Field";
import ImageField from "components/Fields/ImageField";
import LocationField from "components/Fields/LocationField";
import ModalImageLocation from "components/Fields/ModalImageLocation";
import IndexIndicator from "components/IndexIndicator";
import { useTheme } from "contexts/ThemeContexts";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  View,
} from "react-native";
import { widthPercentageToDP as wtdp } from "react-native-responsive-screen";
import {
  getAppendImageFunction,
  getDeleteImageFunction,
} from "utils/CreateFormHandlers";
import { onScroll } from "utils/ScrollHandler";

const Create = () => {
  const [images, setImages]: [string[], Function] = useState([]);
  const [index, setIndex] = useState(0);
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const theme = useTheme();

  const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;

  return (
    <>
      <ModalImageLocation
        visible={visible}
        setVisible={setVisible}
        appendImage={getAppendImageFunction(setImages)}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null!}
        keyboardVerticalOffset={keyboardVerticalOffset}
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
            <ScrollView
              bounces={false}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              nestedScrollEnabled
              scrollEventThrottle={wtdp('65%')}
              onScroll={(event: any) => onScroll(event, index, setIndex)}
            >
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
            {images.length > 0 && (
              <IndexIndicator index={index} len={images.length + 1} />
            )}
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
              <Field label="Price">
                <TextInput
                  maxLength={30}
                  placeholder="350"
                  placeholderTextColor={theme.hr}
                  keyboardType="decimal-pad"
                />
              </Field>
              <Field label="Expiry Date">
                <MyDatePicker />
              </Field>
            </View>
          </View>
          <AuthButton label={t("Submit")} onPress={() => {}} />
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Create;
