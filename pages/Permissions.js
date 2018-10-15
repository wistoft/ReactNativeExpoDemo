import React from 'react';
import { Text } from 'react-native';

import { Permissions } from 'expo';

import Screen from "../components/UIBasic/RNDScreen";
import Button from "../components/UIBasic/RNDButton";
import Image from "../components/UIBasic/RNDImage";

export default class PermissionsPage extends React.Component {

	state = {
		hasCameraPermission: "Unknown",
		hasRecordingPermission: "Unknown",
		hasNotificationPermission: "Unknown",

	}
	
	async componentWillMount() {

		const { status:cameraStatus } = await Permissions.getAsync(Permissions.CAMERA);
		this.setState({ hasCameraPermission: cameraStatus  });
		
		const { status:recordingStatus } = await Permissions.getAsync(Permissions.AUDIO_RECORDING);
		this.setState({ hasRecordingPermission: recordingStatus });
		
		const { status:notificationStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
		this.setState({ hasNotificationPermission: notificationStatus });
		
	}

	async requestPermissions() {
		
		const { status:cameraStatus } = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({ hasCameraPermission: cameraStatus });

		const { status:recordingStatus } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
		this.setState({ hasRecordingPermission: recordingStatus });


		//on ios: allowsSound, allowsAlert and allowsBadge
		const { status:notificationStatus } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
		this.setState({ hasNotificationPermission: notificationStatus });


	}
	

	render() {
		return (

			<Screen
					title="Permissions"
					onMenuPress={this.props.navigation.toggleDrawer}
					style={{
						alignItems: 'flex-start',
					}}
				>

				<Text>Camera: {this.state.hasCameraPermission}</Text>
				<Text>Recording: {this.state.hasRecordingPermission}</Text>
				<Text>Notification: {this.state.hasNotificationPermission}</Text>
			
				<Button title="Request Permissions" onPress={this.requestPermissions.bind(this)} />

				
			</Screen>		
		);
	}
	

}