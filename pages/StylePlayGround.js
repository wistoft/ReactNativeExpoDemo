import React from 'react';
import { View, Text, Button, WebView } from 'react-native';

import { createStackNavigator } from 'react-navigation';


class SubPage extends React.Component {
	
	render() {
		return this.props.navigation.getParam("page");
	}

}

class MenuPage extends React.Component {

	onOpenPage(pageName) {
		const pageToShow = this.pages[pageName];
		this.props.navigation.navigate('SubPage', {page:pageToShow})
	}
		
	render() {

		//the pages

			this.pages = this.props.screenProps.pages;

		//the dynamic buttons

			const PageButtons = ()=>{
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
				<View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
								
					<Text>Pages</Text>
					<View style={{flex:0.04}}/>

					<PageButtons />
					
				</View>
			);
	}

}



export default class RodPage extends React.Component {
	
	getPages() {
		return (
			{ page1 : (

					<WebView
						style={{flex: 1, backgroundColor: 'blue'}} 
						source={{uri: 'https://player.vimeo.com/video/255698341'}}
					/>
					
				)
			, page2 : (

					<WebView
						style={{flex: 1, backgroundColor: 'green'}} 
						source={{ html: '<iframe src="https://player.vimeo.com/video/255698341" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' }}
					/>
					
				)
			, page3 : (

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
				Menu: MenuPage,
				SubPage: SubPage,
			},{
				initialRouteName: 'Menu',
			}
		);

		return <StackNavigation screenProps={{pages:this.getPages()}} />;
	}
}
