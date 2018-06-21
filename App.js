import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label, Thumbnail} from 'native-base';
import SocialLogin from './app/components/SocialLogin';

import * as firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyClef4i6edmDEjYHNcvCOholiNhoAx8jOo",
  authDomain: "gigi-native-app.firebaseapp.com",
  databaseURL: "https://gigi-native-app.firebaseio.com",
  projectId: "gigi-native-app",
  storageBucket: "gigi-native-app.appspot.com",
};

firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {

  constructor (props) {
    super(props);
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        console.log(user)
      }
    })
  }

  render() {
    return ([

      <View style={styles.container}>
        <Image
          source={require('./assets/gigi-logo.png')}
          style={styles.image}
        />
      </View>,
      <View style={styles.social}>
        <SocialLogin />
      </View>
    ]);
  }
}

AppRegistry.registerComponent('gigi-native-app', () => App);

//================================================================//
const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
      justifyContent: 'center',
  },
  image: {
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 250,
    resizeMode:'contain',
  },
  social: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
