import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const Create = () => {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const [locationText, setLocationText] = useState('');

  const handleLocationInputChange = (text) => {
    setLocationText(text);
  };

  const handleMarkerDragEnd = (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setLocation({
      latitude,
      longitude,
    });
  };

  const handleSubmit = () => {
    console.log('Location Text:', locationText);
    console.log('Latitude:', location.latitude);
    console.log('Longitude:', location.longitude);
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);

  return (
    <View>
      <MapView
        style={{ width: '100%', height: 200 }}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={location}
          draggable={true}
          onDragEnd={handleMarkerDragEnd}
        />
      </MapView>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Enter Location"
        value={locationText}
        onChangeText={handleLocationInputChange}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default Create;
