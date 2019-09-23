import React, { Component } from 'react'
import { Text, View, FlatList, Image } from 'react-native'

export default class Videos extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videoList: [1,2,3,4,5,6,7,8,9]
    }
  }

  _renderItem = ({item, index}) => {
    return (
      <View style={{height: 100, width:"100%", backgroundColor: "rgb(255, 255, 255)", borderRadius: 3 }}>
        <Image source={require("./../assets/img/images.jpeg")} style={{height: 40, width: 40, margin: 5, alignSelf:"flex-end"}} />
      </View>
    )
  }

  render() {
    return (
      <View style={{ backgroundColor: "rgb(193,206,236)"}}>
        <Text style={{lineHeight: 45, fontSize: 20, fontWeight: "bold", textAlign: "center" }}>Videos</Text>
        <FlatList
          contentContainerStyle={{ marginHorizontal:10 }}
          data={this.state.videoList}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={{height: 10}} />}
          renderItem={this._renderItem}
        />
      </View>
    )
  }
}
