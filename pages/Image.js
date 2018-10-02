import React from 'react';
import { View, Text, Button, Image } from 'react-native';


export default class ImagePage extends React.Component {

	state = {
		urlToShow: null,
		birdUrl: require('../assets/bird.jpg'),
		reactUrl: {uri: 'https://facebook.github.io/react/logo-og.png'},
		tmpUrl: {uri: 'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FAwesomeProject-94d4fd9e-bed5-40c7-8329-df64f9c8ac55/Camera/7398c83e-62c0-48ec-b469-71231d733c2e.jpg'}
	}

	render() {
		return (
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<Text>Image</Text>
					<Button title="Show react"
						onPress={() => {
							this.setState({urlToShow : this.state.reactUrl})

						}}
					/>
					<Button
						title="Show bird"
						onPress={() => {
							this.setState({urlToShow : this.state.birdUrl})
						}}
					/>
					<Image
						source={this.state.urlToShow}
						style={{width: 100, height: 100}} 
					/>
					<Image
						source={this.state.tmpUrl}
						style={{width: 100, height: 100}} 
					/>
				</View>
				
		);
	}
}
