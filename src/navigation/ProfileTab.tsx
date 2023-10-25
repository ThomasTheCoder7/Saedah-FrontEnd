import DealCard from "components/DealCard/DealCard";
import ProfileHeader from "components/Profile/ProfileHeader";
import ProfileInfo from "components/Profile/ProfileInfo";
import { useTheme } from "contexts/ThemeContexts";
import { useUserDetails } from "contexts/UserDetailsContext";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Platform, View } from "react-native";
import {
  CollapsibleRef,
  MaterialTabBar,
  Tabs
} from "react-native-collapsible-tab-view";

import ModalImageLocation from "components/Fields/ModalImageLocation";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image } from "utils/Forms/CreateDeal";
import { submitAvatar } from "utils/Forms/submitAvatar";

const Header = () => {
  const theme = useTheme();
  const [image, setImage]: [Image, (obj: Image) => void] = useState({
    uri: "",
    name: "",
    type: "",
  });
  const [visible, setVisible] = useState(false);
  const insets = useSafeAreaInsets();
  useEffect(() => {
    insets.bottom = 20;
  }, []);
  return (
    <View style={{ backgroundColor: theme.backgroundColor }}>
      <ModalImageLocation
        appendImage={submitAvatar}
        visible={visible}
        setVisible={setVisible}
      />
      <ProfileHeader />
      <ProfileInfo setVisible={setVisible} />
    </View>
  );
};

const Favorites = (label: string) => {
  const { userDetails } = useUserDetails();

  return (
    <Tabs.Tab name="Favorites" label={label}>
      <View style={{ width: "100%", height: "100%" }}>
        {userDetails.likes.likes && (
          <Tabs.FlashList
            data={userDetails.likes.likes}
            estimatedItemSize={15}
            renderItem={({ item, index }) => {
              return (
                <DealCard
                  key={index}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  expiry_date={item.expiry_date}
                  isLiked={item.isLiked}
                  upVotes={item.upvotes}
                  downVotes={item.downvotes}
                  price={item.price}
                  latitude={item.latitude}
                  longitude={item.longitude}
                  photos={item.photos}
                  username={item.username}
                  avatar={item.avatar}
                  profile_id={item.posted_by}
                  isFollowed={item.isFollowed}
                  UserProfile={false}
                  isDeletable={item.isDeletable}
                  created_at={item.created_at}
                  isUpvoted={item.isUpvoted}
                  isDownvoted={item.isDownvoted}
                  UserProfile={true}
                />
              );
            }}
          />
        )}
      </View>
    </Tabs.Tab>
  );
};
const Deals = (label: string) => {
  const { userDetails } = useUserDetails();
  // console.log(userDetails, 'DETAILS');

  return (
    <Tabs.Tab name="UserPosts" label={label}>
      <View style={{ width: "100%", height: "100%" }}>
        {userDetails.deals.deals && (
          <Tabs.FlashList
            estimatedItemSize={15}
            data={userDetails.deals.deals}
            renderItem={({ item, index }) => {
              return (
                <DealCard
                  key={index}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  expiry_date={item.expiry_date}
                  isLiked={item.isLiked}
                  upVotes={item.upvotes}
                  downVotes={item.downvotes}
                  price={item.price}
                  latitude={item.latitude}
                  longitude={item.longitude}
                  photos={item.photos}
                  username={item.username}
                  avatar={item.avatar}
                  profile_id={item.posted_by}
                  isFollowed={item.isFollowed}
                  isDeletable={item.isDeletable}
                  UserProfile={true}
                />
              );
            }}
          />
        )}
      </View>
    </Tabs.Tab>
  );
};

const tabs = (index: 0 | 1, isArabic: boolean, t: Function) => {
  if ((isArabic && index == 1) || (!isArabic && index == 0)) {
    return Deals(t("Deals"));
  }

  return Favorites(t("Favorites"));
};

const ProfileTab = () => {
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const [isArabic, setArabic] = useState(i18n.language == "ar");
  const isAndroid = Platform.OS == "android";
  const tabRef = useRef<CollapsibleRef>();
  const screenOptions: Record<string, any> = {
    tabBarInactiveTintColor: theme.bottomTabInactiveIcon,
    tabBarAndroidRipple: {},
  };
  useEffect(() => {
    if (tabRef.current) tabRef.current.setIndex(isArabic ? 1 : 0);
    setArabic(i18n.language == "ar");
  }, [i18n.language]);

  if (isAndroid && isArabic) {
    screenOptions.tabBarLabelStyle = { transform: [{ scaleX: -1 }] };
    screenOptions.tabBarContentContainerStyle = { transform: [{ scaleX: -1 }] };
  }

  const Container = (props: any) => (
    <Tabs.Container
      renderHeader={Header}
      containerStyle={{ backgroundColor: theme.backgroundColor }}
      headerContainerStyle={{ backgroundColor: theme.backgroundColor }}
      initialTabName="UserPosts"
      ref={tabRef}
      renderTabBar={(props) => (
        <MaterialTabBar
          {...props}
          activeColor={theme.bottomTabActiveIcon}
          inactiveColor={theme.bottomTabInactiveIcon}
          style={[
            { direction: "ltr" },
            screenOptions.tabBarContentContainerStyle,
          ]}
          indicatorStyle={{ backgroundColor: theme.bottomTabActiveIcon }}
          labelStyle={[{ fontSize: 14 }, screenOptions.tabBarLabelStyle]}
        />
      )}
    >
      {props.children}
    </Tabs.Container>
  );

  return isArabic ? (
    <Container>
      {tabs(0, isArabic, t)}
      {tabs(1, isArabic, t)}
    </Container>
  ) : (
    <Container>
      {tabs(0, isArabic, t)}
      {tabs(1, isArabic, t)}
    </Container>
  );
};

export default ProfileTab;
