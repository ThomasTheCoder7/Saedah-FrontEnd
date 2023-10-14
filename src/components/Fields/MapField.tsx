import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { Linking, Platform, View } from "react-native";
import MapView, { MapPressEvent, Marker } from "react-native-maps";

const MapField = () => {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const [Userlocation, setUserLocation] = useState({
    latitude: 0,
    longitude: 0,
  });

  const [latitudeDelta, setLatitudeDelta] = useState(0.0922);
  const [longitudeDelta, setLongitudeDelta] = useState(0.0421);
  const [loading, setLoading] = useState(true);
  const handleLocationPress = (event: MapPressEvent) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setLocation({ latitude, longitude });
    setLatitudeDelta(latitudeDelta);
    setLongitudeDelta(longitudeDelta);
  };

  const handleOpenMaps = () => {
    const { latitude, longitude } = location;

    const url = Platform.select({
      ios: `https://maps.google.com/maps?q=${latitude},${longitude}`,
      android: `geo:${latitude},${longitude}?q=${latitude},${longitude}`,
    });

    if (url) {
      Linking.openURL(url);
    }
  };
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        setLoading(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      setLoading(false);
    })();
  }, []);

  if (loading) return;
  return (
    <MapView
      style={{ width: "100%", height: "70%" }}
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
  );
};

export default MapField;
