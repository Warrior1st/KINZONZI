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
import houses from "../houses";

const Home = (props) => {
  const [search, setSearch] = React.useState("");

  const statusBarHeight = StatusBar.currentHeight;

  HouseList.setHouses(houses);

  const handleImageClick = (id) => {
    props.navigation.navigate("HouseDetail", {
      id: id,
    })
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
                <Text style={styles.caption}>
                  {house.title}{" "}
                  <Badge
                    value={`• ${house.type === "sell" ? "A vendre" : "A louer"} •`}
                    badgeStyle={{ backgroundColor: house.type === "sell" ?"#d4edda" : "#d1ecf1" }}
                    textStyle={{ color: house.type === "sell" ? "#155724" : "#0c5460" }}
                  />{" "}
                  <Badge
                    value={`• ${house.commune} •`}
                    badgeStyle={{ backgroundColor: "#d6d8d9" }}
                    textStyle={{ color: "#1b1e21" }}
                  />
                </Text>

                <Text numberOfLines={2} style={styles.description}>
                  {house.sellingCaption}
                </Text>
              </View>
              <Button style={styles.button} title={"Nous contacter"} />
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
    marginBottom: 10,
    width: Dimensions.get("window").width * 0.95,
  },
  cardText: {
    paddingHorizontal: 5,
  },
  button: {
    paddingHorizontal: 5,
    marginBottom: 0,
  },
  cardContent: {
    borderRadius: 5,
    margin: 0,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    overflow: "hidden",
    width: Dimensions.get("window").width * 0.95,
    paddingBottom: 5,
  },
  image: {
    width: Dimensions.get("window").width * 0.95,
    height: Dimensions.get("window").width * 0.95,
    resizeMode: "cover",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  caption: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  showMore: {
    color: "blue",
    fontSize: 16,
    textAlign: "right",
  },
  description: {
    marginTop: 5,
    marginBottom: 8,
    fontSize: 16,
  },
});

export default Home;
