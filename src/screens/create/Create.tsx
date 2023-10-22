import { useNavigation } from "@react-navigation/native";
import AuthButton from "components/Fields/AuthButton";
import MyDatePicker from "components/Fields/DatePicker";
import Field from "components/Fields/Field";
import ImageField from "components/Fields/ImageField";
import LocationField from "components/Fields/LocationField";
import ModalImageLocation from "components/Fields/ModalImageLocation";
import IndexIndicator from "components/IndexIndicator";
import { useTheme } from "contexts/ThemeContexts";
import React, { useEffect, useState } from "react";
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
import { Image, createData, submitCreate } from "utils/Forms/CreateDeal";
import { onScroll } from "../../utils/ScrollHandler";

const Create = () => {
  // const [images, setImages]: [Image[], Function] = useState([]);
  const [data, setData] = useState({
    images: [],
    location: "",
    title: "",
    description: "",
    price: "",
    expiryDate: new Date(),
    link: "",
    isGeographic: true,
  });
  const navigation = useNavigation()
  const setImages = (obj: Image) => {
    setData({ ...data, images: [...data.images, obj] });
  };
  const removeImage = (uri: string) => {
    const updatedImages = data.images.filter((image) => image.uri !== uri);
    setData({
      ...data,
      images: updatedImages,
    });
  };
  const setGeometry = (dealLinkisGeographic: boolean) => {
    setData({ ...data, isGeographic: dealLinkisGeographic });
  };
  const setLink = (dealLink: string) => {
    setData({ ...data, link: dealLink });
  };
  const setLocation = (dealLocation: string) => {
    setData({ ...data, location: dealLocation });
  };
  const setTitle = (title: string) => {
    setData({ ...data, title: title });
  };
  const setDescription = (description: string) => {
    setData({ ...data, description: description });
  };
  const setPrice = (price: string) => {
    setData({ ...data, price: price });
  };
  const setExpiryDate = (date: Date) => {
    setData({ ...data, expiryDate: date });
  };
  const [index, setIndex] = useState(0);
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const theme = useTheme();
  const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <ModalImageLocation
        visible={visible}
        setVisible={setVisible}
        appendImage={setImages}
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
              scrollEventThrottle={wtdp("65%")}
              onScroll={(event: any) => onScroll(event, index, setIndex)}
            >
              {data.images.map((image, index) => {
                return (
                  <ImageField
                    staticImage
                    uri={image.uri}
                    key={index}
                    deleteImage={removeImage}
                  />
                );
              })}
              <ImageField
                onPress={() => {
                  setVisible(true);
                }}
              />
            </ScrollView>
            {data.images.length > 0 && (
              <IndexIndicator index={index} len={data.images.length + 1} />
            )}
          </Field>
          <View style={{ gap: 20 }}>
            <Field label="Location" disableStyles>
              <LocationField
                setData={setLocation}
                setLink={setLink}
                setGeometry={setGeometry}
              />
            </Field>
            <View style={{ backgroundColor: theme.backgroundColor, gap: 20 }}>
              <Field label="Title">
                <TextInput
                  onChange={(value) => {
                    setTitle(value.nativeEvent.text);
                  }}
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
                  onChange={(value) => {
                    setDescription(value.nativeEvent.text);
                  }}
                />
              </Field>
              <Field label="Price">
                <TextInput
                  maxLength={30}
                  placeholder="350"
                  placeholderTextColor={theme.hr}
                  keyboardType="decimal-pad"
                  onChange={(value) => {
                    setPrice(value.nativeEvent.text);
                  }}
                />
              </Field>
              <Field label="Expiry Date">
                <MyDatePicker date={data.expiryDate} setDate={setExpiryDate} />
              </Field>
            </View>
          </View>
          <AuthButton label={t("Submit")} onPress={() => {submitCreate(data,navigation)}} />
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Create;
