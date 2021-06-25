/* This module is developed by Dhruv Sachdeva 
`  Github - https://github.com/entebyt/
*/
import * as React from 'react';
import {View, Text, StyleSheet, Modal} from 'react-native';
const BottomModal = ({visible, toggleModal, children}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContentContainer}>
          <View style={styles.modalCloseIconContainer}>
            <Icon
              onPress={() => toggleModal(false)}
              style={{fontSize: 20}}
              name="close"
              type="AntDesign"
            />
          </View>
          {children}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  modalContentContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalCloseIconContainer: {paddingVertical: 10, alignItems: 'flex-end'},
});
export default BottomModal;
