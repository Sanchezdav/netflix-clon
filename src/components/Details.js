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
  Dimensions,
  Share,
  Animated
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import IonIcons from 'react-native-vector-icons/Ionicons'
import TextGradient from 'react-native-linear-gradient'
import Orientation from 'react-native-orientation'

import TabsEpisodes from './TabsEpisodes'

const { width, height } = Dimensions.get('window')

class Details extends Component {

  constructor(props) {
    super(props)

    this.state = {
      measuresTitle: 0,
      measuresSeason: 0,
      scrollY: new Animated.Value(0)
    }
  }

  componentWillMount() {
    Orientation.lockToPortrait()
  }

  openVideo(title) {
    Orientation.lockToLandscape()
    this.props.navigation.navigate('Video', { title: title })
  }

  onShare() {
    Share.share({
      title: 'Designated Survivor',
      uri: 'www.youtube.com',
      message: 'Awesome TV Show'
    }, {
      // android
      dialogTitle: 'Share this awesome content',
      //ios
      excludeActivityTypes: [
        'com.apple.UIKit.activity.PostToTwitter'
      ]
    })
  }

  render() {
    const headerNameToggle = this.state.scrollY.interpolate({
      inputRange: [this.state.measuresTitle, this.state.measuresTitle + 1],
      outputRange: [0, 1]
    })
    const headerSeasonHide = this.state.scrollY.interpolate({
      inputRange: [
        this.state.measuresSeason - 1,
        this.state.measuresSeason,
        this.state.measuresSeason + 1
      ],
      outputRange: [-width, 0, 0]
    })
    const headerSeasonToggle = this.state.scrollY.interpolate({
      inputRange: [this.state.measuresSeason, this.state.measuresSeason + 1],
      outputRange: [0, 1]
    })
    const { navigate } = this.props.navigation
    const { params } = this.props.navigation.state;
    return(
      <View style={{ flex: 1 }}>
        <Animated.View style={ [styles.header, { opacity: headerNameToggle }] }>
          <Text style={ styles.headerText }>{ params.name }</Text>
        </Animated.View>
        <Animated.View style={ [styles.header,
            { opacity: headerSeasonToggle, transform: [{translateY: 0}, {translateX: headerSeasonHide}] }] }
        >
          <Text style={ styles.headerText }>Season 1</Text>
        </Animated.View>
        <Animated.ScrollView
          scrollEventThrottle={ 1 }
          onScroll={
            Animated.event(
              [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
              { useNativeDriver: true }
            )
          }
          style={ styles.container }
        >
          <ImageBackground
            source={{ uri: params.details.thumbnail }}
            style={ styles.thumbnail }
            >
              <View style={ styles.buttonPlay }>
                <TouchableWithoutFeedback
                  style={ styles.iconContainer }
                  onPress={ () => navigate('Video', { title: params.name }) }
                >
                  <Icon
                    name="play-circle"
                    size={80}
                    color="white"
                    style={ styles.iconPlay }
                  />
                </TouchableWithoutFeedback>
              </View>
              <View style={ styles.nameContainer }
                onLayout={ ({nativeEvent}) => {
                  this.setState({
                    measuresTitle: nativeEvent.layout.y
                  })
                } }
              >
                <Text style={ [styles.text, styles.titleShow] }>{ params.name }</Text>
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
                <TouchableHighlight onPress={ this.onShare }>
                  <View style={ styles.myShareIcon }>
                    <Icon
                      name="share-alt"
                      style={ styles.shareIcon }
                      color="grey"
                      size={25}
                    />
                    <Text style={ styles.text }>Share</Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
            <View
              onLayout={ ({nativeEvent}) => {
                this.setState({
                  measuresSeason: nativeEvent.layout.y + 10
                })
              } }
            >
              <TabsEpisodes data={ params.details.episodes } />
            </View>
        </Animated.ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818'
  },
  header: {
    backgroundColor: '#181818',
    paddingVertical: 10,
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1
  },
  headerText: {
    color: 'white',
    fontSize: 20
  },
  nameContainer: {
    backgroundColor: 'transparent'
  },
  titleShow: {
    fontSize: 35,
    paddingLeft: 10,
    marginBottom: 10,
    color: 'white'
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
