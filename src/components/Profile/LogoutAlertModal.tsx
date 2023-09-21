import {
  View,
  Modal,
  StyleSheet,
  Pressable,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
import { useTheme } from "contexts/ThemeContexts";
import LogoutAlertHeader from "./LogoutAlertHeader";
import LogoutAlertAction from "./LogoutAlertActions";


type props = {
  modalVisible: boolean;
  setModalVisible: Function;
};

const LogoutAlert = ({ modalVisible, setModalVisible }: props) => {
  const theme = useTheme();
  const hideModal = ()=>{setModalVisible(false)}
  return (
    <View>
      <Modal
        animationType="fade"
        onRequestClose={hideModal}
        transparent={true}
        visible={modalVisible}
      >
        <View style={[styles.centeredView]}>
          <Pressable
            style={styles.bgOpacity}
            onPress={hideModal}
          ></Pressable>
          <View
            style={[
              styles.modalView,
              { backgroundColor: theme.backgroundColor },
            ]}
          >
            <LogoutAlertHeader />
            <LogoutAlertAction onPress={hideModal}/>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  bgOpacity: {
    position: "absolute",
    backgroundColor: "black",
    width: wtdp("150%"),
    height: htdp("150%"),
    opacity: 0.5,
    top: -30,
    left: 0,
    zIndex: -1,
  },
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    flex: 1,
  },
  modalView: {
    borderRadius: 15,
    alignItems: "center",
    width: wtdp("86%"),
    height: htdp("35%"),
    paddingVertical:10
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default LogoutAlert;
