import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import globalStyles from '../styles/globalStyles';
import MoreIcon from '../assets/icons/more.svg';
const UserProfileBasicInfo = ({
  navigation,
  userData = {},
  avatarSize = 32,
  profileNameStyle,
  showStatus,
  status,
  otherData = {},
}) => {
  const [user, setUser] = React.useState(userData);
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
    profileContent: {flexDirection: 'row', flex: 1},
    profileContainer: {marginVertical: 14, flex: 1},
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
  });
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        click
          ? click(id)
          : navigation.navigate(`Profile`, {
              profileId: profileId ? profileId : id,
              myProfile: false,
              ...otherData,
            })
      }
      style={styles.profileContainer}>
      <View style={styles.profileContent}>
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
        <View style={{alignSelf: 'center', marginBottom: 8}}>
          <MoreIcon />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default UserProfileBasicInfo;
