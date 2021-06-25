import React from 'react';
import Container from '../components/Container';
import List from '../components/List';
import Post from '../components/Post';
import ProfileCard from '../components/ProfileCard';
import globalStyles from '../styles/globalStyles';
import FilterList from '../components/Filters/FilterList';
import RecentSearch from '../components/Filters/RecentSearch';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import useScreenDimensions from '../components/Hooks/useScreenDimensions';
import Input from '../components/Input';
import SearchIcon from '../assets/icons/search_icon.svg';
import colors from '../constants/colors';
import themeInputStyles from '../styles/themeInputStyles';
import Filter from '../assets/icons/filter.svg';
const Search = ({navigation}) => {
  const [showResults, setShowResults] = React.useState(false);
  const [searchType, setsearchType] = React.useState('Post');
  const [query, setQuery] = React.useState('');
  const [activeFilters, setActiveFilters] = React.useState([
    {label: 'High Alert'},
  ]);
  const [listData, setListData] = React.useState([
    {
      src:
        'https://yt3.ggpht.com/ytc/AAUvwng2LF32FMXRVdlCJMizl2cBt7vYAG78ZOPQW_zWedc=s900-c-k-c0x00ffffff-no-rj',
      name: 'Dr. Raj Ariyan',
      title: 'Helper',
      label: 'Helper',
      type: 'Doctor',
      location: 'Kolkata',
      rating: 4.9,
      type: 'Helper',
    },
    {
      src:
        'https://lsom.uthscsa.edu/neurosurgery/wp-content/uploads/sites/140/2018/07/Vaidehi-Mahadev-resize.jpg',
      name: 'Dr. Kajol Kumari',
      title: 'Needy',
      label: 'Help Seeker',
      type: 'Doctor',
      location: 'Kolkata',
      rating: 4.9,
      type: 'Helper',
    },
  ]);
  const searchListItem = {Post: Post, Profile: ProfileCard};
  const {height} = useScreenDimensions('screen');
  const search = () => {
    if (query === 'Helper' || query === 'Needy') {
      setsearchType('Profile');
    } else {
      setsearchType('Post');
    }
  };
  return (
    <Container
      showHeader
      scroll
      contentContainerStyle={[
        globalStyles.p0,
        globalStyles.pt8,
        globalStyles.pb20,
      ]}
      headerProps={{titleType: 'title2', title: 'Search'}}>
      <View
        style={[
          globalStyles.row,
          globalStyles.spaceBetween,
          globalStyles.alignCenter,
          globalStyles.px24,
        ]}>
        <Input
          onSubmitEditing={search}
          onChangeText={text => setQuery(text)}
          icon={SearchIcon}
          customInputStyle={themeInputStyles.searchInputStyle}
          customContainerStyle={[globalStyles.flex1, globalStyles.mr24]}
          placeholder="Search For Needy / Helper"
          placeholderTextColor={colors.tertiary}
        />
        <View style={[styles.iconContainer, globalStyles.shadow]}>
          <TouchableOpacity onPress={() => navigation.navigate('Filters')}>
            <Filter />
          </TouchableOpacity>
        </View>
      </View>
      {showResults ? (
        <>
          <View style={[globalStyles.px24, globalStyles.mt20]}>
            <FilterList selectedFilters={activeFilters} />
          </View>
          <List data={listData} listItem={searchListItem[searchType]} />
        </>
      ) : (
        <View style={[{minHeight: height}]}>
          <View style={[globalStyles.px24, globalStyles.my16]}>
            <FilterList selectedFilters={activeFilters} />
          </View>
          <View style={[globalStyles.px24, styles.recentSearchContainer]}>
            <RecentSearch onPress={() => setShowResults(true)} />
          </View>
        </View>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  recentSearchContainer: {
    borderTopWidth: 1,
    borderTopColor: '#DADFE6',
    paddingTop: 8,
  },
  iconContainer: {
    height: 56,
    width: 56,
    borderRadius: 28,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Search;
