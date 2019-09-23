import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { TextField } from 'react-native-material-textfield';

export default class EditProfile extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
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
          value={"John Doe"}
          style={styles.input}
          tintColor="rgb(255, 162, 92)"
          onChangeText={text => this.setState({ text })}
        />
        <View style={{flexDirection: "row"}}>
          <TextField 
            label='Code'
            value={"+91"}
            containerStyle={{width: 100}}
            tintColor="rgb(255, 162, 92)"
            onChangeText={text => this.setState({ text })}
          />
          <TextField 
            label='Mobile Number'
            value={"9537646564"}
            containerStyle={{flex: 1, marginLeft: 20}}
            tintColor="rgb(255, 162, 92)"
            onChangeText={text => this.setState({ text })}
          />
        </View>
        <TextField 
          label='Email'
          value={"shashinbhayani@gmail.com"}
          tintColor="rgb(255, 162, 92)"
          onChangeText={text => this.setState({ text })}
        />
        <TouchableOpacity style={styles.updateBtn} activeOpacity={1}>
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
    color: "rgb(255, 162, 92)"
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
    backgroundColor: "rgb(255, 162, 92)",
    paddingVertical: 10
  },
  updateBtnText: {
    fontSize: 17,
    color: "rgb(255, 255, 255)"
  }
})