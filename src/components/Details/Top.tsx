import { View, Text, ScrollView, TextInput } from "react-native";
import React from "react";
import Field from "components/Fields/Field";
import { onScroll } from "utils/ScrollHandler";
import IndexIndicator from "components/IndexIndicator";
import ImageField from "components/Fields/ImageField";
import Page from "./Page";
import { useTheme } from "contexts/ThemeContexts";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";
import StyledText from "components/StyledText";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
import { useDetails } from "contexts/DetailsContext";
import { URL, formatDate } from "utils/logicUtils";
type props = {
  index: number;
  setIndex: (index: number) => void;
};

const Top = ({ index, setIndex }: props) => {
  const {details} = useDetails();
  const theme = useTheme();
  return (
    <Page>
      <View style={{ gap: 20 }}>
        <View>
          <ScrollView
            bounces={false}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled
            scrollEventThrottle={20}
            onScroll={(event: any) => onScroll(event, index, setIndex)}
          >
            {details.photos.map((image, index) => {
              return <ImageField staticImage uri={`${URL}${image}`} key={index} />;
            })}
          </ScrollView>
          {details.photos.length > 1 && (
            <IndexIndicator index={index} len={details.photos.length} />
          )}
        </View>

        <View
          style={{
            backgroundColor: theme.bottomTabBackground,
            height: "56%",
            borderRadius: 15,
            padding: 10,
            paddingBottom:0,
            gap:10
          }}
        >
          <View
            style={{
       
            }}
          >
            <StyledText
              style={{
                fontFamily: "Poppins-Regular",
                color: theme.header,
                fontSize: 20,
              }}
            >
             {"JAWAD"}
            </StyledText>
            <StyledText
              style={{
                fontFamily: "Poppins-Regular",
                color: theme.header,
                fontSize: 20,
              }}
            >
              {details.price} SAR
            </StyledText>
            <StyledText
              style={{
                fontFamily: "Poppins-Regular",
                color: theme.header,
                fontSize: 12,
                textAlign:'right'
              }}
            >
              {formatDate(details.expiry_date)}
            </StyledText>
          </View>
          <ScrollView nestedScrollEnabled bounces={false}>
            <StyledText
              style={{ fontFamily: "Poppins-Regular", color: theme.body }}
            >
              {details.description}
            </StyledText>
          </ScrollView>
        </View>
      </View>
    </Page>
  );
};

export default Top;
