import React from 'react';
import {Text, View} from 'react-native';
import Container from '../components/Container';
import Button from '../components/Button/ThemeButton';
import globalStyles from '../styles/globalStyles';
import themeInputStyles from '../styles/themeInputStyles';
import Input from '../components/Input';
import {SectionHeader} from './FIlters';
import CircleImage from '../components/CircleImage';
import AddIcon from '../assets/icons/add_icon.svg';
import ChevronDownBlack from '../assets/icons/chevron_down_black.svg';
const EditProfile = ({params}) => {
  const upadateProfile = () => {};
  return (
    <Container
      showHeader
      scroll
      headerProps={{title: 'Edit Profile', titleType: 'title3'}}>
      <View style={globalStyles.alignCenter}>
        <CircleImage
          background={'#EBEBEB'}
          icon={AddIcon}
          style={globalStyles.shadow}
          color={'#CACACA'}
          borderWidth={25}
          border
          size={100}
          fallback
        />
        <Text style={[globalStyles.text, globalStyles.mt30]}>User ID</Text>
      </View>
      <Input
        showLabel
        customContainerStyle={[
          themeInputStyles.primaryInputStyle,
          globalStyles.shadow,
          globalStyles.mt40,
        ]}
        minHeight={100}
        customlabelStyle={themeInputStyles.label}
        label="Bio"
      />
      <SectionHeader
        style={{marginHorizontal: 0, marginTop: 40}}
        title="Personal Information"
      />
      <Input
        showLabel
        customContainerStyle={[
          themeInputStyles.primaryInputStyle,
          globalStyles.shadow,
          globalStyles.mt40,
        ]}
        customlabelStyle={themeInputStyles.label}
        label="Name"
      />

      <Input
        showLabel
        customContainerStyle={[
          themeInputStyles.primaryInputStyle,
          globalStyles.shadow,
          globalStyles.mt40,
        ]}
        customlabelStyle={themeInputStyles.label}
        label={
          <>
            <Text>Profession</Text>
          </>
        }
      />
      <Input
        showLabel
        customContainerStyle={[
          themeInputStyles.primaryInputStyle,
          globalStyles.shadow,
          globalStyles.mt40,
        ]}
        customlabelStyle={themeInputStyles.label}
        label="Gender"
      />
      <Input
        showLabel
        customContainerStyle={[
          themeInputStyles.primaryInputStyle,
          globalStyles.shadow,
          globalStyles.mt40,
        ]}
        customlabelStyle={themeInputStyles.label}
        label="DOB"
      />
      <Input
        showLabel
        customContainerStyle={[
          themeInputStyles.primaryInputStyle,
          globalStyles.shadow,
          globalStyles.mt40,
        ]}
        customlabelStyle={themeInputStyles.label}
        label="Email Id"
      />
      <Input
        showLabel
        customContainerStyle={[
          themeInputStyles.primaryInputStyle,
          globalStyles.shadow,
          globalStyles.mt40,
        ]}
        customlabelStyle={themeInputStyles.label}
        label="Mobile Number"
      />
      <Input
        showLabel
        customContainerStyle={[
          themeInputStyles.primaryInputStyle,
          globalStyles.shadow,
          globalStyles.mt40,
        ]}
        customlabelStyle={themeInputStyles.label}
        label="Location"
      />

      <View style={[globalStyles.mt80, globalStyles.px40]}>
        <Button onPress={upadateProfile} title="Update" />
      </View>
    </Container>
  );
};

export default EditProfile;
