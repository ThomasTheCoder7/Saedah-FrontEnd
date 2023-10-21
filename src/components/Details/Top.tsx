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
type props = {
  images: string[];
  index: number;
  setIndex: (index: number) => void;
};

const Top = ({ index, setIndex, images }: props) => {
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
            {images.map((image, index) => {
              return <ImageField staticImage uri={image} key={index} />;
            })}
          </ScrollView>
          {images.length > 1 && (
            <IndexIndicator index={index} len={images.length} />
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
             HavelTheCoder
            </StyledText>
            <StyledText
              style={{
                fontFamily: "Poppins-Regular",
                color: theme.header,
                fontSize: 20,
              }}
            >
              350 SAR
            </StyledText>
            <StyledText
              style={{
                fontFamily: "Poppins-Regular",
                color: theme.header,
                fontSize: 13,
              }}
            >
              Posted 18 Hours ago
            </StyledText>
          </View>
          <ScrollView nestedScrollEnabled bounces={false}>
            <StyledText
              style={{ fontFamily: "Poppins-Regular", color: theme.body }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              nisi debitis fugiat cupiditate accusamus, maxime quo architecto ex
              pariatur voluptatum libero dolor. Voluptatem blanditiis iure,
              atque laudantium recusandae id illum laborum vitae laboriosam
              soluta aliquam dolores omnis dolorem quasi esse aspernatur placeat
              quibusdam non magni, voluptatum, repudiandae deserunt explicabo.
              Quidem soluta magni tempora. Iusto, at corporis! Ut,
              necessitatibus. Accusamus, voluptatibus saepe sunt, corrupti
              dolores libero eaque, magni earum illo alias quis blanditiis ad
              cupiditate ducimus deserunt quas iusto facere? Sunt reprehenderit
              tempore, accusamus consectetur officiis corporis voluptate est
              animi tenetur suscipit possimus delectus quae nihil laudantium!
              Repellat, harum? Dolorem, aliquam consequuntur? Molestias suscipit
              consectetur in fuga soluta? Similique tempore necessitatibus
              aliquam expedita aspernatur sapiente optio voluptas quod, velit
              fugiat molestias alias unde porro excepturi veniam exercitationem
              aperiam, ullam obcaecati est. Illo laboriosam, eum quod quisquam
              est ullam blanditiis suscipit repellat atque mollitia magni
              laborum ipsam sit magnam beatae harum modi, inventore repudiandae
              tenetur. Est, ipsam, ullam, laborum nisi .
            </StyledText>
          </ScrollView>
        </View>
      </View>
    </Page>
  );
};

export default Top;
