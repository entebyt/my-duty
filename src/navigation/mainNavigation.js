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
import Notifications from '../screens/Notifications';
import Filters from '../screens/FIlters';
import Search from '../screens/Search';
import ConfirmationModal from '../components/Modal/ConfirmationModal';
import {Context} from '../utils/store';
import {Text} from 'react-native';
import Sidebar from '../components/Sidebar';
import Profile from '../screens/Profile';
import EditProfile from '../screens/EditProfile';
import Feedbacks from '../screens/Feedbacks';
const {Navigator, Screen} = createStackNavigator();
const MainNavigation: React.SFC<> = () => {
  const {state, dispatch} = React.useContext(Context);
  return (
    <>
      <ConfirmationModal
        visible={state.modalState.visible}
        title={state.modalState.title}
        toggleModal={state =>
          dispatch({type: 'modalState', modalState: {visible: false}})
        }
      />
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
          {/* After Auth Navigations */}
          <Screen name="Home" component={Home} />
          <Screen name="Sidebar" component={Sidebar} />
          <Screen name="Profile" component={Profile} />
          <Screen name="EditProfile" component={EditProfile} />
          <Screen name="Feedbacks" component={Feedbacks} />
          <Screen name="UpdatePassword" component={UpdatePassword} />
          <Screen name="Notification" component={Notifications} />
          <Screen name="Filters" component={Filters} />
          <Screen name="Search" component={Search} />
        </Navigator>
      </NavigationContainer>
    </>
  );
};

export default MainNavigation;
