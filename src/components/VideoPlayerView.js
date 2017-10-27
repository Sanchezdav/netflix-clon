import React, { Component } from 'react'
import {Text, View, StyleSheet} from 'react-native'

import VideoPlayer from 'react-native-video-controls'
import Orientation from 'react-native-orientation'

class VideoPlayerView extends Component {
  componentWillMount() {
    Orientation.lockToLandscape()
  }

  back() {
    Orientation.lockToPortrait()
    this.props.navigation.goBack()
  }

  render() {
    return(
      <View style={ styles.container }>
        <VideoPlayer
          source={ require('../videos/video.mp4') }
          title={ this.props.title }
          navigator={ this.props.navigator }
          onBack={ () => this.back() }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default VideoPlayerView
