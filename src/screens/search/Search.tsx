import React, { useEffect, useState } from "react";
import { useTheme } from "contexts/ThemeContexts";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
import Filters from "components/Filters/Filters";
import DealCard from "components/DealCard/DealCard";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Text,
} from "react-native";
import { View } from "react-native";
import { getDealsHome } from "utils/GetDeals";
import { FlashList } from "@shopify/flash-list";
import { SearchBar } from "@rneui/themed";
import { FieldStyle } from "../../components/Fields/Field";
import { searchDeal } from "utils/Forms/SearchDeal";
import { isEmpty } from "utils/logicUtils";
import StyledText from "components/StyledText";

const DATA = [...new Array(10).map(() => 0)];

const Search = () => {
  const [refreshing, setRefreshing] = useState(false); // State to manage the refreshing state
  const [deals, setDeals] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (isEmpty(query)) setDeals([]);
    setRefreshing(true);
    searchDeal(query, setDeals, setPage, null, setRefreshing);
  }, [query]);

  const theme = useTheme();

  const onRefresh = () => {
    if (isEmpty(query)) return;
    setRefreshing(true);
    searchDeal(query, setDeals, setPage, null, setRefreshing);
  };
  {
    console.log(deals);
  }

  return (
    <View
      style={{
        backgroundColor: theme.backgroundColor,
        flex: 1,
        paddingTop: htdp("12%"),
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <View
        style={{
          position: "absolute",
          top: -10,
          zIndex: 10000,
          width: "100%",
          alignItems: "center",
          backgroundColor: theme.backgroundColor,
          padding: 5,
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
      </View>
      {!isEmpty(query) && (
        <View
          style={{
            width: "100%",
            height: "100%",
            marginHorizontal: wtdp("2%"),
          }}
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
                  link={item.link}
                  path="SearchDealDetails"
                />
              );
            }}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            ListFooterComponent={() => {
              if (isEmpty(query)) return <></>;
              return deals.has_next_page ? (
                <View style={{ paddingBottom: 60 }}>
                  <ActivityIndicator
                    color={theme.bottomTabActiveIcon}
                    size={"small"}
                  />
                </View>
              ) : (
                <View>
                  <StyledText
                    poppins
                    style={{ color: theme.hr, textAlign: "center" }}
                  >
                    End Reached.
                  </StyledText>
                </View>
              );
            }}
            onEndReached={() => {
              if (deals.has_next_page && !isEmpty(query)) {
                searchDeal(query, setDeals, setPage, page);
                setRefreshing(false);
              }
            }}
          />
        </View>
      )}
    </View>
  );
};

export default Search;
