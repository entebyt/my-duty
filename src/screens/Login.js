import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Text, View, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Button from '../components/Button/ThemeButton';
import Container from '../components/Container';
import Input from '../components/Input';
import colors from '../constants/colors';
import globalStyles from '../styles/globalStyles';
import themeInputStyles from '../styles/themeInputStyles';
import EmailIcon from '../assets/icons/email.svg';
import PasswordIcon from '../assets/icons/password.svg';
import SocialIcons from '../components/SocialIcons';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
const Login = ({params}) => {
  const navigation = useNavigation();
  const loginSubmit = () => {
    navigation.navigate('Location');
  };
  return (
    <Container
      scroll
      showHeader
      contentContainerStyle={[globalStyles.p0, {paddingBottom: 16}]}
      style={{marginTop: -80}}
      headerProps={{headerStyle: styles.headerStyle}}>
      <View style={styles.backgroundContainer}>
        <Image
          style={styles.background}
          source={require('../assets/images/login.png')}
        />
        <View
          style={[
            globalStyles.selfCenter,
            globalStyles.alignCenter,
            styles.loginTextContainer,
          ]}>
          <Text
            style={[
              globalStyles.label,
              globalStyles.bold,
              {fontSize: 18, color: colors.textQuarter},
            ]}>
            Log In
          </Text>
          <Text style={[globalStyles.label, {color: colors.textQuarter}]}>
            to Continue
          </Text>
        </View>
      </View>

      <View style={[globalStyles.px40, globalStyles.mt40]}>
        <Input
          label="Email/Mobile Number"
          icon={EmailIcon}
          customlabelStyle={themeInputStyles.inputLabel}
          showLabel
          style={[globalStyles.ml16, globalStyles.flex1]}
        />
        <View style={globalStyles.mt40}>
          <Input
            label="Password"
            secureTextEntry
            icon={PasswordIcon}
            customlabelStyle={themeInputStyles.inputLabel}
            showLabel
            style={[globalStyles.ml16, globalStyles.flex1]}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
          <Text style={[globalStyles.label, {alignSelf: 'flex-end'}]}>
            Forget Password
          </Text>
        </TouchableOpacity>
        <View style={globalStyles.mt16}>
          <Button onPress={loginSubmit} title={'Login'} />
        </View>
        <Text style={styles.small}>or Sign in with</Text>
        <View style={[globalStyles.selfCenter, globalStyles.my16]}>
          <SocialIcons />
        </View>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Signup')}>
          <Text style={[globalStyles.label, styles.link]}>
            Create an account
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  small: {color: colors.textsecondary, marginTop: 16, alignSelf: 'center'},
  link: {color: colors.textprimary, alignSelf: 'center', borderBottomWidth: 1},
  loginTextContainer: {
    backgroundColor: colors.white,
    paddingVertical: 16,
    paddingHorizontal: 80,
  },
  headerStyle: {backgroundColor: null},
  background: {position: 'absolute', top: 0, width: '100%', height: 380},
  backgroundContainer: {
    height: 380,
    justifyContent: 'flex-end',
  },
});
export default Login;
