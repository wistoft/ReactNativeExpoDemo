import React from 'react';

import { createDrawerNavigator } from 'react-navigation';

import LoginPage from './pages/Login';
import CameraPage from './pages/Camera';
import ImagePage from './pages/Image';
import PlayAudio from './pages/PlayAudio';
import RecordAudio from './pages/RecordAudio';
import VideoPage from './pages/Video';
import PushNotificationPage from './pages/PushNotification';
import PermissionsPage from './pages/Permissions';
import InternetPage from './pages/Internet';
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
			RecordAudio: {
				screen: RecordAudio,
			},
			PushNotification: {
				screen: PushNotificationPage,
			},
			Video: {
				screen: VideoPage,
			},
			Permissions: {
				screen: PermissionsPage,
			},
			Internet: {
				screen: InternetPage,
			},
			"StackNavigation/iFrame": {
				screen: StackNavigationPage,
			},
			Util: {
				screen: UtilPage,
			},
		},{
			initialRouteName: 'Internet',
		}
	);


//component

	export default class App extends React.Component {
		render() {
			return <DrawerNavigation />;
		}
	}