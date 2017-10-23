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
          </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
  }
})

export default Details
