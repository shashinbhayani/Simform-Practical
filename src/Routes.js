import { createAppContainer, createSwitchNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Login from './screens/Login';
import Signup from './screens/Signup';
import Videos from './screens/Videos';
import Strips from './screens/Strips';
import Profile from './screens/Profile';
import Splash from './screens/Splash';

const HomeRoute = createBottomTabNavigator({
  Videos: Videos,
  Strips: Strips,
  Profile: Profile
})

const AuthRoute = createStackNavigator({
  Login: Login,
  Signup: Signup,
}, {
  headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
})

const Routes = createSwitchNavigator(
  {
    Splash: Splash,
    Auth: AuthRoute,
    Home: HomeRoute
  },
  {
    initialRouteName: 'Splash',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

export default createAppContainer(Routes);
