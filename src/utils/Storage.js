import AsyncStorage from '@react-native-community/async-storage';
import { STORAGE_CONST } from './Constants';

export default {
  setItem: function(key, value) {
    AsyncStorage.setItem(key, value)
  },
  multiSet: function(keyValues) {
    return AsyncStorage.multiSet(keyValues)
  },
  getItem: function(key) {
    return AsyncStorage.getItem(key)
  },
  multiGet: function(keys) {
    return AsyncStorage.multiGet(keys)
  },
  removeAll: function() {
    const keys = Object.values(STORAGE_CONST)
    AsyncStorage.multiRemove(keys)
  },
}