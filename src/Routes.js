import React from 'react'
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Videos from './screens/Videos';
import Strips from './screens/Strips';
import Profile from './screens/Profile';

const HomeRoutes = createBottomTabNavigator({
  Videos: Videos,
  Strips: Strips,
  Profile: Profile
})

const AuthRoute = createAppContainer(createStackNavigator({
  Login: Login,
  Signup: Signup,
}, {
  headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
}))

const Routes = createSwitchNavigator(
  {
    Auth: AuthRoute,
    Home: HomeRoutes
  },
  {
    initialRouteName: 'Auth',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

export default createAppContainer(Routes);
