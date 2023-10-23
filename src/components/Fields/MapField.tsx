import { useTheme } from "contexts/ThemeContexts";
import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Linking, Platform, View } from "react-native";
import MapView, { MapPressEvent, Marker } from "react-native-maps";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
type location = { latitude: number; longitude: number } | null;

type props = {
  handleLocationPress: (event: MapPressEvent) => void;
  loading: boolean;
  location: any;
  Userlocation: any;
  preview: boolean;
};

const MapField = ({
  handleLocationPress,
  loading,
  location,
  Userlocation,
  preview = false,
}: props) => {
  const theme = useTheme();

  const [latitudeDelta, setLatitudeDelta] = useState(0.0922);
  const [longitudeDelta, setLongitudeDelta] = useState(0.0421);

  if (loading)
    return (
      <View
        style={{
          justifyContent: "center",
          alignSelf: "center",
          height: "100%",
          width: "100%",
          backgroundColor: theme.bottomTabBackground,
          borderRadius: 15,
          overflow: "hidden",
        }}
      >
        <ActivityIndicator color={theme.bottomTabActiveIcon} size={"small"} />
      </View>
    );

  if (preview) {
    return (
      <View
        style={{
          width: "100%",
          borderRadius: 15,
          overflow: "hidden",
        }}
      >
        {!loading && (
          <MapView
            provider="google"
            loadingEnabled
            loadingBackgroundColor={theme.bottomTabBackground}
            loadingIndicatorColor={theme.bottomTabActiveIcon}
            style={{ width: "100%", height: "100%", zIndex: 0 }}
            region={{
              latitude: location.latitude?location.latitude:0,
              longitude: location.longitude?location.longitude:0,
              latitudeDelta: latitudeDelta,
              longitudeDelta: longitudeDelta,
            }}
            onPress={handleLocationPress}
          >
            <Marker
              coordinate={{
                latitude: location.latitude?location.latitude:0,
                longitude: location.longitude?location.longitude:0,
              }}
              draggable={false} // Marker is not draggable
            />
          </MapView>
        )}
      </View>
    );
  }
  return (
    <View
      style={{
        width: "100%",
        // height: htdp("45%"),
        borderRadius: 15,
        overflow: "hidden",
      }}
    >
      {!loading && (
        <MapView
          provider="google"
          loadingEnabled
          loadingBackgroundColor={theme.bottomTabBackground}
          loadingIndicatorColor={theme.bottomTabActiveIcon}
          style={{ width: "100%", height: "100%", zIndex: 0 }}
          region={{
            latitude: Userlocation.latitude,
            longitude: Userlocation.longitude,
            latitudeDelta,
            longitudeDelta,
          }}
          onPress={handleLocationPress}
        >
          <Marker
            coordinate={location}
            draggable={false} // Marker is not draggable
          />
        </MapView>
      )}
    </View>
  );
};

export default MapField;
