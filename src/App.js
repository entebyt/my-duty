import React, {useEffect} from 'react';
import MainNavigation from './navigation/mainNavigation';
import {View} from 'react-native';
const App = () => {
  const [showSplash, setShowSplash] = React.useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2000);
  }, []);
  return showSplash ? <View /> : <MainNavigation />;
};

export default App;
