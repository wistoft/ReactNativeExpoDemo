import React from 'react';
import { Text } from 'react-native';
import Screen from "../components/UIBasic/RNDScreen";
import Button from "../components/UIBasic/RNDButton";

import * as Util from "../services/UtilService";



export default class UtilPage extends React.Component {

	throwError = () =>{
		throw new Error("ExceptionErrorMessage");
	}

	rejectPromise = () =>{
		Promise.reject("PromiseRejection");
	}

	rejectPromiseDistant = () =>{
		Util.rejectPromise();
	}

	rejectPromiseDistantLocalCode = () =>{
		Util.rejectPromise(()=>{
				throw new Error("DistantPromiseRejectionLocalCode");
			})
			;
	}

	render() {
		
		return (
			<Screen title="Util" onMenuPress={this.props.navigation.toggleDrawer} >
				
				<Button title="throw Error" onPress={this.throwError} />
				
				<Button title="reject promise" onPress={this.rejectPromise} />
				
				<Button title="reject promise distant" onPress={this.rejectPromiseDistant} />
				
				<Button title="reject promise distant local code" onPress={this.rejectPromiseDistantLocalCode} />

			</Screen>
		); 

	}


}
