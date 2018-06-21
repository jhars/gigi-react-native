import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label, Thumbnail} from 'native-base';
import LinkedInModal from 'react-native-linkedin';

export default class SocialLogin extends React.Component {

  async loginWithFacebook() {
    const {type,token} = await Expo.Facebook.logInWithReadPermissionsAsync('1785738094839350', { permissions: ['public_profile'] })
    if(type == 'success') {
      const credential = firebase.auth.FacebookAuthProvider.credential(token)
      firebase.auth().signInWithCredential(credential).catch((error) => {
        console.log(error )
      })
    }
  }

  constructor(props){
    super(props);
    this.state = {
      name: 'Gilligan',
      showName: true,
      message: this.props.message
    }
  }

  render() {
    return([

        <Form>
            <Button style={styles.facebook}
                full
                rounded
                primary
                onPress={() => this.loginWithFacebook()}
            >
                <Text style={{ color: 'white' }}> Login with Facebook</Text>
            </Button>
        </Form>,

        <Form style={styles.linkedin}>
          <LinkedInModal
            clientID="8666x2xlzhuyz8"
            clientSecret="flH6g5zwLBt4gk6N"
            redirectUri="https://localhost:19000/"
            onSuccess={token => console.log(token)}
          />

        </Form>



    ])
  }
}



//================================================================//
const styles = StyleSheet.create({
  linkedin: {
    alignItems: 'center',
    width:225,
    padding: 15,
    marginTop: 30,
    marginLeft: 1,
    marginRight: 1,
    borderStyle: 'solid',
    borderRadius: 30,
    borderWidth: 0.5,
    borderColor: 'black',


  },
  facebook: {
      padding: 50,
      marginTop: 75
  },
});


AppRegistry.registerComponent('gigi-native-app', () => App);
