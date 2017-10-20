import { StackNavigator } from 'react-navigation'

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
  initialRouteName: 'Home'
});

export default Router
