import React, { useEffect } from 'react';
import { Provider } from 'react-redux'
import MainNavigation from './navigation/mainNavigation';
import { View } from 'react-native';
import configureStore from './configureStore'

const store = configureStore()
const App = () => {
  const [showSplash, setShowSplash] = React.useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2000);
  }, []);
  return showSplash ? <View /> :  <MainNavigation/>;
};

export default App;
