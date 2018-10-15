import React from 'react';
import { Text} from 'react-native';

import { Notifications } from 'expo';

import Screen from "../components/UIBasic/RNDScreen";
import Button from "../components/UIBasic/RNDButton";

export default class PushNotificationPage extends React.Component {

	state = {
		permissionMessage: "Permission unknown",
		regId: "Unknown",
	}

	async componentWillMount() {

		//register

			try{

					let regId = await Notifications.getExpoPushTokenAsync();
					
					this.setState({
						regId:regId,
						permissionMessage: "Able to push.",
					});
						
				//log
		
					console.log(regId);
		
				//add listener
		
					this._notificationSubscription = Notifications.addListener(this._handleNotification);

			} catch(error){

				this.setState({
					permissionMessage: "Not able to push."
				});

			}
		

	}

	onClearBadge = () => {
		Expo.Notifications.setBadgeNumberAsync(0);
	}
	
	onSetBadge2 = () => {
		Expo.Notifications.setBadgeNumberAsync(2);
	}
	
	render() {
		return (
			<Screen
					title="PushNotification"
					onMenuPress={this.props.navigation.toggleDrawer}
					style={{
						alignItems: 'flex-start',
					}}
				>

				<Text>{this.state.permissionMessage}</Text>
			
				<Button title="Clear Badge (ios)" onPress={this.onClearBadge} />
				
				<Button title="Set Badge 2 (ios)" onPress={this.onSetBadge2} />

				<Text>RegId: {this.state.regId}</Text>
				
			</Screen>		
		);
	}
	

}