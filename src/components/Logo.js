import React, { Component } from 'react';
import { StyleSheet, Text, View , StatusBar,Image} from 'react-native';



export default class Logo extends Component {
    render(){
    return (
      <View style={styles.container}>
      <Image
      style= {{width: 70 , height : 70 }}
      source={{
        uri: 'https://reactnative.dev/img/tiny_logo.png',
      }}
    /> 
    <Text style = {styles.logoText}> Welcome</Text>
    </View>
    );

  }
  }
  const styles = StyleSheet.create({
    container: {
      flexGrow : 1,
      alignItems : 'center',
      justifyContent : 'flex-end',
    },

    logoText: {
      marginVertical:15,
      fontSize: 30,
      fontWeight: '400',
      shadowRadius :10 ,
      color: "rgba(255,255,255, 0.7)"

    },


  });