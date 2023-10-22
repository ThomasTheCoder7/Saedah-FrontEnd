import React, { useEffect, useState } from "react";
import { useTheme } from "contexts/ThemeContexts";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
import Filters from "components/Filters/Filters";
import DealCard from "components/DealCard/DealCard";
import { FlatList, RefreshControl, Text } from "react-native";
import { View } from "react-native";
import { getDealsHome } from "utils/GetDeals";

const DATA = [...new Array(10).map(() => 0)];

const Home = () => {
  const [refreshing, setRefreshing] = useState(false); // State to manage the refreshing state
  const [deals, setDeals] = useState([]);
  
  useEffect(() => {
    setRefreshing(true)
    getDealsHome(setDeals, setRefreshing);
  }, []);

  const theme = useTheme();

  const onRefresh = () => {
    // Put the logic here to refresh your data
    // You may fetch new data or update the existing data
    // After updating the data, set refreshing to false to stop the refresh indicator
    setRefreshing(true);
    // Replace the below setTimeout with your actual data fetching or updating logic
    getDealsHome(setDeals, setRefreshing);
    
  };

  
  if(deals.length==0){
    return <View><Text>Hello</Text></View>
  } 

  return (
    <View
      style={{
        backgroundColor: theme.backgroundColor,
        flex: 1,
        paddingTop: htdp("5%"),
        alignItems: "center",
      }}
    >
      <FlatList
        data={deals.deals}
        contentContainerStyle={{ gap: 20 }}
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
            />
          );
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

export default Home;
