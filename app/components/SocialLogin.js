import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label, Thumbnail} from 'native-base';
import LinkedInModal from 'react-native-linkedin';

export default class LinkedinButton extends React.Component {

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     name: 'Gilligan',
  //     showName: true,
  //     message: this.props.message
  //   }
  // }
  //
  // static defaultProps = {
  //   message: 'Hi there'
  // }

  render() {
    return(
      // <View style={styles.linkedin}>
        <LinkedInModal style={styles.linkedin}
          clientID="8666x2xlzhuyz8"
          clientSecret="flH6g5zwLBt4gk6N"
          redirectUri="https://localhost:19000/"
          onSuccess={token => console.log(token)}
        />
      // </View>
    )
  }
}



//================================================================//
const styles = StyleSheet.create({
  linkedin: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  }
});


AppRegistry.registerComponent('gigi-native-app', () => App);
