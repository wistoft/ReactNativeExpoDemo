import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import Screen from "../components/UIBasic/RNDScreen";
import Button from "../components/UIBasic/RNDButton";
import Image from "../components/UIBasic/RNDImage";

export default class Page extends React.Component {

	state = {
	}
	
	onSomething = () => {
	}
	
	render() {
		return (
			<Screen
					title="PageTitle"
					onMenuPress={this.props.navigation.toggleDrawer}
				>

				<Text>Default Page</Text>
			
				<Button title="ButtonText"
					onPress={() => {
					}}
				/>

				<Image
					source={this.state.urlToShow}
					style={{width: 100, height: 100}} 
				/>
				
			</Screen>		
		);
	}
	

}