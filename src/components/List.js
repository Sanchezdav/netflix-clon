import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image
} from 'react-native'

const show_first = [
  {
    key: 1,
    name: 'Suits',
    image: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/2432.jpg'
  },
  {
    key: 2,
    name: 'Vikings',
    image: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/628.jpg'
  },
  {
    key: 3,
    name: 'Big Bang Theory',
    image: 'https://static.tvmaze.com/uploads/images/medium_portrait/78/195988.jpg'
  },
  {
    key: 4,
    name: 'Daredevil',
    image: 'https://static.tvmaze.com/uploads/images/medium_portrait/83/209955.jpg'
  },
  {
    key: 5,
    name: 'Jessica Jones',
    image: 'https://static.tvmaze.com/uploads/images/medium_portrait/101/253490.jpg'
  },
  {
    key: 6,
    name: 'Luke Cage',
    image: 'https://static.tvmaze.com/uploads/images/medium_portrait/90/225030.jpg'
  }
]

const show_second = [
  {
    key: 7,
    name: 'Club de cuervos',
    image: 'https://static.tvmaze.com/uploads/images/medium_portrait/90/225030.jpg'
  },
  {
    key: 8,
    name: 'Game of Thrones',
    image: 'https://static.tvmaze.com/uploads/images/medium_portrait/101/253490.jpg'
  },
  {
    key: 9,
    name: 'Orange is the new black',
    image: 'https://static.tvmaze.com/uploads/images/medium_portrait/83/209955.jpg'
  },
  {
    key: 10,
    name: 'House of cards',
    image: 'https://static.tvmaze.com/uploads/images/medium_portrait/78/195988.jpg'
  },
  {
    key: 11,
    name: 'Iron fist',
    image: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/628.jpg'
  },
  {
    key: 12,
    name: 'I zombie',
    image: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/2432.jpg'
  }
]

class List extends Component {

  _renderItem(item) {
    return(
      <Image style={{ width: 120, height: 180 }} source={{ uri: item.image }}/>
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
            data={show_first}
          />
        </View>
        <View>
          <Text style={ styles.text }>Top Picks For You</Text>
          <FlatList
            horizontal={true}
            inverted={false}
            ItemSeparatorComponent={ this.renderSeparator }
            renderItem={ ({item}) => this._renderItem(item) }
            data={show_second}
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
