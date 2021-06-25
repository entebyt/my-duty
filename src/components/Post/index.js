import React from 'react';
import {Text, View, ImageBackground, StyleSheet} from 'react-native';
import UserProfileBasicInfo from '../UserInfo';
import globalStyles from '../../styles/globalStyles';
import Button from '../Button';
import colors from '../../constants/colors';
import Actions from './Actions';
import {splitString} from '../../utils';
import CircleImage from '../CircleImage';
import List from '../List';
import themeButtonStyles from '../../styles/themeButtonStyles';
import {Context} from '../../utils/store';
const Post = ({
  navigation,
  postTitle = 'Oxygen for Varya',
  showAction = true,
  otherData,
}) => {
  const blockPost = () => {
    dispatch({
      type: 'modalState',
      modalState: {
        title: 'Are you sure you want to block this post?',
        visible: true,
      },
    });
  };
  const renderDescription = description =>
    // get the description and split based on string
    splitString(description).map(word => {
      if (word.startsWith('#')) {
        const searchItem = word.substring(1);
        return <Text style={styles.hasTag}>{word} </Text>;
      } else {
        return <Text>{word} </Text>;
      }
    });

  const reportPost = () => {
    dispatch({
      type: 'modalState',
      modalState: {
        title: 'Are you sure you want to report this post to admin?',
        visible: true,
      },
    });
  };
  return (
    <View>
      <View style={globalStyles.px8}>
        <UserProfileBasicInfo
          otherData={otherData}
          profileNameStyle={{}}
          navigation={navigation}
          showStatus
          status="Active"
          userData={{name: 'Pieroborgo', about: 'Florence, Italy'}}
        />
        <View>
          <View style={[{position: 'absolute', right: 10}]}>
            <Button
              color="#fafafa"
              customTitleStyle={styles.blockButtonTitle}
              customButtonContainer={styles.blockButton}
              onPress={blockPost}
              title="Block"
            />
          </View>
          <ImageBackground
            style={styles.postImage}
            source={require('../../assets/images/post_image.png')}>
            <View
              style={[globalStyles.row, globalStyles.px16, globalStyles.py16]}>
              <List
                listItem={Label}
                data={[{text: '#Children'}, {text: 'Active'}]}
              />
            </View>
          </ImageBackground>
        </View>
        <View style={[globalStyles.px16, globalStyles.mt16]}>
          <View style={[globalStyles.row, globalStyles.spaceBetween]}>
            <Text style={[globalStyles.text, {color: colors.tertiary}]}>
              {postTitle}
            </Text>
            {showAction && (
              <Button
                customTitleStyle={[
                  themeButtonStyles.buttonTitle,
                  globalStyles.bold,
                ]}
                style={{borderRadius: 10}}
                color={colors.inputBorder}
                title="Donate Now"
              />
            )}
          </View>
          <Text style={[globalStyles.mt8, {color: '#6D7E92', lineHeight: 20}]}>
            To breathe and live at home, Vara urgently needs medical equipment.
          </Text>
          <Actions reportPost={reportPost} />
          <View style={[globalStyles.row, globalStyles.alignCenter]}>
            <List
              data={[
                {
                  uri:
                    'https://imgproxy.ra.co/_/plain//images/profiles/square/leeburridge.jpg',
                },
                {
                  uri:
                    'https://static.billboard.com/files/media/Lee-Burridge-lost-desert-2016-billboard-1548-compressed.jpg',
                },
                {
                  uri:
                    'https://static.wikia.nocookie.net/ironthronerp/images/3/31/HowlandReed.png/revision/latest?cb=20150814031742',
                },
              ]}
              listItem={CircleImage}
              style={{marginRight: -4}}
              size={15}
              border
              color={colors.white}
            />

            <Text style={globalStyles.ml8}>
              Raised Hand by leeviahq and others
            </Text>
          </View>
          <Text>
            {renderDescription(
              'pieroborgo Help this child ❤️ #helper #Ngo #help',
            )}
          </Text>
        </View>
      </View>
    </View>
  );
};
const Label = ({text, index}) => (
  <View style={[styles.label, index !== 0 && globalStyles.ml8]}>
    <Text style={[globalStyles.font12, {color: colors.white}]}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  postImage: {
    width: '100%',
    height: 240,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    overflow: 'hidden',
  },
  label: {
    padding: 12,
    borderRadius: 4,
    backgroundColor: 'rgba(0, 5, 21, 0.24)',
  },
  blockButton: {
    paddingHorizontal: 15,
    paddingVertical: 13,
    marginTop: -20,
    zIndex: 2,
    borderRadius: 10,
  },
  blockButtonTitle: {color: colors.tertiary, fontSize: 9},
  hasTag: {
    color: '#3998f3',
  },
});
export default Post;
