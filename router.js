import { StackNavigator } from 'react-navigation'

import App from './App'
import Search from './src/components/Search'
import Details from './src/components/Details'
import Video from './src/components/VideoPlayerView'

const Router = StackNavigator({
  Home: {
    screen: App,
  },
  Search: {
    screen: Search,
  },
  Details: {
    screen: Details,
  },
  Video: {
    screen: Video,
  }
},{
  mode: 'modal',
  headerMode: 'none',
  initialRouteName: 'Home'
});

export default Router
