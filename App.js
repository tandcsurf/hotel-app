import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Tabs } from './config/router';

export default class App extends React.Component {

  render() {

    return (
      <Tabs screenProps={{"itemQty": 55}}/>
    );
  }
}


const styles = StyleSheet.create({

});
