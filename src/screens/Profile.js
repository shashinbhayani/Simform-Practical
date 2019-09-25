import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import EditProfile from '../components/EditProfile';
import Storage from '../utils/Storage';
import { STORAGE_CONST } from '../utils/Constants';

export default class Profile extends Component {

  constructor(props) {
    super(props)

    this.state = {
      username: "",
      mobile: "",
      email: "",
      modalVisible: false
    }
  }

  componentDidMount() {
    this.getUserData()
  }
  
  getUserData = async () => {
    try {
      const result = await Storage.multiGet([STORAGE_CONST.USERNAME, STORAGE_CONST.MOBILE_NO, STORAGE_CONST.MOBILE_CODE, STORAGE_CONST.EMAIL])

      const data = result.reduce((data, item) => {
        return {
          ...data,
          [item[0]]: item[1]
        }
      },{})
      
      this.setState({
        username: data[STORAGE_CONST.USERNAME],
        mobile: data[STORAGE_CONST.MOBILE_NO],
        mobileCode: data[STORAGE_CONST.MOBILE_CODE],
        email: data[STORAGE_CONST.EMAIL],
      })
    } catch (error) {
      console.log(error)
      alert("Error while fetching data")
    }
  }

  toggleModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible
    })
  }

  doLogout = () => {
    Storage.removeAll()
    this.props.navigation.navigate("Auth")
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}>
          <EditProfile toggleModal={this.toggleModal} getUserData={this.getUserData} data={this.state} />
        </Modal>
        <View style={styles.header}>
          <Text style={styles.title}>Profile</Text>
          <TouchableOpacity onPress={this.doLogout}>
            <Image source={require("./../assets/img/logout.png")} style={styles.logoutImg} />
          </TouchableOpacity>
        </View>
        <View style={styles.detailContainer}>
          <View style={styles.details}>
            <Image source={require("./../assets/img/group2217.png")} style={styles.profileImg} />
            <Text style={styles.name}>John Doe</Text>
            <React.Fragment>
              <View style={styles.row}>
                <Text style={styles.rowDetail}>{this.state.username}</Text>
                <Text style={styles.rowDetailTitle}>Username</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.rowDetail}>{this.state.mobile}</Text>
                <Text style={styles.rowDetailTitle}>Mobile Number</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.rowDetail}>{this.state.email}</Text>
                <Text style={styles.rowDetailTitle}>Email(Optional)</Text>
              </View>
            </React.Fragment>
          </View>
          <TouchableOpacity style={styles.editBtn} activeOpacity={1} onPress={this.toggleModal}>
            <Text style={styles.editBtnText}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    backgroundColor: COLORS.PRIMARY_COLOR,
    width: "100%",
    alignItems: "center"
  },
  header: {
    flexDirection: "row",
    alignItems:"center",
    marginHorizontal: 20,
    height: 45,
    marginVertical: 20
  },
  title: {
    flex: 1,
    fontSize: 20,
    textAlign: "center",
    color: COLORS.SECONDARY_COLOR
  },
  logoutImg: {
    width: 50,
    height: 50
  },
  detailContainer: {
    position: "absolute",
    top: 175,
    width: "80%",
    backgroundColor: COLORS.SECONDARY_COLOR,
    paddingHorizontal: 20,
    height: 400,
    borderRadius: 10,
    elevation: 5,
    alignItems: "center",
  },
  details: {
    top: -75,
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileImg: {
    width: 150,
    height: 150,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  row: {
    borderBottomColor: "rgb(210, 210, 210)",
    borderBottomWidth: 1,
    width: "100%",
    flexDirection:"row",
    justifyContent:"space-between",
    paddingVertical: 20
  },
  rowDetail: {
    fontWeight:"bold",
    fontSize: 13,
  },
  rowDetailTitle: {
    color: "rgb(210, 210, 210)",
    fontSize: 13
  },
  editBtn: {
    position: "absolute",
    bottom: -25,
    height: 50,
    justifyContent:"center",
    paddingHorizontal: 40,
    borderRadius: 25,
    backgroundColor: "rgb(0, 0, 0)"

  },
  editBtnText: {
    color: COLORS.SECONDARY_COLOR
  }
})