/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const logo = require('./src/imgs/logo.png');
const btnJogar = require('./src/imgs/botao_jogar.png');
const btnSobreJogo = require('./src/imgs/sobre_jogo.png');
const btnOutrosJogos = require('./src/imgs/outros_jogos.png');

export default class game_cara_ou_coroa extends Component {
  render() {
    return (
        <View style={styles.cenaPrincipal}>
            <View style={styles.apresentacaoJogo}>
                <Image source={logo} />
                <Image source={btnJogar} />
            </View>

            <View style={styles.rodape}>
                <Image source={btnSobreJogo} />
                <Image source={btnOutrosJogos} />
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    cenaPrincipal: {
        flex: 1,
        backgroundColor: '#61BD8C'
    },
    apresentacaoJogo: {
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rodape: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

AppRegistry.registerComponent('game_cara_ou_coroa', () => game_cara_ou_coroa);
