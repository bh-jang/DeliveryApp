/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// App 이름 바꾸면, 걍 새로만들어라.. 귀찮다 native 수정해야함

AppRegistry.registerComponent(appName, () => App);
