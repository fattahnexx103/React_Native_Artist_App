//App is composed of collections of component
//Import library to help create component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header.js';
import AlbumList from './src/components/AlbumList.js';

//Create a component
const App = () =>{
  return([
      <Header key="header" headerText = {'Albums'} />, //if we dont put stuff between
      <AlbumList key= "album-list" />
]);
}

//Render it to the device
AppRegistry.registerComponent('albums',() => App); //would return App
