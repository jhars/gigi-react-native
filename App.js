import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label, Thumbnail} from 'native-base';
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

    this.state = {
      value: false
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        console.log(user)
      }
    })
  }

  async loginWithFacebook() {
    const {type,token} = await Expo.Facebook.logInWithReadPermissionsAsync('1785738094839350', { permissions: ['public_profile'] })
    if(type == 'success') {
      const credential = firebase.auth.FacebookAuthProvider.credential(token)
      firebase.auth().signInWithCredential(credential).catch((error) => {
        console.log(error )
      })
    }
  }

  render() {
    return ([

      <View style={styles.container}>
        <Image
          source={require('./assets/gigi-logo.png')}
          style={styles.image}
        />
      </View>,

      <Container style={styles.button}>
        <Form>

            <Button style={{ marginTop: 10 }}
                full
                rounded
                primary
                onPress={() => this.loginWithFacebook()}
            >
                <Text style={{ color: 'white' }}> Login with Facebook</Text>
            </Button>

        </Form>
      </Container>

    ]);
  }
}

//================================================================//
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        padding: 15
    },
    image: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 250,
      height: 250,
      resizeMode:'contain'
    },
});
