import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Picker, AppState, ToastAndroid, TouchableHighlight} from 'react-native';
import PushNotification from 'react-native-push-notification'
import NotifService from '../services/NotifService'
import { Actions } from 'react-native-router-flux'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class HomeContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      seconds: 5
    }

    this.notif = new NotifService(this.onRegister.bind(this), this.onNotif.bind(this))
  }

  render() {
    return (
      <View style={styles.container}>
      <TouchableHighlight style={{backgroundColor: 'green', width: 150, height: 50, alignItems: 'center', justifyContent: 'center'}}
                            onPress={() => {Actions.replace("flatList")}}
      >
          <Text>LIST DATA</Text>
      </TouchableHighlight>
        <Text style={styles.welcome} >Welcome to React Native!</Text>
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
      </View>
    );
  }

  componentDidMount(){
    AppState.addEventListener('change', this.handleAppStateChange)
  }

  componentWillUnmount(){
    AppState.removeEventListener('change', this.handleAppStateChange)
  }

  onRegister(token) {
      console.log('------------TOKEN : ' + JSON.stringify(token))
  }

  onNotif(notif) {
    console.log('------------NOTIFICATION : ' + JSON.stringify(notif))

    // setTimeout(() => {
    //     console.log("TIME OUT")
    //     this.notif.scheduleNotif('Notif from server', notif['name'], 1)
    //   }, 1);
  }

  handleAppStateChange = (appState) => {
    if (appState === 'background'){
      console.log('app is in background', this.state.seconds)
    //   PushNotification.localNotificationSchedule({
    //     //... You can use all the options from localNotifications
    //     message: "My Notification Message", // (required)
    //     date: new Date(Date.now() + (this.state.seconds * 1000)) 
    //   });
    this.notif.scheduleNotif("Title of HOME", "This is schedule notif after " + this.state.seconds + " seconds", this.state.seconds)
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
