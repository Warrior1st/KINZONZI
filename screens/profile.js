import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";

const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://images.unsplash.com/photo-1547721064-da6cfb341d50",
          }}
        />
        <Text style={styles.name}>John Doe</Text>
      </View>
      <View style={styles.section}>
        <TouchableOpacity style={styles.sectionLink}>
          <Text style={styles.sectionTitle}>Language</Text>
          <Ionicons name="ios-arrow-forward" size={20} color="gray" />
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <TouchableOpacity style={styles.sectionLink}>
          <Text style={styles.sectionTitle}>Recommend</Text>
          <Ionicons name="ios-arrow-forward" size={20} color="gray" />
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <TouchableOpacity style={styles.sectionLink}>
          <Text style={styles.sectionTitle}>About</Text>
          <Ionicons name="ios-arrow-forward" size={20} color="gray" />
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <TouchableOpacity style={styles.sectionLink}>
          <Text style={styles.sectionTitle}>Give us Feedback</Text>
          <Ionicons name="ios-arrow-forward" size={20} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    paddingVertical: "35%",
    backgroundColor: "#3bb5ed",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
  },
  section: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    padding: 20,
  },
  sectionLink: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProfilePage;
