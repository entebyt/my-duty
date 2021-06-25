import React from 'react';
import Container from '../components/Container';
import Button from '../components/Button/ThemeButton';
import Input from '../components/Input';

const ChangePassword = ({navigation}) => (
  <Container showHeader>
    <Input showLabel label="Current Password" />
    <Input showLabel label="New Password" />
    <Input showLabel label="Confirm new password" />
    <Button
      onPress={() =>
        navigation.navigate('Complete', {
          displayText: 'Your Password is successfully changed.',
        })
      }
      title="Update"
    />
  </Container>
);

export default ChangePassword;
