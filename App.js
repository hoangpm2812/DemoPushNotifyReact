/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Picker, AppState, ToastAndroid} from 'react-native';
import PushController from './app/compnents/PushController'
import PushNotification from 'react-native-push-notification'

PushNotification.configure({
  //try to request to the server
  onRegister: function(token) {
    console.log( 'TOKEN:', token );
  },

  // (required) Called when a remote or local notification is opened or received
  onNotification: function(notification) {
      console.log( 'NOTIFICATION:', notification );

      setTimeout(() => {
        if (!notification['foreground']){
          ToastAndroid.show("You 've clicked ", ToastAndroid.SHORT)
        }
      }, 1);
      PushNotification.localNotificationSchedule({
        title: "Notification with my name",
        message: notification['name'],
        date: new Date(Date.now())  // in 60 seconds
      })
  },

  // ANDROID ONLY: GCM or FCM Sender ID (product_number) (optional - not required for local notifications, but is need to receive remote push notifications)
  senderID: "40877212325",

})

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      seconds: 5
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Picker style={styles.picker}
          selectedValue={this.state.seconds}
          onValueChange={(seconds) => this.setState({seconds})}
        >
          <Picker.Item label="5" value={5}/>
          <Picker.Item label="10" value={10}/>
          <Picker.Item label="15" value={15}/>
        </Picker>
        {/* <PushController /> */}
      </View>
    );
  }

  componentDidMount(){
    AppState.addEventListener('change', this.handleAppStateChange)
  }

  componentWillUnmount(){
    AppState.removeEventListener('change', this.handleAppStateChange)
  }

  handleAppStateChange = (appState) => {
    if (appState === 'background'){
      console.log('app is in background', this.state.seconds)
      PushNotification.localNotificationSchedule({
        //... You can use all the options from localNotifications
        message: "My Notification Message", // (required)
        date: new Date(Date.now() + (this.state.seconds * 1000)) 
      });
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  picker: {
    width: 100
  }
});
