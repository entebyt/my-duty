import React from 'react';
import {Text, View} from 'react-native';
import Input from '../Input';
import themeInputStyles from '../../styles/themeInputStyles';
import globalStyles from '../../styles/globalStyles';
import CheckBox from '../Checkbox';
import colors from '../../constants/colors';

const CardForm = ({params}) => (
  <View>
    <View
      style={[
        globalStyles.px20,
        globalStyles.py16,
        globalStyles.shadow,
        globalStyles.pt4,

        globalStyles.mt40,
        globalStyles.whiteBackground,
        {borderRadius: 10},
      ]}>
      <Input
        customContainerStyle={[
          themeInputStyles.primaryInputStyle,

          {borderLeftWidth: 0},
        ]}
        customlabelStyle={[themeInputStyles.label, {marginLeft: 0}]}
        showLabel
        label="Card Number"
        placeholder={'XXXX - XXXX - XXXX - XXXX'}
      />
    </View>
    <View
      style={[
        globalStyles.px20,
        globalStyles.py16,
        globalStyles.shadow,
        globalStyles.pt4,

        globalStyles.mt40,
        globalStyles.whiteBackground,
        {borderRadius: 10},
      ]}>
      <Input
        customContainerStyle={[
          themeInputStyles.primaryInputStyle,

          {borderLeftWidth: 0},
        ]}
        customlabelStyle={[themeInputStyles.label, {marginLeft: 0}]}
        showLabel
        label="Card Holder Name"
        placeholder={'Eg. Rajendra Kumar Verma'}
      />
    </View>
    <View style={[globalStyles.row, globalStyles.mt40]}>
      <View
        style={[
          globalStyles.px20,
          globalStyles.py16,
          globalStyles.shadow,
          globalStyles.pt4,

          globalStyles.flex1,
          globalStyles.mr12,
          globalStyles.whiteBackground,
          {borderRadius: 10},
        ]}>
        <Input
          customContainerStyle={[
            themeInputStyles.primaryInputStyle,

            {borderLeftWidth: 0},
          ]}
          customlabelStyle={[themeInputStyles.label, {marginLeft: 0}]}
          showLabel
          label="Valid Date"
          placeholder={'MM / YY'}
        />
      </View>
      <View
        style={[
          globalStyles.px20,
          globalStyles.py16,
          globalStyles.shadow,
          globalStyles.pt4,
          globalStyles.ml12,
          globalStyles.flex1,
          globalStyles.whiteBackground,
          {borderRadius: 10},
        ]}>
        <Input
          customContainerStyle={[
            themeInputStyles.primaryInputStyle,

            {borderLeftWidth: 0},
          ]}
          customlabelStyle={[themeInputStyles.label, {marginLeft: 0}]}
          showLabel
          label="CVV  Number"
          placeholder={'XXX'}
        />
      </View>
    </View>
    <View style={[globalStyles.mt40, globalStyles.row]}>
      <CheckBox
        size={30}
        style={{backgroundColor: colors.gray, borderRadius: 5}}
        color={{checked: '#943993', blur: '#943993'}}
      />
      <View style={globalStyles.flex1}>
        <Text
          style={[
            globalStyles.ml12,
            globalStyles.font15,
            {color: colors.textprimary},
          ]}>
          Want To Save Card Details (CVV won’t saved)
        </Text>
      </View>
    </View>
  </View>
);

export default CardForm;
