import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
import { BlurView } from "expo-blur";
import { useTheme } from "contexts/ThemeContexts";
const DealCard = () => {
    const theme = useTheme()
  return (
    <ImageBackground
      style={{
        width: wtdp("94%"),
        height: htdp("30%"),
        marginHorizontal:wtdp('3%'),
        backgroundColor:theme.bottomTabBackground,
        borderRadius:15,
      }}
      source={
        {uri:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2670'}
    }
      borderRadius={15}
    >
      <View style={[styles.blurViewContainer]}>
        <BlurView
          style={{
            flex: 0.80,
            borderRadius: 10,
            overflow: "hidden",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
          tint="dark"
        >
            <Text style={{color:'white'}}>
                Hello World
            </Text>

        </BlurView>
        <BlurView
          style={{
            flex: 0.15,
            borderRadius: 10,
            overflow: "hidden",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
          tint="dark"
        ></BlurView>
      </View>

      <View
        style={[
          styles.blurViewContainer,
          { flex: 0.73, paddingVertical: 10, paddingTop: 20 },
        ]}
      >
        <BlurView
          style={{ flex: 0.80, borderRadius: 10, overflow: "hidden", backgroundColor: "rgba(0,0,0,0.5)", }}
          tint="dark"
        ></BlurView>
        <BlurView
          style={{ flex: 0.15, borderRadius: 10, overflow: "hidden", backgroundColor: "rgba(0,0,0,0.5)", }}
          tint="dark"
        ></BlurView>
      </View>
    </ImageBackground>
  );
};

export default DealCard;

const styles = StyleSheet.create({
  blurViewContainer: {
    flex: 0.27,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 6,
    paddingVertical: 10,
  },
});
