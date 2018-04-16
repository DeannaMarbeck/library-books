
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';
import { store } from './resources/store';
import { Provider } from 'react-redux';

import ListScreen from './screens/ListScreen';

StatusBar.setBarStyle('light-content');

// Set navigation screens and headerbar colours
// #00b834 is the LibrariesWest green

const RootNavigator = StackNavigator({
  Home: ListScreen,

}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#00b834'
    },
    headerTintColor: '#FFF'
  }
});


const App = () => (
  <Provider store={ store }>
    <RootNavigator />
  </Provider>
);

export default App;