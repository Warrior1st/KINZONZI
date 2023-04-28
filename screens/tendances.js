import React from 'react';
import { StyleSheet, View, Image, ScrollView, TouchableOpacity, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { SearchBar } from 'react-native-elements';

const MyTrends = () => {
    return (
        <View style={{  marginTop: Constants.statusBarHeight, backgroundColor: '#f2f2f2' }}>
            <Text>This is trends</Text>
        </View>
    );
}

export default MyTrends;