import React from 'react';
import Container from '../components/Container';
import Button from '../components/Button/ThemeButton';
import Input from '../components/Input';
import {View} from 'react-native';
import globalStyles from '../styles/globalStyles';
import themeInputStyles from '../styles/themeInputStyles';

const ChangePassword = ({navigation}) => (
  <Container
    showHeader
    headerProps={{titleType: 'title2', title: 'Change Password'}}>
    <View style={[globalStyles.px16, globalStyles.mt16]}>
      <Input
        customlabelStyle={[globalStyles.font16, globalStyles.mb4]}
        customInputStyle={themeInputStyles.searchInputStyle}
        showLabel
        label="Current Password"
      />
      <Input
        customlabelStyle={[globalStyles.font16, globalStyles.mb4]}
        customInputStyle={themeInputStyles.searchInputStyle}
        customContainerStyle={globalStyles.mt30}
        showLabel
        label="New Password"
      />
      <Input
        customlabelStyle={[globalStyles.font16, globalStyles.mb4]}
        customInputStyle={themeInputStyles.searchInputStyle}
        customContainerStyle={globalStyles.mt30}
        showLabel
        label="Confirm new password"
      />

      <View style={[globalStyles.mt80, globalStyles.px20, globalStyles.pt40]}>
        <Button
          onPress={() =>
            navigation.navigate('Complete', {
              displayText: 'Your Password is successfully changed.',
            })
          }
          title="Update"
        />
      </View>
    </View>
  </Container>
);

export default ChangePassword;
