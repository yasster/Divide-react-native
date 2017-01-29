import React, { Component } from 'react';
import { View, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from './login-form';

export default class Login extends Component {
    render() {
        return(
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

const styles = StyleSheet.create ( {
    container: {
    backgroundColor: '#ecf0f1',
    flex: 1,
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 0.5,
        justifyContent: 'center'
    },
    logo: {
        width:250,
        height: 200
    }
} );
