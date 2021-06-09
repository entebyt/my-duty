import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

const Button = ({
  title = 'Submit',
  customButtonContainer = styles.buttonContainer,
  customTitleStyle = styles.titleStyle,
  color = '#2d248a',
  loading = false,
  ...rest
}) => (
  <TouchableOpacity
    {...rest}
    style={[customButtonContainer, {backgroundColor: color, ...rest.style}]}>
    {loading ? (
      <ActivityIndicator color={color} />
    ) : (
      <Text style={customTitleStyle}>{title}</Text>
    )}
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
  },
  titleStyle: {textAlign: 'center', color: '#fff'},
});
export default Button;
