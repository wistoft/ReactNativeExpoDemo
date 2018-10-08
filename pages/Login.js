import React from 'react';
import { View, Text, Linking, Platform, StyleSheet } from 'react-native';

import Screen from "../components/UIBasic/Screen";
import Button from "../components/UIBasic/Button";


export default class LoginPage extends React.Component {

	state = {
		authorized: false
	}

	onOpenMarket() {

		let url;

		if (Platform.OS === "android"){
			url  = "https://play.google.com/store/apps/details?id=com.facebook.katana";
		} else {
			url  = 'https://itunes.apple.com/us/app/facebook/id284882215';
		}

		Linking.openURL(url)
			.catch(err => console.error('An error occurred', err));
	}

	onLogin() {
		console.log("todo");
	}

	render() {
		return (
			<Screen
					title="Login"
					onMenuPress={() => this.props.navigation.toggleDrawer()}
					>

				<Button
					title="Login"
					onPress={() => this.onLogin()}
				/>
				<Button
					title="Open Market"
					onPress={() => this.onOpenMarket()}
					/>

			</Screen>
		);
	}
	

}