import { useIsFocused } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import DealCard from "components/DealCard/DealCard";
import StyledText from "components/StyledText";
import { useTheme } from "contexts/ThemeContexts";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, RefreshControl, View } from "react-native";
import { widthPercentageToDP as wtdp } from "react-native-responsive-screen";
import { getDealsHome } from "utils/GetDeals";


const Home = () => {
  const [refreshing, setRefreshing] = useState(false); // State to manage the refreshing state
  const [deals, setDeals] = useState([]);
  const [page, setPage] = useState(1);
  const isFocused = useIsFocused()

  useEffect(()=>{
    if(!isFocused)return
    onRefresh()
  },[isFocused])

  const theme = useTheme();

  const onRefresh = () => {
    setRefreshing(true);

    getDealsHome(setDeals, setPage, 1, setRefreshing);

  };

  return (
    <View
      style={{
        backgroundColor: theme.backgroundColor,
        flex: 1,
        // paddingTop: htdp("5%"),
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <View
        style={{ width: "100%", height: "100%", marginHorizontal: wtdp("2%") }}
      >
        <FlashList
          data={deals.deals}
          estimatedItemSize={30}
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
                link={item.link}
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
              />
            );
          }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          ListFooterComponent={() => {
            if(deals.length <= 0) return;
            return deals.has_next_page ? (
              <View style={{ padding: 10 }}>
                <ActivityIndicator
                  color={theme.bottomTabActiveIcon}
                  size={"small"}
                />
              </View>
            ) : (
              <StyledText
                poppins
                style={{ color: theme.hr, textAlign: "center" }}
              >
                End Reached.
              </StyledText>
            );
          }}
          onEndReached={() => {
            if (deals.has_next_page) {
              getDealsHome(setDeals, setPage, page);
            }
          }}
        />
      </View>
    </View>
  );
};

export default Home;
