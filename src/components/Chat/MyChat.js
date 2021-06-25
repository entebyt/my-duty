import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const MyChat = ({userName, message, createdAt}) => {
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
export default MyChat;
const styles = StyleSheet.create({
  messageText: {
    fontWeight: 'bold',
    lineHeight: 20,
  },
  chatContainer: {
    alignSelf: 'flex-end',
    padding: 15,
    maxWidth: '85%',
    minWidth: '40%',
    marginBottom: 10,
    backgroundColor: '#fafafa',
    borderRadius: 8,
  },
  justifyBetween: {flexDirection: 'row', justifyContent: 'space-between'},
});
