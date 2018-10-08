import React from 'react';

import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import LoginPage from './pages/Login';
import CameraPage from './pages/Camera';
import ImagePage from './pages/Image';
import StylePlayGroundPage from './pages/StylePlayGround';
import TabNavigationPage from './pages/TabNavigation';

//side menu

	const DrawerNavigation = createDrawerNavigator({
		Login: {
			screen: LoginPage,
		},
		Camera: {
			screen: CameraPage,
		},
		Image: {
			screen: ImagePage,
		},
		StylePlayGround: {
			screen: StylePlayGroundPage,
		},
		TabNavigation: {
			screen: TabNavigationPage,
		},
	});


//component

	export default class App extends React.Component {
		render() {
			return <DrawerNavigation />;
		}
	}