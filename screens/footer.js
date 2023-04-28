import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Footer() {
  const navigation = useNavigation();

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor: '#f2f2f2' }}>
      <TouchableOpacity onPress={() => navigation.navigate('main')}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('tendances')}>
        <Text>About</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('map')}>
        <Text>Services</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('profile')}>
        <Text>Contact</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Footer;