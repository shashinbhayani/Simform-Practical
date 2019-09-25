import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextField } from 'react-native-material-textfield';
import { COLORS, STORAGE_CONST } from '../utils/Constants';
import Storage from './../utils/Storage'

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "John Doe",
      mobileCode: "+00",
      mobileNo: "9856237813",
      email: "johndoe@gmail.com",
      password: "Simform.123",
      address: "2134, Kembery Driveschamburg, IL, 60173",
      isPasswordVisible: false,
    };
  }

  submitForm = async () => {
    const keyValues = [
      [STORAGE_CONST.USERNAME, this.state.username.toString()],
      [STORAGE_CONST.MOBILE_CODE, this.state.mobileCode.toString()],
      [STORAGE_CONST.MOBILE_NO, this.state.mobileNo.toString()],
      [STORAGE_CONST.EMAIL, this.state.email.toString()],
    ]

    try {
      await Storage.multiSet(keyValues)  
    } catch (error) {
      alert("Error while submiting form")
    }
    
    this.props.navigation.navigate("Home")
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
            value={this.state.username}
            placeholder="Enter your username"
            tintColor={COLORS.PRIMARY_COLOR}
            containerStyle={{marginVertical: 5}}
          />
          <View style={styles.mobileNoContainer}>
            <View style={{flex: 1}}>
              <TextField 
                label="Code"
                value={this.state.mobileCode}
                placeholder="+91"
                keyboardType="phone-pad"
                tintColor={COLORS.PRIMARY_COLOR}
              />
            </View>
            <View style={{flex: 4}}>
              <TextField
                label="Mobile Number"
                value={this.state.mobileNo}
                placeholder="Enter mobile number"
                keyboardType="numeric"
                tintColor={COLORS.PRIMARY_COLOR}
              />
            </View>
          </View>
          <TextField
            label="Email(optional)"
            placeholder="Enter your email"
            value={this.state.email}
            containerStyle={{marginVertical: 5}}
            tintColor={COLORS.PRIMARY_COLOR}
          />
          <TextField
            label='Password'
            value={this.state.password}
            secureTextEntry={!this.state.isPasswordVisible}
            tintColor={COLORS.PRIMARY_COLOR}
            onChangeText={password => this.setState({ password })}
            renderAccessory={this._renderTogglePassword}
          />
          <TextField
            label="Address"
            value={this.state.address}
            placeholder="Enter your address"
            containerStyle={{marginVertical: 5}}
            tintColor={COLORS.PRIMARY_COLOR}
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
            onPress={this.submitForm}>
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
    backgroundColor: COLORS.PRIMARY_COLOR,
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