import React, { Component } from 'react'
import { Text, View, SafeAreaView, KeyboardAvoidingView } from 'react-native'
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      // <SafeAreaView style={{flex: 1}}>
        <KeyboardAvoidingView style={{flex: 1}}>
          <Routes />
        </KeyboardAvoidingView>
      // </SafeAreaView>
    );
  }
}

export default App;
