import React from 'react';

import { createDrawerNavigator } from 'react-navigation';

import LoginPage from './pages/Login';
import CameraPage from './pages/Camera';
import ImagePage from './pages/Image';
import PlayAudio from './pages/PlayAudio';
import StackNavigationPage from './pages/StackNavigation';
import UtilPage from './pages/Util';


//on ready

	console.log("loading.");

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
		PlayAudio: {
			screen: PlayAudio,
		},
		StackNavigation: {
			screen: StackNavigationPage,
		},
		Util: {
			screen: UtilPage,
		},
	},{
		initialRouteName: 'Util',
	}
	);


//component

	export default class App extends React.Component {
		render() {
			return <DrawerNavigation />;
		}
	}