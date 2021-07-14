import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import List from '../List';
import CircleImage from '../CircleImage';
import globalStyles from '../../styles/globalStyles';
import colors from '../../constants/colors';

const data = [
  {
    user: {
      image:
        'https://imgproxy.ra.co/_/plain//images/profiles/square/leeburridge.jpg',
    },
    text: 'Oh these could be neat.',
    time: '11:14 AM',
  },
  {
    backgroundColor: '#B468FF',
    user: {
      image:
        'https://imgproxy.ra.co/_/plain//images/profiles/square/leeburridge.jpg',
    },
    text: 'It could help with anonymous ',
    time: '12:27 PM',
    replies: [
      {
        text: 'Oh these could be neat.',
        time: '01:14 AM',
        user: {
          image:
            'https://www.tollywood.net/wp-content/uploads/2021/04/Anjali-admits-her-unfortunate-relationship.jpg',
        },
      },
    ],
  },
];
const Comments = ({navigation}) => (
  <List data={data} navigation={navigation} canReply={true} listItem={Reply} />
);

const Reply = ({
  user,
  text,
  time,
  replies,
  backgroundColor,
  navigation,
  canReply,
}) => (
  <View style={{width: '70%'}}>
    <View
      style={[globalStyles.row, {alignItems: 'flex-end'}, globalStyles.mt12]}>
      <CircleImage size={32} uri={user.image} />
      <View style={[globalStyles.row, globalStyles.alignCenter]}>
        <View
          style={[
            globalStyles.py16,
            globalStyles.ml8,
            globalStyles.px16,
            styles.comment,
            {paddingRight: 30},
            backgroundColor && {backgroundColor},
          ]}>
          <Text style={[globalStyles.font12, {color: '#fff'}]}>{text}</Text>
        </View>
        <Text style={[globalStyles.ml8]}>{time}</Text>
      </View>
    </View>
    <View style={[globalStyles.ml36, globalStyles.row]}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Chat', {support: true})}>
        <Text style={[globalStyles.font12, {color: colors.textTertiary}]}>
          Contact Admin
        </Text>
      </TouchableOpacity>
      {canReply && (
        <Text
          style={[globalStyles.ml20, globalStyles.font12, {color: '#C3C1C1'}]}>
          Reply
        </Text>
      )}
    </View>
    {replies && (
      <View style={[globalStyles.ml36]}>
        <List data={replies} listItem={Reply} />
      </View>
    )}
  </View>
);
export default Comments;

const styles = StyleSheet.create({
  comment: {
    borderRadius: 24,
    borderBottomLeftRadius: 0,
    backgroundColor: '#FE8947',
  },
});
