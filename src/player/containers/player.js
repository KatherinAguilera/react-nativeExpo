import React, { Component } from 'react';
// import Video from 'react-native-video';
import { Video } from 'expo';
import VideoPlayer from '@expo/videoplayer';
import {
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import Layout from '../components/layout';

 class Player extends Component {
  state = {
    loading: true,
  }
  onBuffer = ({ isBuffering }) => {
    this.setState({
      loading: isBuffering
    })
  }
  onLoad = () => {
    this.setState({
      loading: false
    })
  }
  render() {
    return (
      <Layout
      loading={this.state.loading}
        video={
          <VideoPlayer
            videoProps={{
              shouldPlay: true,
              resizeMode: Video.RESIZE_MODE_CONTAIN,
              source: {
                uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
              },
            }}
            // onBuffer={this.onBuffer}
            // onLoad={this.onLoad}
            isPortrait={true}
            useNativeControls
            playFromPositionMillis={0}
          />
        }
        // loader={
        //   <ActivityIndicator color="red" />
        // }
      />
    )
  }
}

 const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  }
})

 export default Player