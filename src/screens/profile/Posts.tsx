import { View, Text, ScrollView } from "react-native";
import React, { useContext } from "react";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
import { ScrollContext } from "./Profile";
const Posts = () => {
      const {scroll, setScroll} = useContext(ScrollContext)
  return (

      <ScrollView  showsVerticalScrollIndicator={false} onScroll={(e)=>{setScroll(e.nativeEvent.contentOffset)}} focusable={false}>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      <Text style={{ color: "white" }}>Posts</Text>
      
      </ScrollView>
  );
};

export default Posts;
