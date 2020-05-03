import React, { Component } from 'react';
import { StyleSheet, Text, View  ,TextInput,TouchableOpacity, StatusBar} from 'react-native';
import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';


export default class Login extends Component {
  signUp(){

        Actions.signup();

  }
    render(){
    return (
      <View style={styles.container}>
     
     <Logo/>
     <Form type = "Login"/>

     <View style = { styles.signuptextCont}> 
     <Text style = {styles.textreg} > Don't have an Account yet ? </Text>
     <TouchableOpacity onPress={this.signUp}><Text style = {styles.signuptext}>SignUp</Text>

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
  });
  