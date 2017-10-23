/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import SideMenu from 'react-native-side-menu'

import List from './src/components/List'
import Slide from './src/components/Slider'
import Header from './src/components/Header'
import Menu from './src/components/Menu'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {

  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  updateMenu(isOpen) {
    this.setState({ isOpen })
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <SideMenu
          menu={ <Menu /> }
          isOpen={ this.state.isOpen }
          onChange={ (isOpen) => this.updateMenu(isOpen) }
        >
          <View>
            <Header toggle={ this.toggle.bind(this) } navigation={ navigation } />
          </View>
          <ScrollView style={styles.container}>
            <Slide />
            <List navigation={ navigation } />
          </ScrollView>
        </SideMenu>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  }
});
