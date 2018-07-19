import React, {Component} from 'react';
import {Text, View, AppRegistry} from 'react-native';
import Headers from './src/Components/headers';
import AlbumList from './src/Components/AlbumList';
export default class App extends Component {
    render(){
    return(
        <View>
          <Headers name = 'Albums'/>
          <AlbumList/>
        </View>
    );
  }

}

AppRegistry.registerComponent('Albums', () => App);
