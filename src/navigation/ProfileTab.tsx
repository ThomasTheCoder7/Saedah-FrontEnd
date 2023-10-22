import { View, Text, Platform } from "react-native";
import React, { useEffect, useRef } from "react";
import {
  Tabs,
  MaterialTabBar,
  CollapsibleRef,
} from "react-native-collapsible-tab-view";
import ProfileHeader from "components/Profile/ProfileHeader";
import ProfileInfo from "components/Profile/ProfileInfo";
import { useTheme } from "contexts/ThemeContexts";
import { useTranslation } from "react-i18next";
import { useUserDetails } from "contexts/UserDetailsContext";
import DealCard from "components/DealCard/DealCard";

const Header = () => {
  const theme = useTheme();

  return (
    <View style={{ backgroundColor: theme.backgroundColor }}>
      <ProfileHeader />
      <ProfileInfo />
    </View>
  );
};

const Favorites = (label: string) => (
  <Tabs.Tab name="Favorites" label={label}>
    <Tabs.ScrollView showsVerticalScrollIndicator={false}>
      <Text style={{ color: "red", height: 500 }}>Posts</Text>
    </Tabs.ScrollView>
  </Tabs.Tab>
);

const Deals = (label: string) => {
  const { userDetails } = useUserDetails();

  return (
    <Tabs.Tab name="UserPosts" label={label}>
      <View style={{ paddingVertical: 10 }}>
        {userDetails.deals.deals && (
          <Tabs.FlatList
            data={userDetails.deals.deals}
            contentContainerStyle={{ gap: 10, margin: 0, alignItems:'center', width:'100%' }}
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
  const isArabic = i18n.language == "ar";
  const isAndroid = Platform.OS == "android";
  const tabRef = useRef<CollapsibleRef>();
  const screenOptions: Record<string, any> = {
    tabBarInactiveTintColor: theme.bottomTabInactiveIcon,
    tabBarAndroidRipple: {},
  };
  useEffect(() => {
    if (tabRef.current) tabRef.current.setIndex(isArabic ? 1 : 0);
  }, [i18n.language]);

  if (isAndroid && isArabic) {
    screenOptions.tabBarLabelStyle = { transform: [{ scaleX: -1 }] };
    screenOptions.tabBarContentContainerStyle = { transform: [{ scaleX: -1 }] };
  }

  return (
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
      {tabs(0, isArabic, t)}
      {tabs(1, isArabic, t)}
    </Tabs.Container>
  );
};

export default ProfileTab;
