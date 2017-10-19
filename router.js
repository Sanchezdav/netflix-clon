import {StackNavigator} from 'react-navigation'

import App from './App'
import Search from './src/components/Search'

const Router = StackNavigator({
  Home: {
    screen: App,
  },
  Search: {
    screen: Search,
  }
},{
  headerMode: 'none',
  initialRouteName: 'Search'
});

export default Router
