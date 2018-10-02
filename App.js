import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Camerapage from './pages/Camera';
import ImagePage from './pages/Image';

class HomeScreen extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Menu</Text>
				<Button
					title="Camera"
					onPress={() => this.props.navigation.navigate('Camera')}
				/>
				<Button
					title="Image"
					onPress={() => this.props.navigation.navigate('Image')}
				/>
			</View>
		);
	}
}

  
const Root = createStackNavigator({
		Home: HomeScreen,
		Camera: Camerapage,
		Image: ImagePage,
	},{
		initialRouteName: 'Home',
	}
);
  
export default class App extends React.Component {
	render() {
		return <Root />;
	}
}