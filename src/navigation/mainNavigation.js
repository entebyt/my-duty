import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Connect from '../screens/Connect';
import Location from '../screens/Location';
import SelectProfile from '../screens/SelectProfile';
import OtpScreen from '../screens/Otp';
import Completed from '../screens/Completed';
import ForgetPassowrd from '../screens/ForgetPassword';
import UpdatePassword from '../screens/UpdatePassowrd';
import Home from '../screens/Home';
const {Navigator, Screen} = createStackNavigator();
const MainNavigation: React.SFC<> = () => {
  // const { state, dispatch } = React.useContext(Context);
  return (
    <>
      <NavigationContainer>
        <Navigator initialRouteName="Connect" headerMode={'none'}>
          <Screen name="Connect" component={Connect} />
          <Screen name="Login" component={Login} />
          <Screen name="Signup" component={Signup} />
          <Screen name="Location" component={Location} />
          <Screen name="Otp" component={OtpScreen} />
          <Screen name="Complete" component={Completed} />
          <Screen name="Select Profile" component={SelectProfile} />
          <Screen name="ForgetPassword" component={ForgetPassowrd} />
          <Screen name="UpdatePassword" component={UpdatePassword} />
          <Screen name="Home" component={Home} />
        </Navigator>
      </NavigationContainer>
    </>
  );
};

export default MainNavigation;
