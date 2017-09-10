/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Principal from './src/components/Principal';

export default class game_cara_ou_coroa extends Component {
  render() {
    return (
        <Principal />
    );
  }
}

AppRegistry.registerComponent('game_cara_ou_coroa', () => game_cara_ou_coroa);
