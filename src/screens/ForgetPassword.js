import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Container from '../components/Container';
import Button from '../components/Button/ThemeButton';
import globalStyles from '../styles/globalStyles';
import Input from '../components/Input';
import themeInputStyles from '../styles/themeInputStyles';

const ForgetPassowrd = ({navigation}) => {
  const validateAuth = () => {
    navigation.navigate('Otp', {route: 'UpdatePassword'});
  };
  const resendCode = () => {};
  return (
    <Container
      showHeader
      style={[globalStyles.justifyCenter]}
      headerProps={{title: 'Forget Password'}}>
      <Input
        showLabel
        customContainerStyle={[
          themeInputStyles.primaryInputStyle,
          globalStyles.shadow,
          globalStyles.mt40,
        ]}
        customlabelStyle={themeInputStyles.label}
        label="Email ID/ Phone Number"
      />
      <View style={[globalStyles.container, globalStyles.mt16]}>
        <View style={[globalStyles.alignCenter]}>
          <Text style={[globalStyles.text, globalStyles.textCenter]}>
            You will received 4 digit code on the given Email/ Phone Number{' '}
          </Text>
        </View>
        <View
          style={[
            globalStyles.row,
            globalStyles.selfCenter,
            globalStyles.my24,
          ]}>
          <Text style={[globalStyles.text]}>Didn’t receive code? </Text>
          <TouchableOpacity onPress={resendCode}>
            <Text style={[globalStyles.text, globalStyles.bold]}>Resend</Text>
          </TouchableOpacity>
        </View>

        <Button onPress={validateAuth} title="Continue" />
      </View>
    </Container>
  );
};

export default ForgetPassowrd;
