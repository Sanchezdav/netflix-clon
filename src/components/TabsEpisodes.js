import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view'

import Episodes from './Episodes'
import Trailers from './Trailers'

class TabsEpisodes extends Component {
  constructor(props) {
    super(props)

    this.state = {
      index: 0,
      routes: [
        { key: '1', title: 'Episodes' },
        { key: '2', title: 'Trailers & More' }
      ]
    }
  }

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar style={ styles.tabs } indicatorStyle={ styles.indicator } {...props} />;

  _renderScene = function(route){
    const scenes = {
      '1': <Episodes episodes={ this.props.data }/>,
      '2': <Trailers />
    }

    return scenes[route.route.key]
  }

  render() {
    return(
      <TabViewAnimated
        style={ styles.container }
        navigationState={ this.state }
        renderScene={ this._renderScene.bind(this) }
        renderHeader={ this._renderHeader }
        onIndexChange={ this._handleIndexChange }
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: 2,
    borderColor: 'black'
  },
  tabs: {
    backgroundColor: 'transparent'
  },
  indicator: {
    backgroundColor: 'red',
    top: 0,
    height: 4
  }
})

export default TabsEpisodes
