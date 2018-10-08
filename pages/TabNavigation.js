
import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import LoginPage from './Login';
import CameraPage from './Camera';



class TabNavigationPage extends React.Component {
	render() {
		return (
			<View style={	{ flex: 1
							, justifyContent: 'flex-start'
							, alignItems: 'center'
							}}>

				<Text>Menu</Text>
				<View style={{flex:0.04}}/>

				<Button
					title="Login"
					icon={{ name: 'lock' }}
					style={{ height: 70 }}
					onPress={() => this.props.navigation.navigate('Login')}
				/>
				<View style={{flex:0.02}}/>
				
				<Button
					title="Camera"
					icon={{ name: 'face' }}
					onPress={() => this.props.navigation.navigate('Camera')}
				/>
				<View style={{flex:0.02}}/>

			</View>
		);
	}
}


export default createStackNavigator({
	Home: TabNavigationPage,
	Login: LoginPage,
	Camera: CameraPage,
},{
	initialRouteName: 'Home',
}
);
