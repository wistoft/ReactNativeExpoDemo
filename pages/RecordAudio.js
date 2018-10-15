import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import {Audio, Permissions} from "expo";

import Screen from "../components/UIBasic/RNDScreen";
import Button from "../components/UIBasic/RNDButton";
import Image from "../components/UIBasic/RNDImage";

export default class RecordAudioPage extends React.Component {

	state = {
		hasRecordingPermission : null,
		recordedAudio : null,
	}

	constructor(){
		super();

		//create

			this.recordingObject = new Expo.Audio.Recording();

		//fixes

			this.onStartRecording = this.onStartRecording.bind(this);
			this.onStopRecording = this.onStopRecording.bind(this);
			this.onPlay = this.onPlay.bind(this);
			this.onStop = this.onStop.bind(this);
	}
	
	async componentWillMount() {
		const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
		this.setState({ hasRecordingPermission: status === 'granted' });
	}

	async onStartRecording(){
		try {

			console.log("Preparing");

			await this.recordingObject.prepareToRecordAsync(Expo.Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
	
			await this.recordingObject.startAsync();
			
			console.log("Started");

		  } catch (error) {
			console.log("onStartRecording() - Could not start record: " + JSON.stringify(error));
		  }

	}
	
	async onStopRecording(){
		
			let status;

		//stop
		
			try {
				
				status = await this.recordingObject.stopAndUnloadAsync();
				
			} catch (error) {
				console.log("onStopRecording() - Could not stop recording: " + error.toString());
				console.log(JSON.stringify(error));
			}

		//use the result
			
			const url = this.recordingObject.getURI();
			console.log("Status: " + status);
			this.setState({recordedAudio: url})

	}
	
	async onPlay() {

		this.soundObject = new Expo.Audio.Sound();

		await this.soundObject.loadAsync({uri: this.state.recordedAudio})

		await this.soundObject.playAsync();

		console.log("Playing");

	}
	
	async onStop() {
		await this.soundObject.stopAsync()
		console.log("stopped");
	}
	
	renderHasNoPermissions() {
		return (
			<Screen
					title="RecordAudio"
					onMenuPress={this.props.navigation.toggleDrawer}
					style={{
						alignItems: 'flex-start',
					}}
				>

				<Text>Can't record without permission.</Text>
				
			</Screen>		
		);
	}

	
	
	renderPlayButtons() {

		if (this.state.recordedAudio)
			return (
				<View>
					<Button title="Play" onPress={this.onPlay} />
					<Button title="Stop" onPress={this.onStop} />
				</View>
			);
		else
			return;
	}

	
	render() {
			if (!this.state.hasRecordingPermission)
				return this.renderHasNoPermissions();

			return (
				<Screen
						title="RecordAudio"
						onMenuPress={this.props.navigation.toggleDrawer}
						style={{
							alignItems: 'flex-start',
						}}
					>
				
					<Button title="Record" onPress={this.onStartRecording} />
					<Button title="Stop" onPress={this.onStopRecording} />
					
					{this.renderPlayButtons()}

				</Screen>		
			);
	}
	

}