import React, { useState } from "react";
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
import {
  Entypo,
  EvilIcons,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

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
      bedrooms: 5,
      bathrooms: 3,
      parking: 2,
      title: "Red House",
      sellingCaption:
        "Experience the vibrant energy of this stunning Red House, the perfect blend of style and sophistication. With spacious rooms and modern amenities, you'll love calling this place home.",
      latitude: -4.325,
      longitude: 15.322,
      area: 57,
      genre: "Hotel",
      type: "rent",
      commune: "Ngaliema",
      price: "55 000$",
      liked: false,
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
      bedrooms: 7,
      bathrooms: 5,
      parking: 1,
      title: "Fall House",
      sellingCaption:
        "Imagine waking up to the breathtaking views of fall foliage every morning! This cozy Fall House is the perfect place to call home during the crisp autumn months.",
      latitude: -4.329,
      longitude: 15.324,
      area: 350,
      genre: "Maison",
      type: "sell",
      commune: "Gombe",
      price: "95 000$",
      liked: true,
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
      bedrooms: 2,
      bathrooms: 3,
      parking: 1,
      title: "Old House",
      sellingCaption:
        "Step back in time with this charming Old House, full of character and history. With unique architectural features and modern updates, you'll enjoy the best of both worlds.",
      latitude: -4.331,
      longitude: 15.326,
      area: 125,
      genre: "Terrain",
      type: "rent",
      commune: "Maluku",
      price: "155 000$",
      liked: false,
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
      bedrooms: 3,
      bathrooms: 3,
      parking: 0,
      title: "Pool House",
      sellingCaption:
        "Take a dip in your own private oasis with this luxurious Pool House. Perfect for entertaining or just relaxing on a sunny day, you won't want to leave this stunning property.",
      latitude: -4.333,
      longitude: 15.328,
      area: 102,
      genre: "Cabane",
      type: "rent",
      commune: "Kinshasa",
      price: "$355K",
      liked: false,
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
      bedrooms: 4,
      bathrooms: 1,
      parking: 3,
      title: "White House",
      sellingCaption:
        "Escape to this serene White House, a peaceful retreat from the hustle and bustle of everyday life. With a bright and airy interior and gorgeous outdoor spaces, you'll feel at home the moment you step inside.",
      latitude: -4.335,
      longitude: 15.33,
      area: 85,
      genre: "Appartement",
      type: "sell",
      commune: "Ngaliema",
      price: "$555K",
      liked: true,
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
      bedrooms: 6,
      bathrooms: 3,
      parking: 1,
      title: "Bahamas House",
      sellingCaption:
        "Experience the ultimate island lifestyle with this breathtaking Bahamas House. With stunning ocean views and luxurious amenities, you'll feel like you're on vacation every day.",
      latitude: -4.337,
      longitude: 15.332,
      area: 97,
      genre: "Maison",
      type: "rent",
      commune: "Ngaliema",
      price: "$655K",
      liked: false,
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
      bedrooms: 3,
      bathrooms: 2,
      parking: 0,
      title: "Red House",
      sellingCaption:
        "Live in luxury with this gorgeous Red House, the perfect blend of elegance and comfort. With spacious rooms and high-end finishes, you'll love entertaining friends and family in this stunning property.",
      latitude: -4.339,
      longitude: 15.334,
      area: 90,
      genre: "Terrain",
      type: "sell",
      commune: "Ngaliema",
      price: "$455K",
      liked: true,
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
      bedrooms: 2,
      bathrooms: 1,
      parking: 1,
      title: "Bahamas House",
      sellingCaption:
        "Wake up to paradise every day with this stunning Bahamas House. With access to pristine beaches and world-class amenities, you'll never want to leave this slice of heaven.",
      latitude: -4.341,
      longitude: 15.336,
      type: "rent",
      area: 120,
      genre: "Maison",
      commune: "Gombe",
      price: "$425K",
      liked: true,
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
      bedrooms: 2,
      bathrooms: 1,
      parking: 2,
      title: "Pool House",
      sellingCaption:
        "Enjoy the ultimate in luxury living with this magnificent Pool House. With a gorgeous outdoor pool and beautifully appointed interior, this property is the perfect place to call home.",
      latitude: -4.343,
      longitude: 15.335,
      area: 150,
      genre: "Appartement",
      type: "rent",
      commune: "Ngaliema",
      price: 809000,
      liked: true,
    },
  ];

  HouseList.setHouses(houses);
  const unicode = "\u00b2";

  const HouseInfo = ({ house }) => {
    return (
      <View style={styles.description}>
        <View style={styles.descriptionContent}>
          <Text style={styles.title}>{house.price}</Text>
          <View style={styles.addressContainer}>
            <Text style={styles.address}>
              <Entypo name="location-pin" size={16} color="gray" />
              {house.commune}
            </Text>
            <Text style={styles.area}>
              {house.area} m{unicode}
            </Text>
          </View>
        </View>
        <View style={styles.iconContainer}>
          <Text style={{ color: "black", fontSize: 18 }}>{house.genre}</Text>
          <Text style={{ fontSize: 18, color: "black" }}>
            <FontAwesome5 name="bed" size={18} color="gray" /> {house.bedrooms}
            {"      "}
            <FontAwesome name="bathtub" size={18} color="gray" />
            {house.bathrooms}
            {"      "}
            <FontAwesome5 name="car" size={18} color="gray" /> {house.parking}{" "}
          </Text>
        </View>
      </View>
    );
  };

  const LikeButton = ({ house }) => {
    const [liked, setLiked] = useState(house.liked);

    const handleLike = () => {
      house.liked = !liked;
      setLiked(!liked);
      console.log(
        `Image with id ${house.id} was ${liked ? "unliked" : "liked"}`
      );
    };

    return (
      <View style={styles.likeButton}>
        <TouchableOpacity style={styles.button} onPress={handleLike}>
          {liked ? (
            <MaterialCommunityIcons name="heart" size={30} color="red" />
          ) : (
            <EvilIcons name="heart" size={30} color="black" />
          )}
        </TouchableOpacity>
      </View>
    );
  };

  // const [liked, setLiked] = useState(false);

  // const handleLike = (house) => {

  //   setLiked(!house.liked);
  //   if (house.liked) {
  //     house.liked = false;
  //     console.log(`Liked image with id${house.id}`);
  //   } else {
  //     house.liked = true;
  //     console.log(`UnLiked image with id${house.id}`);
  //   }
  // };

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
      <FlatList
        data={houses}
        keyExtractor={(house) => house.id.toString()}
        style={styles.flatListContainer}
        renderItem={({ item: house }) => (
          <View style={styles.card}>
            <Text>LeFigaro.Com</Text>

            <FlatList
              horizontal={true}
              data={house.images}
              style={styles.innerFlatListStyle}
              keyExtractor={(image, index) => index.toString()}
              renderItem={({ item: image }) => (
                <View>
                  <TouchableOpacity
                    key={house.id}
                    onPress={() => handleImageClick(house.id)}
                  >
                    <Image style={styles.image} source={image} />
                  </TouchableOpacity>
                </View>
              )}
              pagingEnabled={true}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            />
            <LikeButton house={house} />
            <HouseInfo house={house} />
          </View>
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
  flatListContainer: {
    width: Dimensions.get("window").width,
    backgroundColor: "#f0f0f0",
  },
  innerFlatListStyle: {
    width: Dimensions.get("window").width * 0.96,
    marginLeft: Dimensions.get("window").width * 0.02,
    marginRight: Dimensions.get("window").width * 0.02,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
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
    height: 365,
    borderRadius: 15,
    marginBottom: 10,
  },
  descriptionContent: {
    marginTop: 15,
    marginLeft: Dimensions.get("window").width * 0.96 * 0.04,
    marginRight: Dimensions.get("window").width * 0.96 * 0.04,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 23,
    color: "black",
    fontWeight: "bold",
  },
  description: {
    width: Dimensions.get("window").width * 0.96,
    marginLeft: Dimensions.get("window").width * 0.02,
    marginRight: Dimensions.get("window").width * 0.02,
    color: "white",
    height: 115,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: "white",
  },
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  area: {
    fontSize: 18,
    color: "gray",
  },
  iconContainer: {
    marginLeft: Dimensions.get("window").width * 0.96 * 0.04,
    marginRight: Dimensions.get("window").width * 0.96 * 0.04,
    marginTop: 5,
    // borderColor: "orange",
    // borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  likeButton: {
    backgroundColor: "white",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 23, // Adjust the top margin as needed
    right: Dimensions.get("window").width * 0.96 * 0.04,
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
    marginBottom: 0,
  },
  image: {
    width: Dimensions.get("window").width * 0.96,
    height: 232,
    resizeMode: "cover",
  },
  address: {
    color: "gray",
    fontSize: 18,
  },

  infoIcon: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});

export default MyComponent;
