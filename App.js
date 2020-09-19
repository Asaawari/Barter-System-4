import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AppTabNavigator} from './components/AppTabNavigator';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import SignUpLoginScreen from './screens/SignUpLoginScreen';

export default class App extends React.Component {
  render(){
  return (
    <AppContainer/>
  );
}
}

const SwitchNavigator = createSwitchNavigator({
  SignUpLoginScreen : {screen : SignUpLoginScreen},
  AppTabNavigator : {screen : AppTabNavigator},
})

const AppContainer = createAppContainer(SwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
