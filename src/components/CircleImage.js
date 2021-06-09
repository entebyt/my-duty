import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
const CircleImage = ({
  size = 70,
  uri = '',
  border = false,
  color = 'red',
  local = false,
  custom = false,
  style = {},
  fallback = false,
  background = '',
  icon: Icon = null,
  iconHeight,
}) => {
  const styles = StyleSheet.create({
    container: {
      height: size,
      justifyContent: 'center',
      borderWidth: (border && 1) || 0,
      borderColor: color,
      alignItems: 'center',
      width: size, //The Width must be the same as the height
      borderRadius: size / 2, //Then Make the Border Radius twice the size of width or Height
      backgroundColor: background ? background : '#fafafa',
    },
  });
  if (!uri && fallback)
    return (
      <View style={[custom ? style : styles.container, {...style}]}>
        {Icon && <Icon height={iconHeight || '24'} />}
      </View>
    );
  return (
    <Image
      style={[custom ? style : styles.container, {...style}]}
      source={uri ? {uri} : {uri: ''}}
    />
  );
};

export default CircleImage;
