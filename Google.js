import React, {Component} from 'react';
import { StyleSheet, Text, View,TextInput,ScrollView } from 'react-native';
import {WebView} from "react-native-webview";

export default class Google extends Component {
  render() {
    return (
      
          <View style={{ flex: 1}}>
            <WebView style={{width: 370, height: 320}}
              source={{uri: 'https://www.google.com'}}
              startInLoadingState={true}
              scalesPageToFit={true}
            />
          </View>
       
    );
  }
}