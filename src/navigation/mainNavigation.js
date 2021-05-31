import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Context} from '../store';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
const {Navigator, Screen} = createStackNavigator();
const MainNavigation: React.SFC<> = () => {
  // const { state, dispatch } = React.useContext(Context);
  return (
    <>
      <NavigationContainer>
        <Navigator initialRouteName="Login" headerMode={'none'}>
          <Screen name="Login" component={Login} />
          <Screen name="Signup" component={Signup} />
        </Navigator>
      </NavigationContainer>
    </>
  );
};

export default MainNavigation;
