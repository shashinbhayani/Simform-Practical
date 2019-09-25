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
      <View style={styles.mainContainer}>
        <Image source={require("./../assets/img/images.jpeg")} style={styles.shareBtn} />
        <View style={styles.videoContainer}>
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

const styles = StyleSheet.create({
  mainContainer: {
    width:"100%",
    backgroundColor: COLORS.SECONDARY_COLOR,
    borderRadius: 3,
    padding: 5
  },
  shareBtn: {
    height: 40,
    width: 40,
    alignSelf: "flex-end"
  },
  videoContainer: {
    height: 200,
    width: "100%"
  }
})