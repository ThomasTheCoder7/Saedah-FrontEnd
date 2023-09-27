import { View, Text, ScrollView } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
import { ScrollContext } from "./Profile";
import { useScrollable } from "contexts/ScrollContext";
const Posts = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}  >
      <Text style={{ color: "red", height:300 }}>Posts</Text>
      <Text style={{ color: "red", height:300 }}>Posts</Text>
      <Text style={{ color: "red", height:300 }}>Posts</Text>
      <Text style={{ color: "red", height:300 }}>Posts</Text>
      <Text style={{ color: "red", height:300 }}>Posts</Text>
      <Text style={{ color: "red", height:300 }}>Posts</Text>
      <Text style={{ color: "red", height:300 }}>Posts</Text>
      <Text style={{ color: "red", height:300 }}>Posts</Text>
      <Text style={{ color: "red", height:300 }}>Posts</Text>
      <Text style={{ color: "red", height:300 }}>Posts</Text>
      <Text style={{ color: "red", height:300 }}>Posts</Text>
      <Text style={{ color: "red", height:300 }}>Posts</Text>
      <Text style={{ color: "red", height:300 }}>Posts</Text>
      <Text style={{ color: "red", height:300 }}>Posts</Text>
      <Text style={{ color: "red", height:300 }}>Posts</Text>
      <Text style={{ color: "red", height:300 }}>Posts</Text>
      <Text style={{ color: "red", height:300 }}>Posts</Text>

    </ScrollView>
  );
};

export default Posts;
