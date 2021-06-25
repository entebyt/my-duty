/* This module is developed by Dhruv Sachdeva 
`  Github - https://github.com/entebyt/
*/
import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import CheckMarkIcon from '../../assets/icons/checkmark.svg';
import CheckMarkIcon2 from '../../assets/icons/checkmark_2.svg';
const CheckBox = ({
  customContainer = styles.container,
  onPress,
  style,
  size = 15,
  color = {checked: '#5050FF', blur: '#5d5d5d'},
  type,
  ...rest
}) => {
  const [isChecked, setCheckStatus] = React.useState(false);
  return (
    <TouchableOpacity
      style={[
        customContainer,
        {
          borderColor: isChecked ? color.checked : color.blur,
          ...style,
          height: size,
          width: size,
        },
      ]}
      onPress={() => {
        onPress && onPress(!isChecked);
        setCheckStatus(!isChecked);
      }}
      {...rest}>
      {isChecked ? (
        type ? (
          <CheckMarkIcon2
            height={size - 10}
            width={size - 10}
            fill={color.checked}
          />
        ) : (
          <CheckMarkIcon
            height={size - 10}
            width={size - 10}
            fill={color.checked}
          />
        )
      ) : (
        <View style={{height: size, width: size}} />
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default CheckBox;