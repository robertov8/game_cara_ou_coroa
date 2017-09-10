/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Principal from './src/components/Principal';
import SobreJogo from './src/components/SobreJogo';
import OutrosJogos from './src/components/OutrosJogos';

export default class game_cara_ou_coroa extends Component {
  render() {
    return (
        <Router>
            <Stack
                key='root'
                navigationBarStyle={{ backgroundColor: '#61BD8C' }}
                titleStyle={{ color: 'black', alignSelf: 'center' }}
            >
                <Scene key='principal' component={Principal} initial title="Cara ou Coroa" />
                <Scene key='sobrejogo' component={SobreJogo} title="Sobre o Jogo"/>
                <Scene key='outrosjogos' component={OutrosJogos} title="Outros Jogos" />
            </Stack>
        </Router>
    );
  }
}

AppRegistry.registerComponent('game_cara_ou_coroa', () => game_cara_ou_coroa);
