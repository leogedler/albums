import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbuList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    };
  }


  async componentWillMount() {
    try {
      const response = await axios.get('https://rallycoding.herokuapp.com/api/music_albums');
      this.setState({ albums: response.data });
    } catch (error) {
      console.log('Error', error);
    }
  }

  renderAlbums() {
    return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
  }

  render() {
    return (
      <ScrollView>
       {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbuList;
