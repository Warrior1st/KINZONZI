import React from "react";
import {
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
import HouseList from "./ListItem";

const MyComponent = () => {
  const [search, setSearch] = React.useState("");

  const statusBarHeight = StatusBar.currentHeight;

  const houses = [
    {
      id: 1,
      source: require("../assets/redHouse.jpg"),
      title: "Red House",
      sellingCaption:
        "Experience the vibrant energy of this stunning Red House, the perfect blend of style and sophistication. With spacious rooms and modern amenities, you'll love calling this place home.",
      latitude: -4.325,
      longitude: 15.322,
      price: "$55K",
    },
    {
      id: 2,
      source: require("../assets/fallHouse.jpg"),
      title: "Fall House",
      sellingCaption:
        "Imagine waking up to the breathtaking views of fall foliage every morning! This cozy Fall House is the perfect place to call home during the crisp autumn months.",
      latitude: -4.329,
      longitude: 15.324,
      price: "$95K",
    },
    {
      id: 3,
      source: require("../assets/oldHouse.jpg"),
      title: "Old House",
      sellingCaption:
        "Step back in time with this charming Old House, full of character and history. With unique architectural features and modern updates, you'll enjoy the best of both worlds.",
      latitude: -4.331,
      longitude: 15.326,
      price: "$155K",
    },
    {
      id: 4,
      source: require("../assets/poolHouse.jpg"),
      title: "Pool House",
      sellingCaption:
        "Take a dip in your own private oasis with this luxurious Pool House. Perfect for entertaining or just relaxing on a sunny day, you won't want to leave this stunning property.",
      latitude: -4.333,
      longitude: 15.328,
      price: "$355K",
    },
    {
      id: 5,
      source: require("../assets/whiteHouse.jpg"),
      title: "White House",
      sellingCaption:
        "Escape to this serene White House, a peaceful retreat from the hustle and bustle of everyday life. With a bright and airy interior and gorgeous outdoor spaces, you'll feel at home the moment you step inside.",
      latitude: -4.335,
      longitude: 15.33,
      price: "$555K",
    },
    {
      id: 6,
      source: require("../assets/bahamasHouse.jpg"),
      title: "Bahamas House",
      sellingCaption:
        "Experience the ultimate island lifestyle with this breathtaking Bahamas House. With stunning ocean views and luxurious amenities, you'll feel like you're on vacation every day.",
      latitude: -4.337,
      longitude: 15.332,
      price: "$655K",
    },
    {
      id: 7,
      source: require("../assets/redHouse.jpg"),
      title: "Red House",
      sellingCaption:
        "Live in luxury with this gorgeous Red House, the perfect blend of elegance and comfort. With spacious rooms and high-end finishes, you'll love entertaining friends and family in this stunning property.",
      latitude: -4.339,
      longitude: 15.334,
      price: "$455K",
    },
    {
      id: 8,
      source: require("../assets/bahamasHouse.jpg"),
      title: "Bahamas House",
      sellingCaption:
        "Wake up to paradise every day with this stunning Bahamas House. With access to pristine beaches and world-class amenities, you'll never want to leave this slice of heaven.",
      latitude: -4.341,
      longitude: 15.336,
      price: "$425K",
    },
    {
      id: 9,
      source: require("../assets/poolHouse.jpg"),
      title: "Pool House",
      sellingCaption:
        "Enjoy the ultimate in luxury living with this magnificent Pool House. With a gorgeous outdoor pool and beautifully appointed interior, this property is the perfect place to call home.",
      latitude: -4.343,
      longitude: 15.335,
      price: "$809K",
    },
  ];

  HouseList.setHouses(houses);

  const handleImageClick = (id) => {
    console.log(`Clicked on image with id ${id}`);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <SearchBar
        placeholder="Search"
        onChangeText={setSearch}
        value={search}
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.searchInput}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {houses.map((house) => (
          <View style={styles.imageContainer}>
            <TouchableOpacity
              key={house.id}
              onPress={() => handleImageClick(house.id)}
            >
              <Image source={house.source} style={styles.image} />
              <Text style={styles.caption}>{house.title}</Text>
              <Text numberOfLines={2} style={styles.description}>
                {house.sellingCaption}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Constants.statusBarHeight,
  },
  searchContainer: {
    backgroundColor: "#fff",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
    width: "100%", // add this line to make search bar full width
  },
  searchInput: {
    backgroundColor: "#f2f2f2",
    borderRadius: 20,
  },
  scrollContainer: {
    padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  imageContainer: {
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  caption: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  showMore: {
    color: "blue",
    fontSize: 16,
    textAlign: "right",
  },
  description: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default MyComponent;
