/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AppRouter from './app/navigation/index'

export default class App extends Component {
  constructor(props) {
    super(props)
    console.disableYellowBox = true; // disable yellow warning
  }

  render() {
    return (
      <AppRouter />
    );
  }
}
