import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { SearchBar } from "react-native-elements";
import MapView, { Callout, Marker } from "react-native-maps";
import ListItem from "./ListItem.js";
import HouseList from "./ListItem.js";
import Supercluster from "supercluster";
import MapZoomPanel from "../components/MapZoomPanel.tsx";
import ClusteredMapView from "../components/ClusteredMapView.tsx";

const MyMap = () => {
  const houses = HouseList.getHouses();

  const [zoom, setZoom] = useState(18);

  const [selectedHouse, setSelectedHouse] = useState(null);

  const handleMarkerPress = (marker) => {
    if (marker.properties.cluster) {
      const markers = index.getLeaves(marker.properties.cluster_id, Infinity);
      const houses = markers.map((m) => m.properties);
      // do something with the houses array, e.g. show a list of houses
    } else {
      setSelectedHouse(marker);
    }
  };
  const index = new Supercluster({
    radius: 40,
    maxZoom: 16,
  });
  index.load(
    houses.map((house) => ({
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [house.longitude, house.latitude],
      },
      properties: {
        id: house.id,
        title: house.title,
        description: house.description,
        source: house.source,
      },
    }))
  );

  const [region, setRegion] = useState({
    latitude: -4.35,
    longitude: 15.31,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });

  const map = React.useRef(null);

  const getRegionForZoom = (lat, lon, zoom) => {
    const distanceDelta = Math.exp(Math.log(360) - zoom * Math.LN2);
    const { width, height } = Dimensions.get("window");
    const aspectRatio = width / height;
    return {
      latitude: lat,
      longitude: lon,
      latitudeDelta: distanceDelta * aspectRatio,
      longitudeDelta: distanceDelta,
    };
  };

  //The following is logic for a manual zoom in zoom out button
  const mapZoomIn = () => {
    if (zoom > 18) {
      setZoom(18);
    } else {
      setZoom(zoom + 1);
      const regn = getRegionForZoom(
        region.latitude,
        region.longitude,
        zoom + 1
      );
      map.current.animateToRegion(regn, 200);
    }
  };

  const mapZoomOut = () => {
    if (zoom < 3) {
      setZoom(3);
    } else {
      setZoom(zoom - 1);
      const regn = getRegionForZoom(
        region.latitude,
        region.longitude,
        zoom - 1
      );
      map.current.animateToRegion(regn, 200);
    }
  };

  return (
    <View style={styles.container}>
      <ClusteredMapView ref={map} style={styles.map} initialRegion={region}>
        {houses.map((house, index) => (
          <Marker
            key={house.id}
            coordinate={{
              latitude: house.latitude,
              longitude: house.longitude,
            }}
            onPress={() => handleMarkerPress(house)}
          >
            <Callout>
              <View>
                <Text style={styles.title}>{house.price}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </ClusteredMapView>
      {/* <MapZoomPanel
          onZoomIn={() => {
            mapZoomIn()
          }}
          onZoomOut={() => {
            mapZoomOut()
          }}
        /> */}
      {selectedHouse && (
        <View style={styles.houseDescription}>
          <Image source={selectedHouse.source} style={styles.image} />
          <Text style={styles.title}>{selectedHouse.title}</Text>
          <Text>{selectedHouse.description}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  houseDescription: {
    backgroundColor: "white",
    width: "100%",
    padding: 16,
    borderRadius: 15,
    margin: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 8,
  },
  image: {
    width: 125,
    height: 100,
    borderRadius: 10,
    resizeMode: "cover",
  },
});

export default MyMap;
