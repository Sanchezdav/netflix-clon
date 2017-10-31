import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableWithoutFeedback
} from 'react-native'
import Orientation from 'react-native-orientation'

import { getTwoItems } from '../api/api'

class List extends Component {

  componentWillMount() {
    Orientation.lockToPortrait()
  }

  goDetails(item) {
    this.props.navigation.navigate('Details', { ...item });
  }

  _renderItem(item) {
    return(
      <TouchableWithoutFeedback onPress={ () => this.goDetails(item) }>
        <Image style={{ width: 120, height: 180 }} source={{ uri: item.image }}/>
      </TouchableWithoutFeedback>
    )
  }

  _renderSeparator = () => {
    return (
      <View
        style={{
          width: 5
        }}
      />
    );
  }

  render() {
    return(
      <View style={{ flex: 1 }}>
        <View>
          <Text style={ styles.text }>My List</Text>
          <FlatList
            horizontal={true}
            inverted={false}
            ItemSeparatorComponent={ this._renderSeparator }
            renderItem={ ({item}) => this._renderItem(item) }
            data={ getTwoItems[0] }
          />
        </View>
        <View>
          <Text style={ styles.text }>Top Picks For You</Text>
          <FlatList
            horizontal={true}
            inverted={false}
            ItemSeparatorComponent={ this.renderSeparator }
            renderItem={ ({item}) => this._renderItem(item) }
            data={ getTwoItems[1] }
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'white'
  }
})

export default List;
