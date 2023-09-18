import { ScrollView, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
import FilterBubble from "./FilterBubble";
import {
  FontAwesome5,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useTheme } from "contexts/ThemeContexts";



const Filters = () => {
  const scrollRef = useRef();
  const [active, setStateActive]: [boolean[], Function] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);
  const setActive = (index:number)=>{
    const temp = [false,false,false,false,false]
    temp[index] = true
    setStateActive(temp)

  }
  const theme = useTheme();
  useEffect(() => {
    setTimeout(() => {
      if(scrollRef.current){
        scrollRef.current.scrollTo(4)
      }
    }, 100);
  }, []);
  return (
    <View style={{ marginTop: "10%" }}>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{
          flexDirection: "row",
          height: htdp("8%"),
          width: wtdp('100%'),
        }}
        contentContainerStyle={{ alignItems: "center", gap: 20 }}
        ref={scrollRef}
      >
        <FilterBubble active={active[0]} label="Clothes" setActive={setActive} index={0}>
          <FontAwesome5 name="tshirt" size={24} color={theme.body} />
        </FilterBubble>
        <FilterBubble active={active[1]} label="Entertainment" setActive={setActive} index={1}>
          <Entypo name="game-controller" size={24} color={theme.body} />
        </FilterBubble>
        <FilterBubble active={active[2]} label="Restaurants" setActive={setActive} index={2}>
          <MaterialCommunityIcons
            name="silverware-fork-knife"
            size={24}
            color={theme.body}
          />
        </FilterBubble>
        <FilterBubble active={active[3]} label="Vouchers" setActive={setActive} index={3}>
          <MaterialCommunityIcons name="ticket" size={24} color={theme.body} />
        </FilterBubble>
        <FilterBubble active={active[4]} label="Groceries" setActive={setActive} index={4}>
          <Entypo name="shopping-basket" size={24} color={theme.body} />
        </FilterBubble>
      </ScrollView>
    </View>
  );
};

export default Filters;
