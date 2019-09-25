import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, ScrollView } from 'react-native';
import Strip from '../components/Strip';
import { connect } from 'react-redux'
import { getStripsAction } from '../actions/StripsAction';

class Strips extends Component {

  constructor(props) {
    super(props)


    this.props.getStripsAction()
  }

  _renderItem = ({item, index}) => <Strip data={item} index={index} />
  
  render() {
    const { stripsList } = this.props

    return (
      <ScrollView contentContainerStyle={styles.mainContainer}>
        <Text style={styles.nextBtn}>Next</Text>
        <Text style={styles.title}>Test Strip</Text>
        <View style={styles.container}>
          <FlatList
            data={stripsList}
            extraData={this.props}
            keyExtractor={(item) => item.title}
            renderItem={this._renderItem}
          />
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = ({StripsReducer}) => {
  const { stripsList } = StripsReducer;
  return {
    stripsList
  }
}

const mapDispatchToProps = {
  getStripsAction
}
export default connect(mapStateToProps, mapDispatchToProps)(Strips)

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    backgroundColor: "rgb(255, 255, 255)",
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  nextBtn: {
    alignSelf: "flex-end",
    backgroundColor: "rgb(162, 163, 164)",
    color: "rgb(255, 255, 255)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20
  },
  title: {
    color: "rgb(14, 46, 102)",
    fontSize: 30,
    fontWeight: "bold"
  },
  container: {
    paddingTop: 30
  }
})