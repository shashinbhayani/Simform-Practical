import React, { Component } from 'react'
import { Text, View, FlatList, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

export default class Strip extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedValue: this.props.data.defaultValue,
      tempValue: this.props.data.defaultValue.value
    }
  }

  selectColor = (value) => {
    this.setState({
      selectedValue: value,
      tempValue: value.value.toString()
    })
  }

  changeSelectedValue = () => {
    const selectedValue = this.props.data.values.filter(item => item.value == this.state.tempValue)

    if(selectedValue.length) {
      this.setState({
        selectedValue: selectedValue[0],
      })
    } else {
      this.setState({
        tempValue: this.state.selectedValue.value.toString()
      })
    }
  }

  _renderItem = ({item}) => (
    <TouchableOpacity 
      style={styles.colorContainer}
      onPress={() => {
        this.selectColor(item)
      }}
      activeOpacity={1}
    >
      <View style={[styles.color, {backgroundColor: item.color}, item.value == this.state.selectedValue.value ? styles.selected : null]}></View>
      <Text style={styles.value}>{item.value}</Text>
    </TouchableOpacity>
  )

  render() {
    const { title, values } = this.props.data
    return (
      <View style={styles.mainContainer}>
        <View style={[styles.selectedColorContainer, {borderTopWidth: this.props.index == 0 ? 1 : 0, borderBottomWidth: this.props.index == 5 ? 1 : 0, }]}>
          <View style={[styles.selectedColor, {backgroundColor: this.state.selectedValue.color}]}></View>
        </View>
        <View style={{flex: 1}}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>
              {title}{" "}
              <Text style={{fontSize: 15, fontWeight: "normal"}}>(ppm)</Text>
            </Text>
            <TextInput 
              value={this.state.tempValue.toString()}
              style={styles.input}
              onChangeText={value => {
                this.setState({
                  tempValue: value
                })
              }}
              onBlur={this.changeSelectedValue}
            />
          </View>
            <FlatList
              data={values}
              keyExtractor={(item) => item.color}
              style={{width: "100%"}}
              numColumns={5}
              renderItem={this._renderItem}
            />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {flexDirection: "row"},
  selectedColorContainer: {
    borderWidth: 1,
    borderColor: "rgb(182, 182, 184)",
    marginRight: 5
  },
  selectedColor: {
    width: 25,
    height: 25,
    top: 75
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 5,
    height: 75
  },
  title: {
    color: "rgb(182, 182, 184)",
    fontSize: 16,
    fontWeight: "700"
  },
  input: {
    borderColor: "rgb(236, 236, 236)",
    color: "rgb(17, 134, 183)",
    borderWidth: 1,
    textAlign: "center",
    borderRadius: 5,
    width: 75,
    padding: 5,
  },
  colorContainer: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 5
  },
  color: {
    height: 25,
    width: "100%",
    borderRadius: 5,
  },
  selected: {
    borderColor: "rgb(105, 177, 21)",
    borderWidth: 3
  },
  value: {color: "rgb(182, 182, 184)"}
})