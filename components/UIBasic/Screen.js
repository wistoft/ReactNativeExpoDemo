import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


/*
 * props:
 * 	title
 * 	onMenuPress
 */
export default class Screen extends React.Component {

	render() {
		return (

			<View style={styles.screen}>

				<View style={styles.topMenu}>
					<Button
						title="Menu"
						onPress={this.props.onMenuPress}
					/>
					<Text style={styles.topMenuText}>{this.props.title}</Text>
				</View>

				<View style={styles.content}>

					{this.props.children}

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

	},
	topMenu :{
		padding: 5,
		paddingLeft: 15,
		flexDirection: "row",
		justifyContent: 'flex-start', 
		alignItems: 'center', 
		borderBottomWidth: 1,
		borderColor: "#ddd",
		backgroundColor: "#eee",
	},
	topMenuText :{
		paddingLeft: 10,
		fontSize: 17,
	},
	content :{
		flex: 1, 
		justifyContent: 'flex-start', 
		alignItems: 'flex-start', 

	},
});