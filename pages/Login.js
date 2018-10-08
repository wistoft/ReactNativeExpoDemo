import React from 'react';
import { View, Text, Button, Linking, Platform, StyleSheet } from 'react-native';


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
			<View style={styles.screen}>

				<View style={styles.topMenu}>
					<Button
						title="Menu"
						onPress={() => this.props.navigation.toggleDrawer()}
					/>
					<Text style={styles.topMenuText}>Login</Text>
				</View>

				<View style={styles.content}>

					<View style={styles.buttonWrapper}>
						<Button
							title="Login"
							style={styles.button}
							onPress={() => this.onLogin()}
						/>
					</View>
					
					<View style={styles.buttonWrapper}>
						<Button
							title="Open Market"
							style={styles.button}
							onPress={() => this.onOpenMarket()}
							/>
					</View>

				</View>

			</View>
		);
	}
	

}



let styles = StyleSheet.create({
	screen :{
		flex: 1, 
		marginTop : 24,						//to avoid display under status bar on android
		justifyContent: 'flex-start', 
		alignItems: 'stretch',				//children will take 100% width
		backgroundColor: 'red'
	},
	topMenu :{
		padding: 5,
		paddingLeft: 15,
		backgroundColor: "green",
		flexDirection: "row",
		justifyContent: 'flex-start', 
		alignItems: 'center', 
	},
	topMenuText :{
		paddingLeft: 10,
		fontSize: 17,
	},
	content :{
		flex: 1, 
		justifyContent: 'flex-start', 
		alignItems: 'flex-start', 
		backgroundColor: "blue",
	},
	buttonWrapper :{
		padding: 10,
		paddingBottom: 0,					//to avoid double padding between buttons
	},
	button :{
	},
});