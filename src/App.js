import React, {useEffect, useReducer} from 'react';
import MainNavigation from './navigation/mainNavigation';
import {View} from 'react-native';
import {Context, reducer, initialState} from './utils/store';
const App = () => {
  const [showSplash, setShowSplash] = React.useState(true);
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2000);
  }, []);
  return (
    <>
      <Context.Provider value={{state, dispatch}}>
        {showSplash ? <View /> : <MainNavigation />}
      </Context.Provider>
    </>
  );
};

export default App;
