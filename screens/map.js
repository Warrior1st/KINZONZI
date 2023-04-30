import React, { useState } from 'react';
import { StyleSheet, View, Image, ScrollView, TouchableOpacity, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { SearchBar } from 'react-native-elements';
import MapView, { Marker } from 'react-native-maps';
import ListItem from './ListItem.js';
import HouseList from './ListItem.js';




const MyMap = () => {
  const houses = HouseList.getHouses();

  
  const [selectedHouse, setSelectedHouse] = useState(null);

  const handleMarkerPress = (house) => {
    setSelectedHouse(house);
  };

  

  const [region, setRegion] = useState({
      latitude: -4.35,
      longitude: 15.31,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    });
  return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={region}
          
          
        >
          {houses.map((house, index) => (
            <Marker
              key={house.id}
              coordinate={{ latitude: house.latitude, longitude: house.longitude }}
              onPress={() => handleMarkerPress(house)}
            />
          ))}
        </MapView>
        {selectedHouse && (
          <View style={styles.houseDescription}>
            <Image source={selectedHouse.source} style={styles.image}/>
            <Text style={styles.title}>{selectedHouse.title}</Text>
            <Text>{selectedHouse.description}</Text>
          </View>
        )}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  houseDescription: {
    backgroundColor: 'white',
    width: '100%',
    padding: 16,
    borderRadius: 15,
    margin: 16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
  },
  image: {
    width: 125,
    height: 100,
    borderRadius: 10,
    resizeMode: 'cover',

  },
  });

export default MyMap;