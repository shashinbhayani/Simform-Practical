import AsyncStorage from '@react-native-community/async-storage';

export default {
  setItem: function(key, value) {
    AsyncStorage.setItem(key, value)
  },
  getItem: function(key) {
    return AsyncStorage.getItem(key)
  },
  removeItem: function(key) {
    AsyncStorage.removeItem(key)
  }
}