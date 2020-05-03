import React, { Component } from 'react';
import { StyleSheet, Text, View  ,TextInput,TouchableOpacity, StatusBar} from 'react-native';
import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';


export default class SignUp extends Component {
    signIn(){

        Actions.pop();

  }
    render(){
    return (
      <View style={styles.container}>
     
     <Logo/>
     <TextInput
      style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor = 'rgba(255,255,255,0.3)'
    placeholder ="Name"/> 
     <Form type = "Signup"/>
        
     <View style = { styles.signuptextCont}> 
     <Text style = {styles.textreg} > Already have an Account ? </Text>
     <TouchableOpacity onPress={this.signIn}>< Text style = {styles.signuptext}>SignIn</Text>
     </TouchableOpacity>


     </View>
      </View>

        

    );
    
  }
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#000000',
      flex: 1,
      alignItems : 'center',
      justifyContent : 'center',
    },

    signuptextCont:{
      flexGrow : 1,
      justifyContent: 'flex-end',
      marginVertical: 20,
      alignItems: 'center',
      flexDirection: 'row',

    },
    textreg:{
      color : '#FFFFFF',
      fontSize: 20 ,
    },
    signuptext:{
      color : '#FF9100',
      fontSize: 20 ,
      fontWeight: '500'


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
        marginTop: 10 ,
        marginBottom: 10,
        fontSize: 20 ,
    
    },
  });
  