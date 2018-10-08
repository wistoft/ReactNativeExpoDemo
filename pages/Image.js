import React from 'react';
import { View, Text, Button, Image } from 'react-native';


export default class ImagePage extends React.Component {

	state = {
		urlToShow: null,
		birdUrl: require('../assets/bird.jpg'),	//try using a import statement also.
		reactUrl: {uri: 'https://facebook.github.io/react/logo-og.png'}
	}

	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
			
				<Text>Image</Text>
				<View style={{flex:0.04}}/>

				<Button title="Show react"
					onPress={() => {
						this.setState({urlToShow : this.state.reactUrl})

					}}
				/>
				<View style={{flex:0.02}}/>

				<Button
					title="Show bird"
					onPress={() => {
						this.setState({urlToShow : this.state.birdUrl})
					}}
				/>
				<View style={{flex:0.02}}/>

				<Image
					source={this.state.urlToShow}
					style={{width: 100, height: 100}} 
				/>
				<View style={{flex:0.02}}/>
				
			</View>		
		);
	}
}
