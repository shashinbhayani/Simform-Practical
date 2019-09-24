import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { KeyboardAvoidingView } from 'react-native'
import Routes from './Routes';
import Store from './utils/Store';

class App extends Component {
  render() {
    return (
      <Provider store={Store} >
        <KeyboardAvoidingView style={{flex: 1}}>
          <Routes />
        </KeyboardAvoidingView>
      </Provider>
    );
  }
}

export default App;
