import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { STORAGE_CONST } from '../utils/Constants';
import Storage from '../utils/Storage';

export default class EditProfile extends Component {

  constructor(props) {
    super(props)

    const { username, mobile, mobileCode, email } = this.props.data
    this.state = { username, mobile, mobileCode, email }
  }

  updateData = async () => {
    const keyValues = [
      [STORAGE_CONST.USERNAME, this.state.username.toString()],
      [STORAGE_CONST.MOBILE_NO, this.state.mobile.toString()],
      [STORAGE_CONST.MOBILE_CODE, this.state.mobileCode.toString()],
      [STORAGE_CONST.EMAIL, this.state.email.toString()],
    ]

    try {
      await Storage.multiSet(keyValues)
      this.props.getUserData();
      this.props.toggleModal()
    } catch (error) {
      alert("Error while updating Data")
    }

  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Profile</Text>
          <Text style={styles.closeBtn} onPress={this.props.toggleModal}>X</Text>
        </View>
        <Image source={require("./../assets/img/group2217.png")} style={{alignSelf: "center"}} />
        <TextField 
          label='Username'
          value={this.state.username}
          style={styles.input}
          tintColor={COLORS.PRIMARY_COLOR}
          onChangeText={username => this.setState({ username })}
        />
        <View style={{flexDirection: "row"}}>
          <TextField 
            label='Code'
            value={this.state.mobileCode}
            containerStyle={{width: 100}}
            tintColor={COLORS.PRIMARY_COLOR}
            onChangeText={mobileCode => this.setState({ mobileCode })}
          />
          <TextField 
            label='Mobile Number'
            value={this.state.mobile}
            containerStyle={{flex: 1, marginLeft: 20}}
            tintColor={COLORS.PRIMARY_COLOR}
            onChangeText={mobile => this.setState({ mobile })}
          />
        </View>
        <TextField 
          label='Email'
          value={this.state.email}
          tintColor={COLORS.PRIMARY_COLOR}
          onChangeText={email => this.setState({ email })}
        />
        <TouchableOpacity style={styles.updateBtn} activeOpacity={1} onPress={this.updateData}>
          <Text style={styles.updateBtnText}>Update</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    height:"100%"
  },
  header: {
    flexDirection: "row",
    alignItems:"center",
    height: 45,
    marginVertical: 20
  },
  title: {
    flex: 1,
    fontSize: 20,
    textAlign: "center",
    color: COLORS.PRIMARY_COLOR
  },
  closeBtn: {
    fontSize: 20
  },
  formContainer: {
  },
  updateBtn: {
    width: "100%",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    backgroundColor: COLORS.PRIMARY_COLOR,
    paddingVertical: 10
  },
  updateBtnText: {
    fontSize: 17,
    color: COLORS.SECONDARY_COLOR
  }
})