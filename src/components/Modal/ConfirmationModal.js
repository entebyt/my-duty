import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ReactNativeModal from '.';
import colors from '../../constants/colors';
import globalStyles from '../../styles/globalStyles';
import Button from '../Button';

const ConfirmationModal = ({title, visible, toggleModal}) => (
  <ReactNativeModal visible={visible}>
    <Text style={styles.title}>{title}</Text>
    <View
      style={[globalStyles.mt40, globalStyles.row, globalStyles.justifyCenter]}>
      <Button
        customTitleStyle={[globalStyles.font15, globalStyles.textCenter]}
        customButtonContainer={[styles.actionButton, globalStyles.shadow]}
        color={colors.white}
        onPress={toggleModal}
        title="Yes"
      />
      <Button
        customTitleStyle={[globalStyles.font15, globalStyles.textCenter]}
        customButtonContainer={[
          styles.actionButton,
          globalStyles.shadow,
          globalStyles.ml16,
          styles.cancelButton,
        ]}
        onPress={toggleModal}
        color={colors.white}
        title="No"
      />
    </View>
  </ReactNativeModal>
);
const styles = StyleSheet.create({
  title: {fontSize: 17, color: colors.textprimary},
  cancelButton: {borderWidth: 1, borderColor: '#943993'},
  actionButton: {paddingVertical: 16, paddingHorizontal: 42, borderRadius: 10},
});

export default ConfirmationModal;
