import React from 'react';
import { View, WebView } from 'react-native';

import { createStackNavigator } from 'react-navigation';

import Screen from "../components/UIBasic/RNDScreen";
import Button from "../components/UIBasic/RNDButton";


class SubPage extends React.Component {
	
	render() {
		return this.props.navigation.getParam("page");
	}

}

class MenuPage extends React.Component {

	onOpenPage(pageName) {
		const pageToShow = this.pages[pageName];
		this.props.navigation.navigate('SubPage', { page: pageToShow, pageTitle: pageName})
	}
		
	render() {
		
		//the pages

			this.pages = this.props.screenProps.pages;

		//the dynamic buttons

			const PageButtons = () => {
				return Object.keys(this.pages).map(pageName => {
					return (
						<View
							key={pageName}>
							<Button title={pageName} onPress={() => this.onOpenPage(pageName)} />
						</View>
					);
				});
			}

		//the view

			return (
				<Screen title="StackNavigation"	onMenuPress={this.props.screenProps.toogleDrawer}
						style={{
							alignItems: 'flex-start',
						}}
					>

					<PageButtons />
					
				</Screen>
			);
	}

}



export default class StackNavigationPage extends React.Component {
	
	getPages() {
		return (
			{ IFrame1 : (

					<WebView
						style={{flex: 1, backgroundColor: 'green'}} 
						source={{uri: 'https://player.vimeo.com/video/255698341'}}
					/>
					
				)
			, IFrame2 : (

					<WebView
						style={{flex: 1, backgroundColor: 'green'}} 
						source={{ html: '<iframe src="https://player.vimeo.com/video/255698341" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' }}
					/>
					
				)
			})
	}

	render() {
		
		const StackNavigation = createStackNavigator({
				Menu: {
					screen: MenuPage,
					navigationOptions: () => ({
						header: null,									//hide header on menu page. It has custom.
					}),
				},
				SubPage:  {
					screen: SubPage,
					navigationOptions: ({ navigation }) => ({
						title: navigation.getParam("pageTitle"),
					}),
				},
			},{
				initialRouteName: 'Menu',
			}
		);

		return <StackNavigation screenProps=
					{{
						pages: this.getPages(),
						toogleDrawer: this.props.navigation.toggleDrawer
					}} 
				/>;
	}
}
