import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Container from '../components/Container';
import globalStyles from '../styles/globalStyles';
import colors from '../constants/colors';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

// icons
import CardIcon from '../assets/icons/card.svg';
import WalletIcon from '../assets/icons/wallet.svg';
import BankingIcon from '../assets/icons/banking.svg';
import Button from '../components/Button/ThemeButton';
import CardForm from '../components/ChoosePayment/CardForm';
import Wallets from '../components/ChoosePayment/Wallets';
const ChoosePayment = ({navigation}) => (
  <Container
    scroll
    showHeader
    headerProps={{titleType: 'title3', title: 'Choose Payment'}}>
    <View style={globalStyles.px30}>
      <Text style={[globalStyles.font20, globalStyles.bold]}>
        Choose Payment Action
      </Text>
      <Text
        style={[
          globalStyles.font15,
          globalStyles.mt12,
          {color: colors.textprimary},
        ]}>
        Choose one of categories which suited you most
      </Text>
      <Option
        icon={CardIcon}
        title={'Debit / Credit Card'}
        content={<CardForm />}
      />
      <Option icon={BankingIcon} title={'Net Banking'} />
      <Option icon={WalletIcon} title={'Wallet'} content={<Wallets />} />
      <Option icon={BankingIcon} title={'UPI'} />
      <View style={[globalStyles.mt80, globalStyles.px20]}>
        <Button
          onPress={() =>
            navigation.replace('Complete', {
              displayText: 'You have paid sucessfully',
              link: 'Chat',
            })
          }
          title={
            <Text>
              Pay {'  '}
              <Text style={globalStyles.bold}>₹ 400.00</Text>
            </Text>
          }
        />
      </View>
    </View>
  </Container>
);
const Option = ({icon: Icon, content, title}) => {
  const [expand, toggleAccordian] = React.useState(false);
  return (
    <View
      style={[
        globalStyles.whiteBackground,
        globalStyles.shadow,
        globalStyles.mt40,
        globalStyles.px16,
        globalStyles.py16,
        {borderRadius: 10},
      ]}>
      <TouchableWithoutFeedback
        onPress={() => toggleAccordian(!expand)}
        style={[globalStyles.row, globalStyles.alignCenter]}>
        <View style={styles.iconContainer}>
          <Icon />
        </View>
        <Text
          style={[
            globalStyles.ml32,
            globalStyles.font15,
            {color: colors.textprimary},
          ]}>
          {title}
        </Text>
      </TouchableWithoutFeedback>
      {expand && <>{content}</>}
    </View>
  );
};
const styles = StyleSheet.create({
  iconContainer: {
    height: 45,
    width: 45,
    backgroundColor: '#F9F0FF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ChoosePayment;
