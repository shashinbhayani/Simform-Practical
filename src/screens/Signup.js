import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextField } from 'react-native-material-textfield';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPasswordVisible: false,
    };
  }

  togglePasswordVisibility = () => {
    this.setState({
      isPasswordVisible: !this.state.isPasswordVisible
    })
  }

  navigateToLogin = () => this.props.navigation.goBack();

  _renderTogglePassword = () => (
    <TouchableOpacity onPress={this.togglePasswordVisibility}>
      <Icon name={this.state.isPasswordVisible ? "eye-off-outline" : "eye-outline"} size={20} />
    </TouchableOpacity>
  )
  render() {
    return (
      <View>
        <View style={styles.formContainer}>
          <View style={styles.signupTextContainer}>
            <TouchableOpacity onPress={this.navigateToLogin}>
              <Icon size={32} color={'orange'} name="chevron-left" />
            </TouchableOpacity>
            <Text style={styles.signupText}>Sign up</Text>
          </View>
          <TextField
            label="Username"
            placeholder="Enter your username"
            tintColor="rgb(255, 162, 92)"
            containerStyle={{marginVertical: 5}}
          />
          <View style={styles.mobileNoContainer}>
            <View style={{flex: 1}}>
              <TextField 
                label="Code"
                placeholder="+91"
                keyboardType="phone-pad"
                tintColor="rgb(255, 162, 92)"
              />
            </View>
            <View style={{flex: 4}}>
              <TextField
                label="Mobile Number"
                placeholder="Enter mobile number"
                keyboardType="numeric"
                tintColor="rgb(255, 162, 92)"
              />
            </View>
          </View>
          <TextField
            label="Email(optional)"
            placeholder="Enter your email"
            containerStyle={{marginVertical: 5}}
            tintColor="rgb(255, 162, 92)"
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
          <TextField
            label="Address"
            placeholder="Enter your address"
            containerStyle={{marginVertical: 5}}
            tintColor="rgb(255, 162, 92)"
          />
          <View
            style={styles.referalCodeContainer}>
            <TextInput
              placeholder="Referral code"
              underlineColorAndroid="transparent"
            />
            <Text style={{alignSelf: 'center'}}>Apply</Text>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.signupBtn}
            activeOpacity={1}
            onPress={() => {
              this.props.navigation.navigate("Home")
            }}>
            <Text style={styles.signupBtnText}>{'Signup  |  f'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    margin: 20,
    overflow: 'hidden'
  },
  signupTextContainer: { marginBottom: 10 },
  signupText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10
  },
  mobileNoContainer: {
    flexDirection: 'row',
    marginVertical: 5
  },
  referalCodeContainer: {
    marginVertical: 5,
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'grey',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnContainer: {
    width: '100%',
    alignItems: 'flex-end'
  },
  signupBtn: {
    width: '30%',
    backgroundColor: 'orange',
    paddingLeft: 20,
    paddingRight: 10,
    height: 35,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupBtnText: {
    fontSize: 16,
    color: 'white'
  }
})