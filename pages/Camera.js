import React from 'react';
import { Text, View, TouchableOpacity, Button, Image } from 'react-native';
import { Camera, Permissions } from 'expo';

export default class CameraPage extends React.Component {

	state = {
		hasCameraPermission: null,
		type: Camera.Constants.Type.back,
		dataUrl : null
	}

	async componentWillMount() {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({ hasCameraPermission: status === 'granted' });
	}


	render() {
		
		if (!this.state.hasCameraPermission) {
			
			return <Text>No access to camera</Text>;

		} else {

			if (this.state.dataUrl){
				return this.renderPictureView();
			} else {
				return this.renderCamaraView();
			}
		}
	}

	//shows the picture.
	renderPictureView() {
		return	(
			<View style={{ flex: 1 }}>
				
				<Text>What a picture!</Text>
				
				<Image source={{uri: this.state.dataUrl}} style={{flex: 1}} />

			</View>
		)
	}

	async takePicture() {
		if (this.camera) {
			
			let photo = await this.camera.takePictureAsync({
				base64: true
			});
			
			this.setState({dataUrl : "data:image/jpg;base64," + photo.base64});

		} else {
			console.log("no camara variable");
		}
	}

	//shows the camera stream, so a picture can be taken.
	renderCamaraView() {

		return (

			<View style={{ flex: 1 }}>
				<Camera 
						style={{ flex: 1 }} type={this.state.type}
						ref={ref => { this.camera = ref; }} 
					>
					<View
							style={{
								flex: 1,
								backgroundColor: 'transparent',
								flexDirection: 'row',
							}}
						>
						<TouchableOpacity
								style={{
									flex: 0.1,
									alignSelf: 'flex-end',
									alignItems: 'center',
								}}
								onPress={() => {
									this.setState({
										type: this.state.type === Camera.Constants.Type.back
										? Camera.Constants.Type.front
										: Camera.Constants.Type.back,
									});
								}}
							>
							
							<Text
								style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
								{' '}Flip{' '}
							</Text>
							
							<Button title="Snap" onPress={this.takePicture.bind(this)} />

						</TouchableOpacity>
					</View>
				</Camera>
			</View>
		);

	}


}