import CommentsModal from "components/Comments/CommentsModal";
import AuthButton from "components/Fields/AuthButton";
import Field from "components/Fields/Field";
import MapField from "components/Fields/MapField";
import StyledText from "components/StyledText";
import { useDetails } from "contexts/DetailsContext";
import { useTheme } from "contexts/ThemeContexts";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import {
  heightPercentageToDP as htdp,
  widthPercentageToDP as wtdp,
} from "react-native-responsive-screen";
import { getComments } from "utils/GetComments";
import { handleOpenMaps } from "utils/HandleOpenLocation";
import { formatDate } from "utils/logicUtils";
import Counter from "./Counter";
type props = {
  images: string[];
  index: number;
  setIndex: (index: number) => void;
};

const Bottom = () => {
  const { details } = useDetails();
  const theme = useTheme();
  const [commentsModalVisible, setCommentsModalVisible] = useState(false);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getComments(details.id, setComments);
    console.log(details);
  }, []);
  return (
    <>
      <View style={{ gap: 20, marginHorizontal: wtdp("2%") }}>
        {details.link == null ? (
          <View
            style={{
              marginTop: 10,
              backgroundColor: theme.bottomTabBackground,
              height: htdp("47%"),
              borderRadius: 15,

              //   padding: 10,
            }}
          >
            <MapField
              preview
              location={{
                latitude: details.latitude,
                longitude: details.longitude,
              }}
              handleLocationPress={() => {}}
            />
          </View>
        ) : (
          <View style={{width:'100%', padding:20, backgroundColor:theme.bottomTabBackground, borderRadius:15, alignItems:'center'}}>
            <StyledText style={{color:theme.header}}>{details.link}</StyledText>
          </View>
        )}
        <AuthButton
          label="Take Me There"
          onPress={() => {
            handleOpenMaps({
              latitude: details.latitude,
              longitude: details.longitude,
            });
          }}
        />
        <View
          style={{
            backgroundColor: theme.bottomTabBackground,
            borderRadius: 15,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flex: 1, padding: 10 }}>
            <Field label="Expiry Date">
              <StyledText
                style={{
                  fontFamily: "Poppins-Regular",
                  color: theme.header,
                  fontSize: 20,
                  justifyContent: "space-between",
                }}
              >
                {formatDate(details.expiry_date)}
              </StyledText>
            </Field>
          </View>
          <Counter />
        </View>
        <AuthButton
          label="Comments"
          onPress={() => {
            setCommentsModalVisible(true);
          }}
          secondary
        />
        <CommentsModal
          setVisible={setCommentsModalVisible}
          visible={commentsModalVisible}
          comments={comments}
          setComments={setComments}
        />
      </View>
    </>
  );
};

export default Bottom;
