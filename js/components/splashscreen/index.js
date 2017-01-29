
import React, { Component } from 'react';
import { Image } from 'react-native';
import LoginForm from './LoginForm';

//const splashscreen = require('../../../img/splashscreen.png');

export default class SplashPage extends Component {

  static propTypes = {
    navigator: React.PropTypes.shape({}),
  }

  componentWillMount() {
    const navigator = this.props.navigator;
    setTimeout(() => {
      navigator.replace({
        id: 'home',
      });
    }, 1500);
  }

  render() { // eslint-disable-line class-methods-use-this
    return (      
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                    style={styles.logo}
                    source={require('../../image/divideLogo.png')}
                    />
                </View>
                <View style={styles.formContainer}>
                    <LoginForm />
                </View>
            </View>
      </KeyboardAvoidingView>
    );
  }
}
