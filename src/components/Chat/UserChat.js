import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native-web';
const UserChat = ({userName, message, createdAt}) => {
  return (
    <View style={styles.chatContainer}>
      <Text style={styles.messageText}>{message}</Text>
      <View style={styles.justifyBetween}>
        <Text></Text>
        <Text>{createdAt}</Text>
      </View>
    </View>
  );
};
export default UserChat;
const styles = StyleSheet.create({
  messageText: {
    fontWeight: 'bold',
  },
  chatContainer: {
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
    maxWidth: '85%',
    minWidth: '40%',
    borderRadius: 8,
  },
  justifyBetween: {flexDirection: 'row', justifyContent: 'space-between'},
});
