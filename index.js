/**
 * @format
 */
import {Navigation} from "react-native-navigation";
import { registerScreens } from './src/screen';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
	Navigation.setRoot({
		root: {
			component: {
				name: "navigation.HelloScreen"
			}
		}
	});
});