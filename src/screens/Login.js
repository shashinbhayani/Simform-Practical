import React, { Component } from 'react'
import { Text, View, Image, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { TextField } from 'react-native-material-textfield'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const { width, height } = Dimensions.get("window")

export default class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isPasswordVisible: false,
       username: "",
       password: ""
    }
  }

  togglePasswordVisibility = () => {
    this.setState({
      isPasswordVisible: !this.state.isPasswordVisible
    })
  }

  submitForm = () => {
    this.props.navigation.navigate("Home")
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
              label='Username'
              value={this.state.username}
              tintColor="rgb(255, 162, 92)"
              onChangeText={username => this.setState({ username })}
              onBlur={() => this.refs.password.focus()}
            />
            <TextField
              ref="password"
              label='Password'
              value={this.state.password}
              secureTextEntry={!this.state.isPasswordVisible}
              tintColor="rgb(255, 162, 92)"
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
    backgroundColor: "rgb(255, 255, 255)",
  },
  right: {
    width: "100%",
    height: 300,
    top: 100,
    borderBottomWidth: 200,
    borderBottomColor: 'transparent',
    borderLeftWidth: 0,
    borderLeftColor: 'rgb(255, 255, 255)',
    borderRightWidth: 400,
    borderRightColor: 'rgb(255, 255, 255)',
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
    color: "rgb(255, 162, 92)",
    borderBottomColor: "rgb(255, 162, 92)",
    borderBottomWidth: 1
  },
  loginBtn: {
    backgroundColor: "rgb(255, 162, 92)",
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20
  },
  loginTxt: {
    color: "rgb(255, 255, 255)"
  },
  footerImage: {
    position: "absolute",
    bottom: 0,
    width,
    height:100
  }
})