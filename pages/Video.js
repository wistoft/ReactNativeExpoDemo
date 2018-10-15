import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

import {Video} from "expo";

import RNDScreen from "../components/UIBasic/RNDScreen";
import RNDButton from "../components/UIBasic/RNDButton";
import RNDImage from "../components/UIBasic/RNDImage";

export default class Page extends React.Component {

	state = {
	}
	
	onPlay = () => {
		this.video.playAsync()
	}
	
	onPause = () => {
		this.video.pauseAsync()
	}
	
	onFullscreen = () => {
		this.video.presentFullscreenPlayer();

		//doesn't work
		//this.video.presentFullscreenPlayerAsync();

	}
	
	//Fullscreen only supports portrait mode.
	// This rotates the video, but not in fullscreen mode. Transform: [{rotate: '90deg'}]
	render() {
		return (
			<RNDScreen
					title="PageTitle"
					onMenuPress={this.props.navigation.toggleDrawer}
					style={{
						alignItems: 'flex-start',
					}}
				>
				
				<View style={styles.buttonRow} >
				
					<View style={styles.buttonWrapper}>

						<Button title="Play" onPress={this.onPlay} />
						
					</View>

					<View style={styles.buttonWrapper}>

						<Button title="Pause" onPress={this.onPause} />
						
					</View>
					
					<View style={styles.buttonWrapper}>

						<Button title="Full Screen" onPress={this.onFullscreen} />
						
					</View>

				</View>


				<Video
					ref={ref => { this.video = ref; }} 
					source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
					rate={1.0}
					volume={1.0}
					isMuted={false}
					resizeMode="cover"
					isLooping
					style={{ width: 300, height: 300 }}
				/>

				
			</RNDScreen>		
		);
	}
	

}


let styles = StyleSheet.create({
	buttonRow :{
		width:"100%",
		flexDirection:"row",
		alignItems: "center",
	},
	buttonWrapper :{
		padding: 5,
		paddingRight: 0,					//to avoid double padding
	},
});
