import DealImageScrollView from "components/DealCard/DealImageScrollView";
import Bottom from "components/Details/Bottom";
import Page from "components/Details/Page";
import Top from "components/Details/Top";
import Field from "components/Fields/Field";
import ImageField from "components/Fields/ImageField";
import IndexIndicator from "components/IndexIndicator";
import { useTheme } from "contexts/ThemeContexts";
import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import {
  heightPercentageToDP as htdp,
  widthPercentageToDP as wtdp,
} from "react-native-responsive-screen";
import { getDeleteImageFunction } from "utils/CreateFormHandlers";
import { onScroll } from "utils/ScrollHandler";
const Details = () => {
  const [index, setIndex] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const [images, setImages] = useState([
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2670",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2670",
  ]);
  const theme = useTheme();
  return (
    <View
      style={{
        width: wtdp("100%"),

        backgroundColor: theme.backgroundColor,
        alignItems: "center",
        paddingHorizontal: wtdp("2%"),
      }}
    >
      <ScrollView
        bounces={false}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        centerContent
      >
        <Top index={index} setIndex={setIndex} images={images} />
        <Bottom/>


      </ScrollView>
    </View>
  );
};

export default Details;
