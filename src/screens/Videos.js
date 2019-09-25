import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'
import { connect } from "react-redux";
import { fetchVideos } from "./../actions/VideosAction"
import Video from '../components/Video';

class Videos extends Component {
  constructor(props) {
    super(props)


    this.fetchVideos()
  }
  
  fetchVideos = () => {
    this.props.fetchVideos()
  }

  _renderItem = ({item, index}) => <Video data={item} />

  render() {
    const { videos } = this.props;
    
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Videos</Text>
        <FlatList
          style={{ marginHorizontal:10 }}
          data={videos}
          extraData={videos}
          onEndReached={this.fetchVideos}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={{height: 10}} />}
          renderItem={this._renderItem}
        />
      </View>
    )
  }
}

const mapStateToProps = ({VideosReducer}) => {
  const { videos } = VideosReducer;
  return { videos }
}

const mapDispatchToProps = {
  fetchVideos
}
export default connect(mapStateToProps, mapDispatchToProps)(Videos)

const styles = StyleSheet.create({
  mainContainer: { 
    backgroundColor: "rgb(193,206,236)"
  },
  title: {
    lineHeight: 45,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  }
})