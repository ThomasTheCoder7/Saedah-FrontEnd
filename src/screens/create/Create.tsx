import MyDatePicker from "components/Fields/DatePicker";
import MapField from "components/Fields/MapField";
import TextField from "components/Fields/TextField";
import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";
import { widthPercentageToDP as wtdp ,heightPercentageToDP as htdp } from 'react-native-responsive-screen'
const Create = () => {
  const [locationText, setLocationText] = useState("");
  const [visible, setVisible] = useState(false)


  return (
    <View style={{flex:1, height:htdp('80%'), justifyContent:'center', paddingHorizontal:20, gap:20}}>
      <TextField label="Title"/>
      <MyDatePicker/>


      {/* <Button title="Submit" onPress={()=>{setVisible(prev=>!prev)}}/> */}
    </View>
  );
};

export default Create;
