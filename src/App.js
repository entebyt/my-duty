import React, {useEffect, useReducer} from 'react';
import { Provider } from 'react-redux'
import MainNavigation from './navigation/mainNavigation';
import { View } from 'react-native';
import configureStore  from './configureStore';
import {Context, reducer, initialState} from './utils/store';

const store = configureStore()
const App = () => {
  const [showSplash, setShowSplash] = React.useState(true);
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2000);
  }, []);
  // return showSplash ? <View /> :  <MainNavigation/>;
  // return ( <View>showSplash ? <View /> : <View><Provider store={store}> <MainNavigation/></Provider></View><View />)
  return (
    
        // <Provider store = {store} >
        // <MainNavigation />
        // </Provider>
         <>
        <Provider store = {store} >
        <Context.Provider value={{state, dispatch}}>
        {showSplash ? <View /> : <MainNavigation />}
        </Context.Provider>
      </Provider>
    </>
)
};

export default App;
