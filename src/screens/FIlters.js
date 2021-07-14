import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Container from '../components/Container';
import globalStyles from '../styles/globalStyles';
import SearchIcon from '../assets/icons/search_icon.svg';
import themeInputStyles from '../styles/themeInputStyles';
import colors from '../constants/colors';
import Input from '../components/Input';
import Filter from '../assets/icons/filter.svg';
import Horizontal from '../assets/icons/horizontal.svg';
import Vertical from '../assets/icons/vertical.svg';
import Button from '../components/Button';
import ThemeCheckbox from '../components/Checkbox/ThemeCheckbox';
import ChevronDownIcon from '../assets/icons/chevron_down.svg';
import FolderIcon1 from '../assets/icons/folder_1.svg';
import FolderIcon2 from '../assets/icons/folder_2.svg';
import FolderIcon3 from '../assets/icons/folder_3.svg';
import FolderIcon4 from '../assets/icons/folder_4.svg';
import List from '../components/List';
import CheckBox from '../components/Checkbox';
import useScreenDimensions from '../components/Hooks/useScreenDimensions';
import Post from '../components/Post';
import FilterList from '../components/Filters/FilterList';
import ArrowRight from '../assets/icons/arrow_right_3.svg';
const Filters = ({navigation}) => {
  const [showFilters, setShowType] = React.useState(true);
  const showResults = () => setShowType(false);
  const getFilters = () => {
    showResults();
  };
  return (
    <Container
      headerProps={{
        titleType: 'title2',
        title: 'Filters',
      }}
      scroll
      contentContainerStyle={[
        globalStyles.p0,
        globalStyles.pt8,
        globalStyles.pb20,
      ]}
      showHeader>
      <View
        style={[
          globalStyles.row,
          globalStyles.spaceBetween,
          globalStyles.alignCenter,
          globalStyles.px24,
        ]}>
        <Input
          icon={SearchIcon}
          customInputStyle={themeInputStyles.searchInputStyle}
          customContainerStyle={[globalStyles.flex1, globalStyles.mr24]}
          placeholder="Search For Profile/Post"
          placeholderTextColor={colors.tertiary}
        />
        <View style={[styles.iconContainer, globalStyles.shadow]}>
          <TouchableOpacity onPress={() => setShowType(true)}>
            <Filter />
          </TouchableOpacity>
        </View>
      </View>
      {showFilters ? (
        <>
          <View
            style={[
              globalStyles.row,
              globalStyles.spaceBetween,
              globalStyles.px24,
              globalStyles.mt24,
            ]}>
            <View style={[globalStyles.row, globalStyles.alignEnd]}>
              <Text style={[globalStyles.mr24, {color: colors.tertiary}]}>
                Filters
              </Text>
              <Text style={{color: '#945DD3'}}>Сancel</Text>
            </View>

            <View style={[globalStyles.row, globalStyles.alignEnd]}>
              <View style={globalStyles.mr24}>
                <Vertical />
              </View>
              <Horizontal />
            </View>
          </View>

          <View style={globalStyles.mt30}>
            <SectionHeader title="Profile" />
            <View style={globalStyles.mt8}>
              <ThemeCheckbox title="Helper" />
            </View>
            <View style={globalStyles.mt8}>
              <ThemeCheckbox title="Needy" />
            </View>
            <View style={globalStyles.mt8}>
              <ThemeCheckbox title="Awarness Creator" />
            </View>
          </View>
          <View style={globalStyles.mt20}>
            <SectionHeader title="Status" />

            <View style={globalStyles.mt8}>
              <ThemeCheckbox title="Active" status={'Active'} />
            </View>
            <View style={globalStyles.mt8}>
              <ThemeCheckbox title="Pending" status={'Pending'} />
            </View>
            <View style={globalStyles.mt8}>
              <ThemeCheckbox title="Completed" status={'Completed'} />
            </View>
          </View>
          <View
            style={[
              globalStyles.row,
              globalStyles.px24,
              globalStyles.flexWrap,
            ]}>
            <List data={otherFiltersData} listItem={OtherFilters} />
          </View>
          <View
            style={[
              globalStyles.row,
              globalStyles.px24,
              globalStyles.mt24,
              globalStyles.spaceBetween,
            ]}>
            <Button
              style={styles.resetButton}
              customTitleStyle={[
                globalStyles.textCenter,
                {color: '#A66AEB', fontSize: 16},
              ]}
              color="#EFE0FF"
              title="Reset"
              onPress={showResults}
            />
            <Button
              style={styles.applyButton}
              customTitleStyle={[
                globalStyles.mr12,
                {fontSize: 16, color: colors.white},
                globalStyles.textCenter,
              ]}
              showIcon
              showType={'after'}
              icon={ArrowRight}
              color="#A66AEB"
              title="Apply"
              onPress={getFilters}
            />
          </View>
        </>
      ) : (
        <View>
          <View style={[globalStyles.px24, globalStyles.mt20]}>
            <FilterList />
          </View>
          <List
            block
            type="flat"
            listItem={Post}
            navigation={navigation}
            data={[{}, {}]}
          />
        </View>
      )}
    </Container>
  );
};
export const SectionHeader = ({title, style}) => (
  <View
    style={[
      globalStyles.row,
      globalStyles.spaceBetween,
      globalStyles.px20,
      globalStyles.py24,
      globalStyles.mx20,
      globalStyles.shadow,
      {backgroundColor: colors.inputBorder, borderRadius: 10, ...style},
    ]}>
    <Text
      style={[globalStyles.bold, globalStyles.font18, {color: colors.white}]}>
      {title}
    </Text>
    <ChevronDownIcon />
  </View>
);

const otherFiltersData = [
  {type: 'type1', Icon: FolderIcon1, title: 'Need Help'},
  {type: 'type2', Icon: FolderIcon2, title: 'Awareness For Media'},
  {type: 'type4', Icon: FolderIcon4, title: 'High Alert'},
  {type: 'type3', Icon: FolderIcon3, title: 'My Post'},
  {type: 'type1', Icon: FolderIcon1, title: 'General Feeds'},
  {type: 'type2', Icon: FolderIcon2, title: 'NGO Feeds'},
  {type: 'type4', Icon: FolderIcon4, title: 'Charity'},
  {type: 'type3', Icon: FolderIcon3, title: 'Trust'},
  {type: 'type1', Icon: FolderIcon1, title: 'Orphanage'},
  {type: 'type2', Icon: FolderIcon2, title: 'Oldage Home'},
];

const OtherFilters = ({
  background,
  index,
  type = 'type1',
  color,
  Icon,
  title,
}) => {
  const {width} = useScreenDimensions('screen');
  const types = {
    type1: {color: '#415EB6', background: '#EEF7FE', icon: FolderIcon1},
    type2: {color: '#FFB110', background: '#FFFBEC', icon: FolderIcon2},
    type3: {color: '#34DEDE', background: '#F0FFFF', icon: FolderIcon3},
    type4: {color: '#F45656', background: '#FEEEEE', icon: FolderIcon4},
  };

  return (
    <View
      style={[
        globalStyles.px24,

        {
          width: (width - 20 - 24 * 2) / 2,
          marginVertical: 10,
          marginLeft: index % 2 != 0 ? 10 : 0,
          marginRight: index % 2 === 0 ? 10 : 0,
          height: 108,
          borderRadius: 20,

          backgroundColor: types[type].background,
        },
      ]}>
      <View style={[globalStyles.alignEnd, globalStyles.mt8]}>
        <CheckBox
          type
          size={18}
          style={{borderColor: colors.textTertiary, borderRadius: 4}}
        />
      </View>
      <View
        style={[
          globalStyles.justifyCenter,
          globalStyles.flex1,
          globalStyles.alignCenter,
        ]}>
        <Icon />
        <Text
          style={[
            globalStyles.font15,
            globalStyles.mt8,
            globalStyles.textCenter,
            {color: types[type].color},
          ]}>
          {title}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  resetButton: {paddingVertical: 14, paddingHorizontal: 40},
  iconContainer: {
    height: 56,
    width: 56,
    borderRadius: 28,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  applyButton: {flex: 1, paddingVertical: 14, marginLeft: 12},
});

export default Filters;
