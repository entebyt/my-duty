import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Container from '../components/Container';
import {TouchableOpacity} from 'react-native-gesture-handler';
import globalStyles from '../styles/globalStyles';
import Button from '../components/Button/ThemeButton';
import OTPInput from '@twotalltotems/react-native-otp-input';
import colors from '../constants/colors';
const OtpScreen = ({navigation, route}) => {
  // To send the code again to user
  const displayText = route.params?.displayText;
  const link = route.params?.route;
  const resendCode = () => {};
  const verifyOtp = () => {
    navigation.navigate(link || 'Complete', {displayText});
  };
  return (
    <Container
      showHeader
      style={globalStyles.justifyCenter}
      headerProps={{title: 'OTP Verify'}}>
      <View style={globalStyles.alignCenter}>
        <OTPInput
          style={[styles.otpInput]}
          pinCount={4}
          codeInputFieldStyle={styles.otpInputField}
          autoFocusOnLoad
          onCodeFilled={code => {
            console.log(`Code is ${code}, you are good to go!`);
          }}
        />

        <Text style={globalStyles.text}>Enter Valid OTP Number ! </Text>
        <Text style={globalStyles.text}>You will receive 4 digit code </Text>
      </View>
      <View
        style={[globalStyles.row, globalStyles.selfCenter, globalStyles.my24]}>
        <Text style={[globalStyles.text]}>Didn’t receive code? </Text>
        <TouchableOpacity onPress={resendCode}>
          <Text style={[globalStyles.text, globalStyles.bold]}>Resend</Text>
        </TouchableOpacity>
      </View>
      <View style={globalStyles.px40}>
        <Button onPress={verifyOtp} title="Continue" />
      </View>
    </Container>
  );
};
const styles = StyleSheet.create({
  otpInput: {width: '80%', height: 140},
  otpInputField: {
    height: 70,
    width: 60,
    borderBottomColor: colors.border,
    borderBottomWidth: 5,
    elevation: 4,
    borderRadius: 4,
    color: colors.textprimary,
    fontSize: 20,
    backgroundColor: '#fff',
    borderWidth: 0,
  },
});
export default OtpScreen;
