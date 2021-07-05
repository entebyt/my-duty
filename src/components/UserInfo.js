import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import globalStyles from '../styles/globalStyles';
import MoreIcon from '../assets/icons/more.svg';
import {Option} from './Profile/ProfileCard';
import List from './List';
const UserProfileBasicInfo = ({
  navigation,
  userData = {},
  avatarSize = 32,
  profileNameStyle,
  showStatus,
  status,
  otherData = {},
  action,
  options,
}) => {
  const [user, setUser] = React.useState(userData);
  const [showOptions, setShowOptions] = React.useState(false);
  React.useEffect(() => {
    const fetchData = async () => {};
    fetchData();
  }, []);
  const {
    profileImage = '',
    profileId = '',
    name = '',
    about = '',
    id = '',
    click = null,
  } = user;
  const styles = StyleSheet.create({
    profileContainer: {
      flexDirection: 'row',
      marginVertical: 14,
      justifyContent: 'space-between',
      alignItems: 'center',
      flex: 1,
    },
    profileIcon: {
      height: avatarSize,
      width: avatarSize,
      borderRadius: avatarSize / 2,
      backgroundColor: '#ebebeb',
    },
    profileLeftContainer: {marginLeft: 12, flex: 1},
    profileName: profileNameStyle || {fontSize: 17},
    profileTitle: {
      fontSize: 12,
      marginTop: 2,
    },
    status: {
      height: 9,
      width: 9,
      borderRadius: 5,
      backgroundColor: status === 'Active' ? '#028D07' : '#F5190B',
    },
    optionsContainer: {
      position: 'absolute',
      borderRadius: 10,
      top: 36,
      padding: 15,
      right: 20,
      backgroundColor: '#FAFAFA',
    },
  });
  return (
    <View style={styles.profileContainer}>
      <TouchableWithoutFeedback
        onPress={() =>
          click
            ? click(id)
            : navigation.navigate(`Profile`, {
                profileId: profileId ? profileId : id,
                myProfile: false,
                ...otherData,
              })
        }>
        <View style={[globalStyles.row, {width: 300}]}>
          <Image
            style={styles.profileIcon}
            source={
              profileImage
                ? {
                    uri: profileImage,
                  }
                : require('../assets/images/avatar.png')
            }
          />

          <View style={styles.profileLeftContainer}>
            <View style={globalStyles.row}>
              <Text style={styles.profileName}>{name}</Text>
              {showStatus && (
                <Text style={globalStyles.ml8}>
                  {status}
                  {'  '}
                  <View style={styles.status} />
                </Text>
              )}
            </View>
            <Text style={styles.profileTitle}>{about}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <TouchableOpacity
        onPress={action ? action : () => setShowOptions(!showOptions)}
        style={[globalStyles.px16, globalStyles.py10]}>
        <MoreIcon />
      </TouchableOpacity>
      {showOptions && (
        <View style={[globalStyles.shadow, styles.optionsContainer]}>
          <List listItem={Option} data={options} />
        </View>
      )}
    </View>
  );
};

export default UserProfileBasicInfo;
