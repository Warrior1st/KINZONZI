import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import houses from "../houses";
import Constants from "expo-constants";
import Feather from "react-native-vector-icons/Feather";
import { Badge, Button } from "react-native-elements";

export default class HouseDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    let houseData = null;
    for (let index in houses) {
      if (houses[index].id == this.props.route.params.id) {
        houseData = houses[index];
      }
    }

    this.setState({ data: houseData });
  }

  render() {
    if (this.state.data !== null) {
      const data = this.state.data;
      return (
        <>
          <TouchableOpacity
            style={styles.goBackButton}
            onPress={() => this.props.navigation.goBack()}
          >
            <Feather name="arrow-left" size={35} color={"black"} />
          </TouchableOpacity>
          <ScrollView style={styles.main}>
            <Image source={data.source} style={styles.image} />
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.price}>{data.price}</Text>
            <Text style={styles.badgesContainer}>
              <Badge
                value={`• ${data.type === "sell" ? "A vendre" : "A louer"} •`}
                badgeStyle={{
                  backgroundColor: data.type === "sell" ? "#d4edda" : "#d1ecf1",
                }}
                textStyle={{
                  color: data.type === "sell" ? "#155724" : "#0c5460",
                  fontSize: "xl"
                }}
              />
              <Badge
                value={`• ${data.commune} •`}
                badgeStyle={{ backgroundColor: "#d6d8d9", }}
                containerStyle={{ marginRight: 10, }}
                textStyle={{ color: "#1b1e21",
                fontSize: "xl" }}
              />
            </Text>
            <Text style={styles.subtitle}>Description</Text>
            <Text style={styles.content}>{data.sellingCaption}</Text>
            <Text style={styles.subtitle}>Informations sur le logement</Text>
            <Text style={styles.content}>Chambres: 4</Text>
            <Text style={styles.content}>Sécurité: Oui</Text>
            <Text style={styles.content}>Piscine: Non</Text>
            <Button style={styles.button} title={"Nous contacter"} />
          </ScrollView>
        </>
      );
    }
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
    //marginTop: Constants.statusBarHeight,
  },
  goBackButton: {
    position: "absolute",
    left: 5,
    top: Constants.statusBarHeight * 1.05,
    padding: 5,
    borderRadius: "50%",
    zIndex: 1,
    backgroundColor: "white",
  },
  image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width,
    resizeMode: "cover",
  },
  title: {
    fontSize: 40,
    marginLeft: 10,
    marginTop: 10,
  },
  subtitle: {
    fontSize: 25,
    marginLeft: 10,
    marginTop: 25,
    marginBottom: 10,
  },
  content: {
    fontSize: 15,
    marginLeft: 10,
  },
  price: {
    fontSize: 25,
    marginLeft: 10,
  },
  badgesContainer: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  button: {
    marginVertical: 10,
    width: "95%",
    alignSelf: "center",
  },
});
