import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Storage from '../utils/Storage';
import { STORAGE_CONST } from '../utils/Constants';

export default class Splash extends Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    try {
      const username = await Storage.getItem(STORAGE_CONST.USERNAME)
      if(username) {
        this.props.navigation.navigate("Home")
      } else {
        this.props.navigation.navigate("Auth")
      }
    } catch (error) {
      this.props.navigation.navigate("Auth")
    }
  }
  
  render() {
    return (
      <View>
        
      </View>
    )
  }
}
