import * as React from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

// import {IoIosSend} from 'react-icons/io';

const ChatInputPanel = ({onMessageSend}) => {
  const [message, setMessage] = React.useState('');
  const sendMessageHandler = () => {
    onMessageSend(message);
    setMessage('');
  };
  return (
    <View style={styles.inputPanelContainer}>
      <TextInput
        multiline={true}
        style={{flex: 1, marginRight: 10}}
        value={message}
        onChangeText={text => setMessage(text)}
        placeholder="Type your message..."
      />

      <TouchableOpacity onPress={sendMessageHandler}>
        {/* <IoIosSend size={24} name="ios-send" /> */}
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  inputPanelContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    margin: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    flexDirection: 'row',
  },
});
export default ChatInputPanel;
