import { Navigation } from 'react-native-navigation';
import Hello from './Hello';
import WelcomeScreen from './App';

// 注册所有的页面
export function registerScreens() {
	Navigation.registerComponent('navigation.HelloScreen',() => Hello);
	Navigation.registerComponent('navigation.WelcomeScreen',() => WelcomeScreen);
}