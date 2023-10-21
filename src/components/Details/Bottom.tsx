import { View, Text, ScrollView, TextInput } from "react-native";
import React from "react";
import Field from "components/Fields/Field";
import { onScroll } from "utils/ScrollHandler";
import IndexIndicator from "components/IndexIndicator";
import ImageField from "components/Fields/ImageField";
import Page from "./Page";
import { useTheme } from "contexts/ThemeContexts";
import StyledText from "components/StyledText";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
import MapField from "components/Fields/MapField";
import AuthButton from "components/Fields/AuthButton";
import { handleOpenMaps } from "utils/HandleOpenLocation";
import Counter from "./Counter";
type props = {
  images: string[];
  index: number;
  setIndex: (index: number) => void;
};

const Bottom = () => {
  const theme = useTheme();
  return (
    <Page>
      <View style={{ gap: 20 }}>
        <View
          style={{
            marginTop:10,
            backgroundColor: theme.bottomTabBackground,
            height: htdp("47%"),
            borderRadius: 15,

            //   padding: 10,
          }}
        >
          <MapField DealLocation={{ latitude: 20, longitude: 20 }} />
        </View>
        <AuthButton
          label="Take Me There"
          onPress={() => {
            handleOpenMaps({ latitude: 20, longitude: 20 });
          }}
        />
        <View
          style={{
            backgroundColor: theme.bottomTabBackground,
            borderRadius: 15,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems:'center'
          }}
        >
          <View style={{ flex: 1, padding: 10}}>
            {/* <Field label="Price">
              <StyledText
                style={{
                  fontFamily: "Poppins-Regular",
                  color: theme.header,
                  fontSize: 20,
                }}
              >
                350$
              </StyledText>
            </Field> */}
            <AuthButton
              label="Comments"
              onPress={() => {
                handleOpenMaps({ latitude: 20, longitude: 20 });
              }}
              secondary
            />
          </View>
          <Counter />
        </View>
      </View>
    </Page>
  );
};

export default Bottom;
