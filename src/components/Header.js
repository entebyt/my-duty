import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import colors from '../constants/colors';
import {useNavigation} from '@react-navigation/native';
import globalStyles from '../styles/globalStyles';
import ChevronIcon from '../assets/icons/chevron_left.svg';
import CircleImage from './CircleImage';
const Header = ({title, headerStyle}) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.headerContainer, headerStyle]}>
      <View style={globalStyles.flex1} onPress={() => navigation.goBack()}>
        <CircleImage
          fallback
          style={globalStyles.shadow}
          icon={ChevronIcon}
          background={colors.white}
          size={40}
        />
      </View>

      <View>
        <Text style={globalStyles.title}>{title}</Text>
      </View>

      <View style={[globalStyles.row, globalStyles.flex1]}>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          {/* <Image
            resizeMode="contain"
            style={{width: 20}}
            source={require('../images/icons/search.png')}
          /> */}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          {/* <Image
            resizeMode="contain"
            style={{width: 20, marginLeft: 16}}
            source={require('../images/icons/profile.png')}
          /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    zIndex: 2,
    height: 60,
  },
});
