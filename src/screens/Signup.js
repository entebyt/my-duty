import React from 'react';
import {Text, View, StyleSheet, AppState, Image} from 'react-native';
import Button from '../components/Button/ThemeButton';
import {useNavigation} from '@react-navigation/core';
import Container from '../components/Container';
import Input from '../components/Input';
import globalStyles from '../styles/globalStyles';
import themeInputStyles from '../styles/themeInputStyles';
import EmailIcon from '../assets/icons/email.svg';
import PasswordIcon from '../assets/icons/password.svg';
import SocialIcons from '../components/SocialIcons';
import colors from '../constants/colors';
import TermsCondition from '../assets/icons/terms_condition.svg';
import useScreenDimensions from '../components/Hooks/useScreenDimensions';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import CheckBox from '../components/Checkbox';
const Signup = ({params}) => {
  const navigation = useNavigation();
  const signupSubmit = () => {
    navigation.navigate('Select Profile');
  };
  const {width} = useScreenDimensions('screen');
  return (
    <Container
      showHeader
      contentContainerStyle={[globalStyles.p0, {paddingBottom: 16}]}
      headerProps={{headerStyle: styles.headerStyle}}
      scroll
      style={{marginTop: -80}}>
      <View style={styles.backgroundContainer}>
        <Image
          style={[{width}, styles.background]}
          source={require('../assets/background/background_2.png')}
        />
      </View>
      <View style={globalStyles.px30}>
        <View style={{width: 240}}>
          <Text style={globalStyles.title}>Welcome to</Text>
          <Text style={globalStyles.appTitle}>My Duty App</Text>
          <Text style={[styles.small, {lineHeight: 22}]}>
            Best cloud storage platform for all business and individuals to
            manage there data
          </Text>
          <Text style={[styles.small, globalStyles.mt40]}>Join For Free.</Text>
        </View>
        <View style={[globalStyles.px20, globalStyles.mt16]}>
          <Input
            icon={EmailIcon}
            customlabelStyle={themeInputStyles.inputLabel}
            label="Email/Mobile Number"
            style={[globalStyles.ml16, globalStyles.flex1]}
            showLabel
          />
          <View style={globalStyles.mt40}>
            <Input
              secureTextEntry
              icon={PasswordIcon}
              customlabelStyle={themeInputStyles.inputLabel}
              label="Create Password"
              showLabel
              style={[globalStyles.ml16, globalStyles.flex1]}
            />
          </View>
          <View
            style={[
              globalStyles.row,
              globalStyles.mt8,
              globalStyles.alignCenter,
            ]}>
            <View>
              <CheckBox
                size={24}
                type
                style={{backgroundColor: colors.gray}}
                color={{checked: '#943993', blur: '#943993'}}
              />
            </View>
            <Text style={[styles.termsText, {marginTop: -4}, globalStyles.ml8]}>
              Accept the terms & Conditions
            </Text>
          </View>
          <Button
            style={globalStyles.mt8}
            onPress={signupSubmit}
            title={'Sign Up'}
          />
          <Text style={[styles.small, globalStyles.selfCenter]}>
            Use Social Login
          </Text>
          <View style={[globalStyles.selfCenter, globalStyles.my16]}>
            <SocialIcons />
          </View>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Login')}>
            <Text style={[globalStyles.label, styles.link]}>
              Back to Sign In
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </Container>
  );
};
const styles = StyleSheet.create({
  small: {color: '#7B7F9E', marginTop: 16},
  link: {color: colors.textprimary, alignSelf: 'center', borderBottomWidth: 1},
  termsText: {
    fontSize: 12,
    color: colors.textTertiary,
    borderBottomWidth: 1,
    borderBottomColor: colors.textTertiary,
  },
  background: {position: 'absolute', top: 0, height: 300},
  backgroundContainer: {
    height: 180,
  },
  headerStyle: {backgroundColor: null},
});
export default Signup;
