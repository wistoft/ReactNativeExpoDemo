import React from 'react';

import { createDrawerNavigator } from 'react-navigation';

import LoginPage from './pages/Login';
import CameraPage from './pages/Camera';
import ImagePage from './pages/Image';
import StackNavigation from './pages/StackNavigation';
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
		StackNavigation: {
			screen: StackNavigation,
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