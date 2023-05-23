import React from "react";
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Text,
  Dimensions,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { Card, SearchBar, Button, Badge } from "react-native-elements";
import HouseList from "./ListItem";
import { Ionicons } from "@expo/vector-icons";

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
      images: [
        require("../assets/redHouse.jpg"),

        require("../assets/bailey-anselme-Bkp3gLygyeA-unsplash.jpg"),
        require("../assets/dillon-kydd-XGvwt544g8k-unsplash.jpg"),
        require("../assets/johnson-johnson-U6Q6zVDgmSs-unsplash.jpg"),

        require("../assets/ronnie-george-z11gbBo13ro-unsplash.jpg"),
        require("../assets/trinity-nguyen-xQhqS7OWEqE-unsplash.jpg"),
      ],
      title: "Red House",
      sellingCaption:
        "Experience the vibrant energy of this stunning Red House, the perfect blend of style and sophistication. With spacious rooms and modern amenities, you'll love calling this place home.",
      latitude: -4.325,
      longitude: 15.322,
      area: 57,
      type: "rent",
      commune: "Ngaliema",
      price: "55 000$",
    },
    {
      id: 2,
      images: [
        require("../assets/fallHouse.jpg"),

        require("../assets/bailey-anselme-Bkp3gLygyeA-unsplash.jpg"),
        require("../assets/dillon-kydd-XGvwt544g8k-unsplash.jpg"),
        require("../assets/johnson-johnson-U6Q6zVDgmSs-unsplash.jpg"),

        require("../assets/ronnie-george-z11gbBo13ro-unsplash.jpg"),
        require("../assets/trinity-nguyen-xQhqS7OWEqE-unsplash.jpg"),
      ],
      title: "Fall House",
      sellingCaption:
        "Imagine waking up to the breathtaking views of fall foliage every morning! This cozy Fall House is the perfect place to call home during the crisp autumn months.",
      latitude: -4.329,
      longitude: 15.324,
      area: 350,
      type: "sell",
      commune: "Gombe",
      price: "95 000$",
    },
    {
      id: 3,
      images: [
        require("../assets/oldHouse.jpg"),

        require("../assets/bailey-anselme-Bkp3gLygyeA-unsplash.jpg"),
        require("../assets/dillon-kydd-XGvwt544g8k-unsplash.jpg"),
        require("../assets/johnson-johnson-U6Q6zVDgmSs-unsplash.jpg"),

        require("../assets/ronnie-george-z11gbBo13ro-unsplash.jpg"),
        require("../assets/trinity-nguyen-xQhqS7OWEqE-unsplash.jpg"),
      ],
      title: "Old House",
      sellingCaption:
        "Step back in time with this charming Old House, full of character and history. With unique architectural features and modern updates, you'll enjoy the best of both worlds.",
      latitude: -4.331,
      longitude: 15.326,
      area: 125,
      type: "rent",
      commune: "Maluku",
      price: "155 000$",
    },
    {
      id: 4,
      images: [
        require("../assets/poolHouse.jpg"),
        require("../assets/bailey-anselme-Bkp3gLygyeA-unsplash.jpg"),
        require("../assets/dillon-kydd-XGvwt544g8k-unsplash.jpg"),
        require("../assets/johnson-johnson-U6Q6zVDgmSs-unsplash.jpg"),
        require("../assets/ronnie-george-z11gbBo13ro-unsplash.jpg"),
        require("../assets/trinity-nguyen-xQhqS7OWEqE-unsplash.jpg"),
      ],
      title: "Pool House",
      sellingCaption:
        "Take a dip in your own private oasis with this luxurious Pool House. Perfect for entertaining or just relaxing on a sunny day, you won't want to leave this stunning property.",
      latitude: -4.333,
      longitude: 15.328,
      area: 102,
      type: "rent",
      commune: "Kinshasa",
      price: "$355K",
    },
    {
      id: 5,
      images: [
        require("../assets/whiteHouse.jpg"),

        require("../assets/bailey-anselme-Bkp3gLygyeA-unsplash.jpg"),
        require("../assets/dillon-kydd-XGvwt544g8k-unsplash.jpg"),
        require("../assets/johnson-johnson-U6Q6zVDgmSs-unsplash.jpg"),
        require("../assets/ronnie-george-z11gbBo13ro-unsplash.jpg"),
        require("../assets/trinity-nguyen-xQhqS7OWEqE-unsplash.jpg"),
      ],
      title: "White House",
      sellingCaption:
        "Escape to this serene White House, a peaceful retreat from the hustle and bustle of everyday life. With a bright and airy interior and gorgeous outdoor spaces, you'll feel at home the moment you step inside.",
      latitude: -4.335,
      longitude: 15.33,
      area: 85,
      type: "sell",
      commune: "Ngaliema",
      price: "$555K",
    },
    {
      id: 6,
      images: [
        require("../assets/bahamasHouse.jpg"),
        require("../assets/bailey-anselme-Bkp3gLygyeA-unsplash.jpg"),
        require("../assets/dillon-kydd-XGvwt544g8k-unsplash.jpg"),
        require("../assets/johnson-johnson-U6Q6zVDgmSs-unsplash.jpg"),
        require("../assets/ronnie-george-z11gbBo13ro-unsplash.jpg"),
        require("../assets/trinity-nguyen-xQhqS7OWEqE-unsplash.jpg"),
      ],
      title: "Bahamas House",
      sellingCaption:
        "Experience the ultimate island lifestyle with this breathtaking Bahamas House. With stunning ocean views and luxurious amenities, you'll feel like you're on vacation every day.",
      latitude: -4.337,
      longitude: 15.332,
      area: 97,
      type: "rent",
      commune: "Ngaliema",
      price: "$655K",
    },
    {
      id: 7,
      images: [
        require("../assets/redHouse.jpg"),

        require("../assets/bailey-anselme-Bkp3gLygyeA-unsplash.jpg"),
        require("../assets/dillon-kydd-XGvwt544g8k-unsplash.jpg"),
        require("../assets/johnson-johnson-U6Q6zVDgmSs-unsplash.jpg"),
        require("../assets/ronnie-george-z11gbBo13ro-unsplash.jpg"),
        require("../assets/trinity-nguyen-xQhqS7OWEqE-unsplash.jpg"),
      ],
      title: "Red House",
      sellingCaption:
        "Live in luxury with this gorgeous Red House, the perfect blend of elegance and comfort. With spacious rooms and high-end finishes, you'll love entertaining friends and family in this stunning property.",
      latitude: -4.339,
      longitude: 15.334,
      area: 90,
      type: "sell",
      commune: "Ngaliema",
      price: "$455K",
    },
    {
      id: 8,
      images: [
        require("../assets/bahamasHouse.jpg"),
        require("../assets/bailey-anselme-Bkp3gLygyeA-unsplash.jpg"),
        require("../assets/dillon-kydd-XGvwt544g8k-unsplash.jpg"),
        require("../assets/johnson-johnson-U6Q6zVDgmSs-unsplash.jpg"),
        require("../assets/ronnie-george-z11gbBo13ro-unsplash.jpg"),
        require("../assets/trinity-nguyen-xQhqS7OWEqE-unsplash.jpg"),
      ],
      title: "Bahamas House",
      sellingCaption:
        "Wake up to paradise every day with this stunning Bahamas House. With access to pristine beaches and world-class amenities, you'll never want to leave this slice of heaven.",
      latitude: -4.341,
      longitude: 15.336,
      type: "rent",
      area: 120,
      commune: "Gombe",
      price: "$425K",
    },
    {
      id: 9,
      images: [
        require("../assets/poolHouse.jpg"),
        require("../assets/bailey-anselme-Bkp3gLygyeA-unsplash.jpg"),
        require("../assets/dillon-kydd-XGvwt544g8k-unsplash.jpg"),
        require("../assets/johnson-johnson-U6Q6zVDgmSs-unsplash.jpg"),
        require("../assets/ronnie-george-z11gbBo13ro-unsplash.jpg"),
        require("../assets/trinity-nguyen-xQhqS7OWEqE-unsplash.jpg"),
      ],
      title: "Pool House",
      sellingCaption:
        "Enjoy the ultimate in luxury living with this magnificent Pool House. With a gorgeous outdoor pool and beautifully appointed interior, this property is the perfect place to call home.",
      latitude: -4.343,
      longitude: 15.335,
      area: 150,
      type: "rent",
      commune: "Ngaliema",
      price: 809000,
    },
  ];

  HouseList.setHouses(houses);

  const handleImageClick = (id) => {
    console.log(`Clicked on image with id ${id}`);
  };
  const unicode = 0x00b2;
  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search"
        onChangeText={setSearch}
        value={search}
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.searchInput}
      />
      <FlatList
        data={houses}
        keyExtractor={(house) => house.id.toString()}
        renderItem={({ item: house }) => (
          <FlatList
            horizontal={true}
            data={house.images}
            keyExtractor={(image, index) => index.toString()}
            renderItem={({ item: image }) => (
              <TouchableOpacity
                key={house.id}
                onPress={() => handleImageClick(house.id)}
                style={styles.card}
              >
                <View style={styles.cardContent}>
                  <Image style={styles.image} source={image} />
                </View>
              </TouchableOpacity>
            )}
            pagingEnabled={true}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
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
  header: {
    flexDirection: "row",
  },
  headerLabel: {
    marginTop: 10,
    color: "white",
    marginLeft: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  card: {
    height: 220,
    width: "95%",
  },
  imageContainer: {
    width: "100%",
    height: 375,
  },
  cardText: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 100,
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
    // margin: 0,
    // paddingTop: 0,
    // paddingLeft: 0,
    // paddingRight: 0,
    // overflow: "hidden",
    // //width: Dimensions.get("window").width * 0.95,
    // paddingBottom: 0,
    // borderRadius: 15,
  },
  image: {
    width: Dimensions.get("window").width * 0.95,
    height: 220,
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
    marginLeft: 10,
  },
  title: {
    marginTop: 5,
    marginLeft: 10,
    fontSize: 23,
    color: "white",
    fontWeight: "bold",
  },
  infoIcon: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});

export default MyComponent;
