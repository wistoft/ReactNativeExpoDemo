import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import Screen from "../components/UIBasic/Screen";
import Button from "../components/UIBasic/Button";
import Image from "../components/UIBasic/Image";

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