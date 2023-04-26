//import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { 
  StyleSheet,
  Alert,
  Image,
  View, 
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { 
  useDimensions,
  useDeviceOrientation,
} from '@react-native-community/hooks';
import {
  StatusBar,
} from 'expo-status-bar';
import {
  SearchBar,
} from 'react-native-elements';

export default function App() {
  const {landscape} = useDeviceOrientation();
  const handlePress = () => Alert.alert("Title", "My message", [
    {text: "Yes", onPress: () => console.log("This is Yes")},
    {text: "No", onPress: () => console.log("This is No")},
  ]);
  const containerStyle = {backgroundColor: "orange"};
  //const handleAlert = () => Alert.prompt("My title", "My message", text => console.log(text));
  const [search, setSearch] = React.useState('');
  const onSearch = query => setSearchQuery(query);
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
        <View style={styles.row}>
          <Image source={require('./assets/redHouse.jpg')} style={styles.image}/>
          <Image source={require('./assets/fallHouse.jpg')} style={styles.image} />
          <Image source={require('./assets/oldHouse.jpg')} style={styles.image} />
        </View>
        <View style={styles.row}>
          <Image source={require('./assets/poolHouse.jpg')} style={styles.image} />
          <Image source={require('./assets/whiteHouse.jpg')} style={styles.image} />
          <Image source={require('./assets/bahamasHouse.jpg')} style={styles.image} />
        </View>
        <View style={styles.row}>
          <Image source={require('./assets/redHouse.jpg')} style={styles.image} />
          <Image source={require('./assets/bahamasHouse.jpg')} style={styles.image} />
          <Image source={require('./assets/poolHouse.jpg')} style={styles.image} />
        </View>
      </ScrollView>
    </View>
  );

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  image: {
    width: 348,
   
    height: 252,
    paddingTop: 34,
  },
});
  