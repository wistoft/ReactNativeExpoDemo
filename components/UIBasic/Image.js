import React from 'react';
import { Image as ReactNativeImage, StyleSheet } from 'react-native';


/*
 * props:
 * 	title
 */
export default class Image extends React.Component {

	render() {
		return (

			<ReactNativeImage
				{...this.props}
				style={[styles.image, this.props.style]}
			/>
			
		);
	}
	

}

let styles = StyleSheet.create({
	image :{
		margin: 10,
		marginBottom: 0,					//to avoid double padding between images
	},
});