import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import Container from '../components/Container';
import globalStyles from '../styles/globalStyles';
import colors from '../constants/colors';
import Input from '../components/Input';
import themeInputStyles from '../styles/themeInputStyles';
import CircleImage from '../components/CircleImage';
import AddIcon from '../assets/icons/add_icon.svg';
import ChevronDown from '../assets/icons/chevron_down_small.svg';
import ChevronRight from '../assets/icons/chevron_right.svg';
import {Bar} from 'react-native-progress';
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import useScreenDimensions from '../components/Hooks/useScreenDimensions';
import {SectionHeader} from './FIlters';
import ThemeCheckbox from '../components/Checkbox/ThemeCheckbox';
import Button from '../components/Button/ThemeButton';
const NewPost = ({navigation}) => {
  const {width} = useScreenDimensions('screen');
  return (
    <Container
      scroll
      showHeader
      headerProps={{
        title: 'New Post',
        titleType: 'title3',
      }}>
      <View style={[globalStyles.row]}>
        <View style={[styles.imageContainer, globalStyles.shadow]}>
          <CircleImage
            background={'#EBEBEB'}
            icon={AddIcon}
            size={50}
            fallback
          />
        </View>
        <Input
          customInputStyle={{}}
          style={[globalStyles.ml20, globalStyles.flex1]}
          customContainerStyle={[
            themeInputStyles.primaryInputStyle,
            globalStyles.shadow,
            globalStyles.ml12,
            globalStyles.flex1,
          ]}
          minHeight={80}
          placeholder="Write a caption..."
        />
      </View>
      <Text
        style={[
          globalStyles.font16,
          globalStyles.mt16,
          {color: colors.textprimary},
        ]}>
        Upload Post
      </Text>
      <Input
        style={[globalStyles.ml20, globalStyles.flex1]}
        showLabel
        customContainerStyle={[
          themeInputStyles.primaryInputStyle,
          globalStyles.shadow,
          globalStyles.mt16,
        ]}
        customlabelStyle={themeInputStyles.label}
        label="Add Title"
      />
      <Section
        style={globalStyles.mt20}
        title="Tag People"
        onPress={() => navigation.navigate('Tag People')}
        icon={ChevronRight}
      />
      <Section style={globalStyles.mt30} title="Add Hashtag" />
      <Section
        style={globalStyles.mt30}
        icon={ChevronRight}
        onPress={() => navigation.navigate('Add Location')}
        title="Add location"
      />
      <Labels
        labels={[
          {label: 'Milan'},
          {label: 'Duomo di Milano'},
          {label: 'Piazza Cordusio'},
        ]}
      />
      <Section
        style={globalStyles.mt40}
        icon={ChevronDown}
        title="Add Fundraiser"
      />
      <View
        style={[
          globalStyles.row,
          globalStyles.spaceBetween,
          globalStyles.mt16,
        ]}>
        <Text
          style={[globalStyles.font16, globalStyles.bold, {color: '#943993'}]}>
          0
        </Text>
        <Text
          style={[globalStyles.font16, globalStyles.bold, {color: '#073C7A'}]}>
          12000
        </Text>
      </View>
      <View style={globalStyles.mt12}>
        <Bar
          progress={0.3}
          width={width - 40}
          color={'#458AE5'}
          unfilledColor={'#E3F0FC'}
        />
      </View>
      <Section
        style={globalStyles.mt40}
        icon={ChevronDown}
        title="Add Crowdfunding"
      />
      <View
        style={[
          globalStyles.row,
          globalStyles.spaceBetween,
          globalStyles.mt16,
        ]}>
        <Text
          style={[globalStyles.font16, globalStyles.bold, {color: '#943993'}]}>
          0
        </Text>
        <Text
          style={[globalStyles.font16, globalStyles.bold, {color: '#073C7A'}]}>
          12000
        </Text>
      </View>
      <View style={globalStyles.mt12}>
        <Bar
          progress={0.3}
          width={width - 40}
          color={'#458AE5'}
          unfilledColor={'#E3F0FC'}
        />
      </View>
      <TouchableOpacity>
        <View
          style={[
            globalStyles.row,
            globalStyles.justifyEnd,
            globalStyles.mt12,
          ]}>
          <Text style={[styles.terms, {marginTop: 0}]}>Terms & Conditions</Text>
        </View>
      </TouchableOpacity>
      <Input
        style={[globalStyles.ml20, globalStyles.flex1]}
        showLabel
        customContainerStyle={[
          themeInputStyles.primaryInputStyle,
          globalStyles.shadow,
          globalStyles.mt24,
        ]}
        minHeight={80}
        customlabelStyle={themeInputStyles.label}
        label="Reason for Crowdfunding"
      />
      <SectionHeader
        title="Add Category"
        style={{marginHorizontal: 0, marginTop: 50}}
      />
      <View style={globalStyles.mt16}>
        <ThemeCheckbox style={styles.checkbox} title={'Category 1'} />
      </View>
      <View style={globalStyles.mt16}>
        <ThemeCheckbox style={styles.checkbox} title={'Category 2'} />
      </View>
      <View style={globalStyles.mt16}>
        <ThemeCheckbox style={styles.checkbox} title={'Category 3'} />
      </View>
      <View style={globalStyles.mt16}>
        <ThemeCheckbox style={styles.checkbox} title={'Category 4'} />
      </View>
      <View style={globalStyles.mt16}>
        <ThemeCheckbox style={styles.checkbox} title={'Category 5'} />
      </View>
      <View style={globalStyles.mt16}>
        <ThemeCheckbox style={styles.checkbox} title={'Category 6'} />
      </View>

      <View style={[globalStyles.mt16, globalStyles.px20]}>
        <Button title="Post" />
      </View>
    </Container>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: '#CACACA',
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelContainer: {
    padding: 5,
    backgroundColor: '#F1F1F1',
    borderRadius: 5,
    marginTop: 8,
  },
  terms: {
    color: '#AB94C7',
    fontSize: 15,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderColor: '#AB94C7',
  },
  checkbox: {marginHorizontal: -20},
});
const Section = ({title, style, onPress, icon: Icon}) => (
  <TouchableWithoutFeedback
    style={[
      globalStyles.row,
      globalStyles.alignCenter,
      globalStyles.spaceBetween,
      style,
    ]}
    onPress={onPress && onPress}>
    <Text style={globalStyles.font15}>{title}</Text>
    {Icon && <Icon height={12} />}
  </TouchableWithoutFeedback>
);

export const Labels = ({labels}) => (
  <View style={[globalStyles.row, {marginVertical: 16}]}>
    <FlatList
      horizontal
      data={labels}
      renderItem={({item, index}) => <Label item={item} index={index} />}
    />
  </View>
);
export const Label = ({item, index, vertical, onPress}) => (
  <TouchableWithoutFeedback
    onPress={onPress}
    style={[
      styles.labelContainer,
      !vertical ? {marginLeft: !index ? 0 : 12} : {marginTop: !index ? 8 : 32},
    ]}>
    <Text>{item.label}</Text>
  </TouchableWithoutFeedback>
);
export default NewPost;
