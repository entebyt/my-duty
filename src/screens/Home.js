import React from 'react';
import {Text, View, StyleSheet, ImageBackground, Modal} from 'react-native';
import Container from '../components/Container';
import globalStyles from '../styles/globalStyles';
import colors from '../constants/colors';
import Menu from '../assets/icons/menu.svg';
import Filter from '../assets/icons/filter.svg';
import Input from '../components/Input';
import themeInputStyles from '../styles/themeInputStyles';
import SearchIcon from '../assets/icons/search_icon.svg';
import Post from '../components/Post';
import List from '../components/List';
import {TouchableOpacity} from 'react-native-gesture-handler';
const Home = ({navigation}) => {
  return (
    <Container
      showFooter
      scroll
      contentContainerStyle={{padding: 0, paddingTop: 20}}>
      <View style={globalStyles.px20}>
        <View
          style={[
            globalStyles.row,
            globalStyles.spaceBetween,
            globalStyles.alignCenter,
          ]}>
          <Text
            style={[
              globalStyles.title,
              globalStyles.px20,
              {color: colors.tertiary},
            ]}>
            My Duty App
          </Text>
          <View style={[styles.iconContainer, globalStyles.shadow]}>
            <TouchableOpacity onPress={() => navigation.navigate('Sidebar')}>
              <Menu />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={[
            globalStyles.row,
            globalStyles.spaceBetween,
            globalStyles.alignCenter,
            globalStyles.mt20,
          ]}>
          <Input
            onFocus={() => navigation.navigate('Search')}
            icon={SearchIcon}
            customInputStyle={themeInputStyles.searchInputStyle}
            customContainerStyle={[globalStyles.flex1, globalStyles.mr24]}
            placeholder="Search For Profile/Post"
            placeholderTextColor={colors.tertiary}
          />
          <View style={[styles.iconContainer, globalStyles.shadow]}>
            <TouchableOpacity onPress={() => navigation.navigate('Filters')}>
              <Filter />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[globalStyles.row, globalStyles.mt24]}>
          <Text style={[globalStyles.font15, {color: colors.tertiary}]}>
            Refresh
          </Text>
          <Text
            style={[
              globalStyles.font15,
              {color: colors.gray},
              globalStyles.ml16,
            ]}>
            Updated 0 min
          </Text>
        </View>
      </View>
      <List
        type="flat"
        listItem={Post}
        block
        contentContainerStyle={globalStyles.listBottom}
        navigation={navigation}
        data={[
          {},
          {myPost: true, otherData: {type: 'Helper', profileType: true}},
        ]}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    height: 56,
    width: 56,
    borderRadius: 28,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Home;
