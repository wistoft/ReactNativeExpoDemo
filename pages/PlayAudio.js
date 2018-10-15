import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import {Audio} from "expo";

import Screen from "../components/UIBasic/RNDScreen";
import Button from "../components/UIBasic/RNDButton";
import Image from "../components/UIBasic/RNDImage";

export default class PlayAudioPage extends React.Component {

	constructor(){
		super();

		//create

			this.soundObject = new Expo.Audio.Sound();

		//load

			this.soundObject.loadAsync(require("../assets/music.mp3"))
	}
	
	onPlay = () => {
		//Actually, ensure load has finished here.
		this.soundObject.playAsync();
	}
	
	onPause = () => {
		this.soundObject.pauseAsync();
	}
	
	onStop = () => {
		this.soundObject.stopAsync();
	}
	
	render() {
		return (
			<Screen
					title="PlayAudio"
					onMenuPress={this.props.navigation.toggleDrawer}
					style={{
						alignItems: 'flex-start',
					}}
				>
			
				<Button title="Play" onPress={this.onPlay} />
				<Button title="Pause" onPress={this.onPause} />
				<Button title="Stop" onPress={this.onStop} />
				
			</Screen>		
		);
	}
	

}