import React from "react";
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { Card, SearchBar, Button, Badge } from "react-native-elements";
import HouseList from "./ListItem";
const ADD_TO_FAVORITES = "Add to Favorites";
const REMOVE_FROM_FAVORITES = "Remove from Favorites";

//Format de monnaie
const formatCurrency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
}).format;

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
      type: "rent",
      commune: "Ngaliema",
      price: "55 000$",
    },
    {
      id: 2,
      source: require("../assets/fallHouse.jpg"),
      title: "Fall House",
      sellingCaption:
        "Imagine waking up to the breathtaking views of fall foliage every morning! This cozy Fall House is the perfect place to call home during the crisp autumn months.",
      latitude: -4.329,
      longitude: 15.324,
      type: "sell",
      commune: "Gombe",
      price: "95 000$",
    },
    {
      id: 3,
      source: require("../assets/oldHouse.jpg"),
      title: "Old House",
      sellingCaption:
        "Step back in time with this charming Old House, full of character and history. With unique architectural features and modern updates, you'll enjoy the best of both worlds.",
      latitude: -4.331,
      longitude: 15.326,
      type: "rent",
      commune: "Maluku",
      price: "155 000$",
    },
    {
      id: 4,
      source: require("../assets/poolHouse.jpg"),
      title: "Pool House",
      sellingCaption:
        "Take a dip in your own private oasis with this luxurious Pool House. Perfect for entertaining or just relaxing on a sunny day, you won't want to leave this stunning property.",
      latitude: -4.333,
      longitude: 15.328,
      type: "rent",
      commune: "Kinshasa",
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
      type: "sell",
      commune: "Ngaliema",
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
      type: "rent",
      commune: "Ngaliema",
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
      type: "sell",
      commune: "Ngaliema",
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
      type: "rent",
      commune: "Gombe",
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
      type: "rent",
      commune: "Ngaliema",
      price: "$809K",
    },
  ];

  HouseList.setHouses(houses);

  const handleImageClick = (id) => {
    console.log(`Clicked on image with id ${id}`);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search"
        onChangeText={setSearch}
        value={search}
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.searchInput}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {houses.map((house) => (
          <TouchableOpacity
            key={house.id}
            onPress={() => handleImageClick(house.id)}
            style={styles.card}
          >
            <Card containerStyle={styles.cardContent}>
              <Image source={house.source} style={styles.image} />
              <View style={styles.cardText}>
                <Text style={styles.title}>
                  {house.price}{" "}
                  <Badge
                    value={`• ${
                      house.type === "sell" ? "A vendre" : "A louer"
                    } •`}
                    badgeStyle={{
                      backgroundColor:
                        house.type === "sell" ? "#d4edda" : "#d1ecf1",
                      marginTop: 5,
                    }}
                    textStyle={{
                      color: house.type === "sell" ? "#155724" : "#0c5460",
                    }}
                  />{" "}
                  <Badge
                    value={`• ${house.commune} •`}
                    badgeStyle={{ backgroundColor: "#d6d8d9", marginTop: 5 }}
                    textStyle={{ color: "#1b1e21" }}
                  />
                </Text>

                <Text numberOfLines={2} style={styles.address}>
                  {house.sellingCaption}
                </Text>
              </View>
            </Card>
          </TouchableOpacity>
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
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  card: {
    width: "95%",
    height: 220,
    marginBottom: 20,
  },
  cardText: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 66,
    //paddingTop: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    //zIndex: 1,
    // borderLeft: 2,
    // borderRight: 2,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  button: {
    paddingHorizontal: 5,
    marginBottom: 0,
  },
  cardContent: {
    //borderRadius: 5,
    margin: 0,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    overflow: "hidden",
    //width: Dimensions.get("window").width * 0.95,
    paddingBottom: 0,
    borderRadius: 15,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 15,
  },
  address: {
    color: "white",
    fontSize: 12,
  },
  showMore: {
    color: "blue",
    fontSize: 16,
    textAlign: "right",
  },
  description: {
    color: "white",
  },
  title: {
    marginTop: 0,
    fontSize: 17,
    color: "white",
    fontWeight: "bold",
  },
});

export default MyComponent;
