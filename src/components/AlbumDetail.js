import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card.js';
import CardSection from './CardSection.js';

//since its presentational it is functional
const AlbumDetail = (props) =>{
  return(
    <Card>
      <CardSection>
        <View style = {styles.thumbnailContainerStyle}>
          <Image style ={styles.thumbnailStyle} source={{ uri:props.album.thumbnail_image }} />
        </View>
        <View style = {styles.headerTextStyle}>
            <Text style ={styles.textStyleHeader}>{props.album.title}</Text>
            <Text>{props.album.artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style = {styles.coverImageStyle} source={{ uri: props.album.image}} />
      </CardSection>
    </Card>
  );
};

const styles = {
  headerTextStyle:{
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle:{
    height: 50,
    width: 50
  },
  thumbnailContainerStyle:{
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  textStyleHeader:{
    fontSize: 18
  },
  coverImageStyle:{
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
