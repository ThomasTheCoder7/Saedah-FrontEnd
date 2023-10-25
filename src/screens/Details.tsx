import Bottom from "components/Details/Bottom";
import Top from "components/Details/Top";
import { useDetails } from "contexts/DetailsContext";
import { useTheme } from "contexts/ThemeContexts";
import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import {
  widthPercentageToDP as wtdp
} from "react-native-responsive-screen";
const Details = () => {
  const [index, setIndex] = useState(0);
  const { details } = useDetails();
  const [pageIndex, setPageIndex] = useState(0);
  const [images, setImages] = useState(details.photos);
  const theme = useTheme();
  if (!details.photos) return;
  // useEffect(()=>{
  //   console.log('Hi Details!');
  // },[])
  return (
    <View
      style={{
        width: wtdp("100%"),

        backgroundColor: theme.backgroundColor,
        alignItems: "center",
        direction:'ltr'
      }}
    >


      <View style={{ paddingHorizontal: wtdp("2%"), width:'100%' }}>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          centerContent
          contentContainerStyle={{ gap: 20, paddingVertical: 10 }}
        >
          <Top index={index} setIndex={setIndex} />
          <Bottom />
        </ScrollView>
      </View>
    </View>
  );
};

export default Details;
