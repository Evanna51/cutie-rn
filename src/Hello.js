import React, { Component } from 'react';
import {Text, View, Button, StyleSheet, ScrollView,} from 'react-native';

export default class HelloWorld extends Component {
	render() {
		return (
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<Text>Hi, What's up </Text>
				<Button title={"Today 1"} onPress={()=>{}} style={styles.button} color="#f194ff"/>
			</View>
		);
	}

}
const styles = StyleSheet.create({
	button:{
		width:40,
		height:40,
		borderRadius:30,
		backgroundColor: '#333900'
	}
});
