import React from 'react';
import {Text, View} from 'react-native';
import Container from '../components/Container';
import globalStyles from '../styles/globalStyles';

const Home = ({params}) => (
  <Container showFooter>
    <View style={[globalStyles.px40]}></View>
  </Container>
);

export default Home;
