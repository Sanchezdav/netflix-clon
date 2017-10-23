import { StackNavigator } from 'react-navigation'

import App from './App'
import Search from './src/components/Search'
import Details from './src/components/Details'

const Router = StackNavigator({
  Home: {
    screen: App,
  },
  Search: {
    screen: Search,
  },
  Details: {
    screen: Details,
  }
},{
  headerMode: 'none',
  initialRouteName: 'Home'
});

export default Router
