import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
class AlbumList extends Component {
    state = {albums: []};
    componentWillMount(){
        // fetch('https://rallycoding.herokuapp.com/music/api/music_albums')
        //     .then(response => response.json())
        //     .then((responseData) => {
        //         console.log(responseData);
        //     });
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({albums: response.data}))
            .catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                // ADD THIS THROW error
                throw error;
            });
    }

    renderAlbums(){
        return this.state.albums.map( (album) =>
            <AlbumDetail key = {album.title} album = {album}/>)
    }
    render(){
        console.log(this.state);
        return(
          <ScrollView>
              {/*<Text>Album List!</Text>*/}
              {this.renderAlbums()}
          </ScrollView>
        );
    }
}

export default AlbumList;