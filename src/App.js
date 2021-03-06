import React, {useEffect, useReducer} from 'react';
import MainNavigation from './navigation/mainNavigation';
import {View} from 'react-native';
import {Context, reducer, initialState} from './utils/store';
import configureStore from './configureStore';
import {Provider} from 'react-redux';

const store = configureStore();
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
      <Provider store={store}>
        <Context.Provider value={{state, dispatch}}>
          {showSplash ? <View /> : <MainNavigation />}
        </Context.Provider>
      </Provider>
    </>
  );
};
export default App;
