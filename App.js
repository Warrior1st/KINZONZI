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
  Searchbar,
} from 'react-native-paper';

export default function App() {
  const {landscape} = useDeviceOrientation();
  const handlePress = () => Alert.alert("Title", "My message", [
    {text: "Yes", onPress: () => console.log("This is Yes")},
    {text: "No", onPress: () => console.log("This is No")},
  ]);
  const containerStyle = {backgroundColor: "orange"};
  //const handleAlert = () => Alert.prompt("My title", "My message", text => console.log(text));
  const [searchQuery, setSearchQuery] = React.useState('');
  const onSearch = query => setSearchQuery(query);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        flex: 1,
        backgroundColor:'#ffffff',
        alignItems: 'center',
        justifyContent: 'flex-start',

        //width: '100%',
        //height: '100%',
      }}>
        <Searchbar
          placeholder="Rechercher une demeure"
          onChangeText={onSearch}
          style={{ width: 366, height: 40, borderColor: '#000000', elevation: 0}}/>
        <StatusBar style='dark'></StatusBar>
        <Image source={require('./assets/redHouse.jpg')} style={{ width: 348, height: 252, paddingTop: 34}}/>

      </View>
    </SafeAreaView>
  );

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
  