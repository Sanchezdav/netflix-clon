import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableHighlight,
  TouchableWithoutFeedback,
  ScrollView,
  Dimensions
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import IonIcons from 'react-native-vector-icons/Ionicons'

import TabsEpisodes from './TabsEpisodes'

const { width, height } = Dimensions.get('window')

class Details extends Component {
  render() {
    const { params } = this.props.navigation.state;
    return(
      <ScrollView style={ styles.container }>
        <ImageBackground
          source={{ uri: params.details.thumbnail }}
          style={ styles.thumbnail }
          >
            <View style={ styles.buttonPlay }>
              <TouchableWithoutFeedback style={ styles.iconContainer } onPress={ null }>
                <Icon
                  name="play-circle"
                  size={80}
                  color="white"
                  style={ styles.iconPlay }
                />
              </TouchableWithoutFeedback>
            </View>
          </ImageBackground>
          <View style={ styles.descriptionContainer }>
            <View style={ styles.subtitle }>
              <Text style={ [styles.text, styles.subtitleText] }>{ params.details.year }</Text>
              <Text style={ [styles.text, styles.subtitleText] }>{ params.details.numOfEpisodes }</Text>
              <Text style={ [styles.text, styles.subtitleText] }>{ params.details.season } Season</Text>
            </View>
            <View style={ styles.description }>
              <Text style={ [styles.text, styles.light] }>{ params.details.description }</Text>
            </View>
            <Text style={ styles.text }>Cast: { params.details.cast }</Text>
            <Text style={ styles.text }>Creator: { params.details.creator }</Text>
            <View style={ styles.shareListIcons }>
              <View style={ styles.myListIcon }>
                <IonIcons
                  name="md-checkmark"
                  style={ styles.listIcon }
                  color="grey"
                  size={25}
                />
                <Text style={ styles.text }>My List</Text>
              </View>
              <View style={ styles.myShareIcon }>
                <Icon
                  name="share-alt"
                  style={ styles.shareIcon }
                  color="grey"
                  size={25}
                />
                <Text style={ styles.text }>Share</Text>
              </View>
            </View>
          </View>
          <TabsEpisodes />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818'
  },
  thumbnail: {
    width: width,
    height: 300
  },
  buttonPlay: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  iconPlay: {
    opacity: 0.7
  },
  descriptionContainer: {
    paddingHorizontal: 20
  },
  subtitle: {
    flexDirection: 'row'
  },
  subtitleText: {
    marginRight: 20
  },
  text: {
    color: "#b3b3b3",
    fontSize: 16
  },
  shareListIcons: {
    flexDirection: 'row',
    marginVertical: 30
  },
  listIcon: {
    height: 25
  },
  shareIcon: {
    height: 25
  },
  myListIcon: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 40
  },
  myShareIcon: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  description: {
    marginVertical: 10
  },
  light: {
    fontWeight: '200'
  }
})

export default Details
