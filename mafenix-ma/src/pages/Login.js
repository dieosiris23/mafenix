import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';

import Logo from '../components/Logo';
import FormLogin from '../components/FormLogin';

import {Actions} from 'react-native-router-flux';

export default class Login extends Component {
    
	signup() {
		Actions.signup()
	}

	render() {
		return(
			<View style={styles.container}>
				<Logo/>
				<FormLogin type="Ingresar"/>
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Aún no tienes una cuenta?</Text>
					<TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Registrarse</Text></TouchableOpacity>
				</View>
			</View>	
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#296D8F',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'rgba(255,255,255,0.6)',
  	fontSize:16
  },
  signupButton: {
  	color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500'
  }
});
