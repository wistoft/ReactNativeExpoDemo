import React from 'react';
import { View, WebView } from 'react-native';

import { createStackNavigator } from 'react-navigation';

import Screen from "../components/UIBasic/Screen";
import Button from "../components/UIBasic/Button";


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
							<Button title={pageName}
								onPress={() => this.onOpenPage(pageName)}
								/>
							<View style={{flex:0.02}}/>
						</View>
					);
				});
			}

		//the view

			return (
				<Screen
						title="StackNavigation"
						onMenuPress={this.props.screenProps.toogleDrawer}
						>			

					<PageButtons />
					
				</Screen>
			);
	}

}



export default class StackNavigationPage extends React.Component {
	
	getPages() {
		return (
			{ Page1 : (

					<WebView
						style={{flex: 1, backgroundColor: 'blue'}} 
						source={{uri: 'https://player.vimeo.com/video/255698341'}}
					/>
					
				)
			, Page2 : (

					<WebView
						style={{flex: 1, backgroundColor: 'green'}} 
						source={{ html: '<iframe src="https://player.vimeo.com/video/255698341" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' }}
					/>
					
				)
			, Page3 : (

				<View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', backgroundColor: 'red' }}>
					<Button title="Login"
						onPress={() => this.onLogin()}
					/>
					<Button title="Open Market"
						onPress={() => this.onOpenMarket()}
					/>
					<WebView
						style={{width: 300, height: 300, backgroundColor: 'green'}} 
						source={{uri: 'https://player.vimeo.com/video/255698341'}}
					/>
				</View>

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
