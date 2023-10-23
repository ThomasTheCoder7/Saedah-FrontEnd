import {
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { AntDesign, Ionicons } from "@expo/vector-icons";
import StyledText from "components/StyledText";
import { useDetails } from "contexts/DetailsContext";
import { useTheme } from "contexts/ThemeContexts";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  heightPercentageToDP as htdp,
  widthPercentageToDP as wtdp,
} from "react-native-responsive-screen";
import { createComment } from "utils/Forms/CreateComment";
import Card from "./CommentsCard/Card";
type props = {
  visible: boolean;
  setVisible: Function;
  comments: any[];
  setComments: Function;
};

const CommentsModal = ({
  visible,
  setVisible,
  comments,
  setComments,
}: props) => {
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const { details, setDetails } = useDetails();
  const [text, setText] = useState('');
  if(!comments) return;
  return (
    <>
      <Modal visible={visible} animationType="fade">
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: htdp("100%"),
            top: 0,
          }}
        />
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={Platform.OS == "android" ? 20 : 0}
        >
          <View
            style={{
              width: wtdp("100%"),
              height: htdp("100%"),
              backgroundColor: theme.backgroundColor,
              paddingTop: htdp("5%"),
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                //   padding: 10,
              }}
            >
              <TouchableOpacity
                style={{ position: "absolute", left: 10 }}
                onPress={() => {
                  setVisible(false);
                }}
              >
                <AntDesign name={`close`} size={30} color={theme.header} />
              </TouchableOpacity>
              <StyledText
                style={{
                  color: theme.header,
                  fontSize: 20,
                  textAlign: "center",
                }}
                weight="SemiBold"
              >
                {t("Comments")}
              </StyledText>
            </View>
            <View style={{ height: "96%" }}>
              <View style={{ marginTop: htdp("3%"), paddingBottom: 10 }}>
                <ScrollView
                  contentContainerStyle={{
                    gap: 20,
                    paddingBottom: htdp("10%"),
                  }}
                >
                  {comments.map((comment: any, index: number) => {
                    return <Card comment={comment} key={index} />;
                  })}
                </ScrollView>
              </View>
              <View
                style={{
                  backgroundColor: theme.bottomTabBackground,
                  width: "100%",
                  height: htdp("10%"),
                  position: "absolute",
                  bottom: 0,
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <TextInput
                  style={{
                    width: "80%",
                    height: "100%",
                    padding: 10,
                    textAlignVertical: "center",
                    fontSize: 20,
                    color:theme.header
                  }}
                  value={text}
                  onChange={(val)=>{setText(val.nativeEvent.text)}}
                  placeholder="Enter your comments"
                  placeholderTextColor={theme.bottomTabInactiveIcon}
                  
                  returnKeyType="done"
                  onSubmitEditing={()=>{
                    setText("");
                    createComment(details.id, text, setComments);
                  }}
                  
                />
                <TouchableOpacity
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: "20%",
                    height: "100%",
                  }}
                  onPress={() => {
                    createComment(details.id, text, setComments);
                    setText("");
                    Keyboard.dismiss();
                  }}
                  disabled={text.length<0}
                >
                  <Ionicons name="send" size={30} color={text.length>0?theme.bottomTabActiveIcon:theme.bottomTabInactiveIcon} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </>
  );
};

export default CommentsModal;
