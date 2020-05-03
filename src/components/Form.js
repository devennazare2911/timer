import React, { Component } from 'react';
import { StyleSheet, Text, View , StatusBar,TextInput , TouchableOpacity} from 'react-native';



export default class Form extends Component {
    render(){
    return (
      <View style={styles.container}>
    <TextInput
      style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor = 'rgba(255,255,255,0.3)'
    placeholder ="Email"/>    
       <TextInput secureTextEntry ={true  }
      style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor = 'rgba(255,255,255,0.3)'
    placeholder ="Password" />   
    <TouchableOpacity style = { styles.button}>
        <Text style= {styles.buttonText}> {this.props.type } </Text>
    </TouchableOpacity>

    </View>
    );

  }
  }
  const styles = StyleSheet.create({
    container: {
      flexGrow : 1,
      alignItems : 'center',
      justifyContent : 'center',
      marginBottom :40 ,
    },

    inputBox: {

        width :300 ,
        height: 60, 
        borderColor: 'gray', 
        borderWidth: 1 ,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 25,
        borderColor: '#FFFFFF',
        paddingHorizontal: 15,
        marginTop: 20 ,
        marginBottom: 20,
        fontSize: 20 ,
    
    },

    buttonText :{
        fontSize: 20 ,
        fontWeight: '500',
        color: '#FFFFFF',
        textAlign: "center",
    },
    button:{

        borderRadius: 25,
        borderColor: '#FFFFFF',
        borderWidth: 2 ,

        backgroundColor: '#FF9100',
        borderRadius: 25,
        width:200,
        borderRadius: 25 ,
        paddingVertical: 15, 
        marginTop: 10,

    
    }
    
  });