import { StackNavigator } from 'react-navigation';

import Main from './components/Main';

const Router = StackNavigator({
  Main: { screen: Main },
});

export default Router;
