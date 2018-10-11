import React from 'react';
import { View } from 'react-native';
import Screen from "../components/UIBasic/RNDScreen";
import Button from "../components/UIBasic/RNDButton";
import Image from "../components/UIBasic/RNDImage";


export default class ImagePage extends React.Component {

	state = {
		urlToShow: null,
		birdUrl: require('../assets/bird.jpg'),	//try using a import statement also.
		reactUrl: {uri: 'https://facebook.github.io/react/logo-og.png'}
	}

	render() {
		return (
			<Screen title="Image" onMenuPress={this.props.navigation.toggleDrawer} >
			
				<Button title="Show react"
					onPress={() => {
						this.setState({urlToShow : this.state.reactUrl})

					}}
				/>

				<Button title="Show bird"
					onPress={() => {
						this.setState({urlToShow : this.state.birdUrl})
					}}
				/>

				<Image source={this.state.urlToShow} style={{width: 100, height: 100}} />
				
			</Screen>		
		);
	}
	
}
