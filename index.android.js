/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Rotas from './src/Rotas';

export default class game_cara_ou_coroa extends Component {
  render() {
    return (
        <Rotas />
    );
  }
}

AppRegistry.registerComponent('game_cara_ou_coroa', () => game_cara_ou_coroa);
