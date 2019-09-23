import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, ScrollView } from 'react-native';
import Strip from '../components/Strip';

const strips = [{
  id: 1,
  title: "Total Hardness",
  defaultValue: {
    color: "rgb(45, 91, 142)",
    value: 0
  },
  values: [{
    color: "rgb(45, 91, 142)",
    value: 0
  },
  {
    color: "rgb(89, 100, 146)",
    value: 110
  },
  {
    color: "rgb(97, 88, 138)",
    value: 250
  },
  {
    color: "rgb(118, 75, 119)",
    value: 500
  },
  {
    color: "rgb(152, 81, 130)",
    value: 1000
  }]
},
{
  id: 2,
  title: "Total Chlorine",
  defaultValue: {
    color: "rgb(255, 240, 108)",
    value: 0
  },
  values: [{
    color: "rgb(255, 240, 108)",
    value: 0
  },
  {
    color: "rgb(245, 248, 127)",
    value: 1
  },
  {
    color: "rgb(223, 235, 111)",
    value: 3
  },
  {
    color: "rgb(166, 203, 158)",
    value: 5
  },
  {
    color: "rgb(134, 192, 154)",
    value: 10
  }]
},
{
  id: 3,
  title: "Free Chlorine",
  defaultValue: {
    color: "rgb(254, 240, 156)",
    value: 0
  },
  values: [{
    color: "rgb(254, 240, 156)",
    value: 0
  },
  {
    color: "rgb(230, 217, 201)",
    value: 1
  },
  {
    color: "rgb(177, 146, 184)",
    value: 3
  },
  {
    color: "rgb(150, 103, 159)",
    value: 5
  },
  {
    color: "rgb(119, 62, 129)",
    value: 10
  }]
},
{
  id: 4,
  title: "pH",
  defaultValue: {
    color: "rgb(222, 145, 73)",
    value: 6.2
  },
  values: [{
    color: "rgb(222, 145, 73)",
    value: 6.2
  },
  {
    color: "rgb(236, 119, 62)",
    value: 6.8
  },
  {
    color: "rgb(208, 85, 42)",
    value: 7.2
  },
  {
    color: "rgb(206, 82, 74)",
    value: 7.8
  },
  {
    color: "rgb(214, 50, 71)",
    value: 8.4
  }]
},
{
  id: 5,
  title: "Total Alkalinity",
  defaultValue: {
    color: "rgb(210, 158, 74)",
    value: 0
  },
  values: [{
    color: "rgb(210, 158, 74)",
    value: 0
  },
  {
    color: "rgb(159, 150, 79)",
    value: 40
  },
  {
    color: "rgb(104, 129, 111)",
    value: 120
  },
  {
    color: "rgb(54, 112, 103)",
    value: 180
  },
  {
    color: "rgb(53, 106, 115)",
    value: 240
  }]
},
{
  id: 6,
  title: "Cyanuric Acid",
  defaultValue: {
    color: "rgb(197, 137, 68)",
    value: 0
  },
  values: [{
    color: "rgb(197, 137, 68)",
    value: 0
  },
  {
    color: "rgb(191, 104, 46)",
    value: 50
  },
  {
    color: "rgb(175, 69, 77)",
    value: 100
  },
  {
    color: "rgb(144, 39, 92)",
    value: 150
  },
  {
    color: "rgb(132, 46, 119)",
    value: 300
  }]
}]

export default class Strips extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.mainContainer}>
        <Text style={styles.nextBtn}>Next</Text>
        <Text style={styles.title}>Test Strip</Text>
        <View style={styles.container}>
          <FlatList
            data={strips}
            keyExtractor={(item) => item.title}
            renderItem={({item, index}) => <Strip data={item} index={index} />}
          />
        </View>
      </ScrollView>
    )
  }
}

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