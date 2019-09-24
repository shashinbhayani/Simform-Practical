import React, { Component } from 'react'
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native'
import RNVideo from 'react-native-video'

export default class Video extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      paused: true
    }
  }
  
  togglePaused = () => {
    this.setState({
      paused: !this.state.paused
    })
  }

  render() {
    const { data } = this.props
    return (
      <View style={{ width:"100%", backgroundColor: "rgb(255, 255, 255)", borderRadius: 3, padding: 5 }}>
        <Image source={require("./../assets/img/images.jpeg")} style={{height: 40, width: 40, alignSelf:"flex-end"}} />
        <View style={{height: 200, width: "100%"}}>
        { this.state.paused ? 
        <TouchableOpacity onPress={this.togglePaused} style={{...StyleSheet.absoluteFill, zIndex: 1}}>
          <Image source={{ uri: data.thumbnail_url}} style={{width: "100%", height: "100%"}} />
        </TouchableOpacity>
        : null}
        <TouchableOpacity onPress={this.togglePaused} style={{...StyleSheet.absoluteFill}}>
          <RNVideo source={{ uri: data.video_url}} style={{width: "100%", height: "100%"}} paused={this.state.paused} />
        </TouchableOpacity>
        </View>
      </View>
    )
  }
}
