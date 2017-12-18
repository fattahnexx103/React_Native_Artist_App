import React from 'react';
import { Text, View } from 'react-native';

//Make the header component
const Header = (props) =>{ //props is used for re-usability
  const {textStyle, viewStyle} = styles; // if you dont want this, you can do styles.viewStyle

  return (
    <View style= {viewStyle}>
      <Text style = {textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {

  viewStyle:{
    backgroundColor: '#A9CCE3',
    justifyContent: 'center', //this centers the item vertically
    alignItems: 'center', //this centers the item horizontally
    height: 60,
    paddingTop: 15,
    paddingBottom: 15,
    elevation: 5, //for android since shadown doesnt do
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10}, //width and height of shadow
    shadowOpacity: 0.8 //how dense the shadow is
  },
  textStyle:{
    fontSize: 40
  }
};

//export it
export default Header;
