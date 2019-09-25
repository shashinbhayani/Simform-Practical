import React, { Component } from 'react';
import { Text, View, Image, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Storage from '../utils/Storage';
import { STORAGE_CONST } from '../utils/Constants';

const { width, height } = Dimensions.get("window")

export default class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isPasswordVisible: false,
       email: "admin@gmail.com",
       password: "Simform.123"
    }
  }

  togglePasswordVisibility = () => {
    this.setState({
      isPasswordVisible: !this.state.isPasswordVisible
    })
  }

  submitForm = () => {
    if(this.state.email != "admin@gmail.com") {
      alert('Email is incorrect')
    } else if(this.state.password != "Simform.123") {
      alert('Password is incorrect')
    } else {
      Storage.setItem(STORAGE_CONST.EMAIL, this.state.email);
      Storage.setItem(STORAGE_CONST.USERNAME, 'johndoe');
      Storage.setItem(STORAGE_CONST.MOBILE_NO, '9537646564');
      Storage.setItem(STORAGE_CONST.MOBILE_CODE, '+91');
      this.props.navigation.navigate("Home")
    }
  }

  navigateToSignUp = () => this.props.navigation.navigate("Signup")

  _renderTogglePassword = () => (
    <TouchableOpacity onPress={this.togglePasswordVisibility}>
      <Icon name={this.state.isPasswordVisible ? "eye-off-outline" : "eye-outline"} size={20} />
    </TouchableOpacity>
  )
  
  render() {
    return (
      <ImageBackground source={require("./../assets/img/group2228.png")} style={styles.mainContainer}>
        <View style={{backgroundColor: "transparent"}}>
          <View style={styles.right}></View>
          <Image source={require("./../assets/img/group2217.png")} style={{position: "absolute", top: 80, left: 25}} />
          <Text style={{position: "absolute", left: 25, bottom: 10, fontSize: 25, fontWeight: "bold" }}>Login</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <TextField 
              label='Email'
              value={this.state.email}
              tintColor={COLORS.PRIMARY_COLOR}
              onChangeText={email => this.setState({ email })}
              onBlur={() => this.refs.password.focus()}
            />
            <TextField
              ref="password"
              label='Password'
              value={this.state.password}
              secureTextEntry={!this.state.isPasswordVisible}
              tintColor={COLORS.PRIMARY_COLOR}
              onChangeText={password => this.setState({ password })}
              renderAccessory={this._renderTogglePassword}
            />

          </View>

          <View style={styles.actionContainer}>
            <Text style={styles.signupBtn} onPress={this.navigateToSignUp}>Sign Up</Text>
            <TouchableOpacity style={styles.loginBtn} onPress={this.submitForm}>
              <Text style={styles.loginTxt}>Login</Text>
            </TouchableOpacity>
          </View>
          <Image source={require("./../assets/img/maskGroup5.png")} style={styles.footerImage} />

        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    width,
    height 
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.SECONDARY_COLOR,
  },
  right: {
    width: "100%",
    height: 300,
    top: 100,
    borderBottomWidth: 200,
    borderBottomColor: 'transparent',
    borderLeftWidth: 0,
    borderLeftColor: COLORS.SECONDARY_COLOR,
    borderRightWidth: 400,
    borderRightColor: COLORS.SECONDARY_COLOR,
    borderStyle: 'solid',
    transform: [
      {rotate: '2700deg'}
    ]
  },
  formContainer: {
    marginHorizontal: 25
  },
  actionContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 25
  },
  signupBtn: {
    color: COLORS.PRIMARY_COLOR,
    borderBottomColor: COLORS.PRIMARY_COLOR,
    borderBottomWidth: 1
  },
  loginBtn: {
    backgroundColor: COLORS.PRIMARY_COLOR,
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20
  },
  loginTxt: {
    color: COLORS.SECONDARY_COLOR
  },
  footerImage: {
    position: "absolute",
    bottom: 0,
    width,
    height:100
  }
})