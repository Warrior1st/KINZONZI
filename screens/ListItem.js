import React from 'react';
import { View, Text, Image } from 'react-native';

class HouseList {
  constructor() {
    this.houses = [];
  }
  static setHouses(houses) {
    
    this.houses = houses;
  }

  static getHouses() {
    return this.houses;
  }

  static addHouse(house) {
    this.houses.push(house);
  }

  static removeHouse(houseId) {
    this.houses = this.houses.filter(house => house.id !== houseId);
  }
}

export default HouseList;