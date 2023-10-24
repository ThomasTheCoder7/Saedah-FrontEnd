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
import { FlashList } from "@shopify/flash-list";
import { SearchBar } from "@rneui/themed";
import { FieldStyle } from "../../components/Fields/Field";
import { searchDeal } from "utils/Forms/SearchDeal";
import { isEmpty } from "utils/logicUtils";

const DATA = [...new Array(10).map(() => 0)];

const Search = () => {
  const [refreshing, setRefreshing] = useState(false); // State to manage the refreshing state
  const [deals, setDeals] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (isEmpty(query)) return;
    setRefreshing(true);
    searchDeal(query, setDeals, setRefreshing);
  }, [query]);

  const theme = useTheme();

  const onRefresh = () => {
    if (isEmpty(query)) return;
    setRefreshing(true);
    searchDeal(query, setDeals, setRefreshing);
  };

  return (
    <View
      style={{
        backgroundColor: theme.backgroundColor,
        flex: 1,
        paddingTop: htdp("5%"),
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <SearchBar
        style={{ color: theme.header }}
        value={query}
        searchIcon={{
          type: "AntDesign",
          name: "search",
          size: 30,
          color: theme.header,
        }}
        cancelIcon={{
          type: "EvilIcons",
          name: "chevron-left",
          size: 30,
          color: theme.header,
        }}
        clearIcon={{
          type: "AntDesign",
          name: "close",
          size: 30,
          color: theme.header,
        }}
        onChangeText={(text) => {
          setQuery(text);
        }}
        containerStyle={{
          width: "95%",
          marginTop: 20,
          borderRadius: 15,
          backgroundColor: theme.fieldBackground,
          borderWidth: 0,
        }}
        inputContainerStyle={{
          backgroundColor: theme.fieldBackground,
          borderWidth: 0,
          borderRadius: 15,
        }}
        platform="android"
      />
      <View
        style={{ width: "100%", height: "100%", marginHorizontal: wtdp("2%") }}
      >
        <FlashList
          data={deals}
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
                photos={item.photos}
                username={item.username}
                avatar={item.avatar}
                profile_id={item.posted_by}
                isFollowed={item.isFollowed}
                UserProfile={false}
                isDeletable={item.isDeletable}
                created_at={item.created_at}
                path="SearchDealDetails"
              />
            );
          }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
    </View>
  );
};

export default Search;
