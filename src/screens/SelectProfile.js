import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import ArrowRight from '../assets/icons/arrow_right_2.svg';
import CircleButton from '../components/Button/CircleButton';
import colors from '../constants/colors';
import themeButtonStyles from '../styles/themeButtonStyles';
import globalStyles from '../styles/globalStyles';
import Container from '../components/Container';
import {useNavigation} from '@react-navigation/core';
import useScreenDimensions from '../components/Hooks/useScreenDimensions';
const SelectProfile = ({params}) => {
  const navigation = useNavigation();
  const {width, height} = useScreenDimensions('screen');
  const selectProfile = () => {
    navigation.navigate('Otp');
  };
  return (
    <Container showHeader>
      <View
        style={[
          globalStyles.alignCenter,
          globalStyles.container,
          globalStyles.py20,
        ]}>
        <Text style={[globalStyles.appTitle, {color: colors.textprimary}]}>
          My Duty App
        </Text>
        <Text
          style={[
            globalStyles.title,
            globalStyles.mt40,
            globalStyles.textCenter,
          ]}>
          What Are Looking For?
        </Text>
        <Text
          style={[
            globalStyles.label,
            {color: colors.textprimary, textAlign: 'center'},
            globalStyles.mt16,
          ]}>
          You can choose one of the option to continue the application
        </Text>
      </View>
      <Image
        style={[styles.background, {width, height: height / 1.65}]}
        source={require('../assets/background/background_3.png')}
      />

      <View style={styles.profileSelectContainer}>
        <ProfileSelector
          selectProfile={selectProfile}
          title="Help for Humanity"
        />
        <ProfileSelector
          selectProfile={selectProfile}
          title="Help for Humanity"
        />
        <ProfileSelector
          selectProfile={selectProfile}
          title="Spread Awareness"
        />
      </View>
    </Container>
  );
};

const ProfileSelector = ({title, selectProfile}) => (
  <TouchableOpacity style={{width: 240}} onPress={selectProfile}>
    <View
      style={[
        themeButtonStyles.themeButton,
        globalStyles.row,
        globalStyles.alignCenter,

        styles.labelContainer,
      ]}>
      <Text style={[themeButtonStyles.themeText, globalStyles.ml8]}>
        {title}
      </Text>
      <View style={{position: 'absolute', right: 0}}>
        <CircleButton
          icon={ArrowRight}
          color={colors.white}
          size={65}
          onlyIcon
          title=""
          colors={['#BE8CF8', '#945DD3']}
          border
        />
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  labelContainer: {backgroundColor: '#fff', marginTop: 28},
  profileSelectContainer: {alignItems: 'center', flex: 1},
  background: {
    position: 'absolute',
    bottom: 0,

    marginBottom: -60,
  },
});
export default SelectProfile;
