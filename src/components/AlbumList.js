import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class AlbuList extends Component {

  async componentWillMount() {
    try {
      const response = await axios.get('https://rallycoding.herokuapp.com/api/music_albums');
      console.log('Response', response.data);
    } catch (error) {
      console.log('Error', error);
    }
  }

  render() {
    return (
      <View>
        <Text>Album List!!</Text>
      </View>
    );
  }
}

export default AlbuList;
