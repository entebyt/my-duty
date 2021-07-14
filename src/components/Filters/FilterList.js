import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import globalStyles from '../../styles/globalStyles';
import List from '../List';
import colors from '../../constants/colors';
const data = [
  {label: 'High Alert'},
  {label: 'Child'},
  {label: 'NGO'},
  {label: 'Help'},
];
const FilterList = ({selectedFilters = data, component: Component}) => {
  return (
    <View
      style={[
        globalStyles.row,
        globalStyles.alignCenter,
        globalStyles.spaceBetween,
      ]}>
      <List
        type="flat"
        horizontal
        data={selectedFilters}
        listItem={Component ? Component : Label}
      />
      <Text style={[globalStyles.font16, globalStyles.ml24]}>Reset</Text>
    </View>
  );
};

const Label = ({label, index, onPress}) => (
  <TouchableOpacity
    activeOpacity={1}
    onPress={onPress}
    style={[styles.pill, {marginLeft: index ? 8 : 0}]}>
    <Text style={[globalStyles.font12, {color: colors.white}]}>{label}</Text>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  pill: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: '#A66AEB',
    borderRadius: 8,
  },
});
export default FilterList;
