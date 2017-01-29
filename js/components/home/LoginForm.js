import React, { Component } from 'react';
import { View, StyleSheet, Image, TextInput, TouchableOpacity, Text, Navigator, Button} from 'react-native';

export default class LoginForm extends Component {

constructor (props){
  super(props);
  this.state = {text: ""};
}

static propTypes = {
    openDrawer: React.PropTypes.func,
  }

    render() {
        return(

            <View style={styles.container}>
                <TextInput
                    placeholder="username or email"
                    placeholderTextColor="#bdc3c7"
                    style={styles.input}
                    //color="#2ecc71"
                    returnKeyType = "next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    onChangeText = {(text) => this.setState({text})}
                    value={this.state.text}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <TextInput
                    placeholder="password"
                    placeholderTextColor="#bdc3c7"
                    style={styles.input}
                    returnKeyType = "go"
                    secureTextEntry
                    //color="#7f8c8d"

                    ref={(input) => this.passwordInput = input}
                />



                <TouchableOpacity>
                  <Text style = {styles.buttonText1}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                 <Text style = {styles.buttonText2} >Sign Up</Text>
                </TouchableOpacity>
            </View>
        );
      }
}
const styles = StyleSheet.create ({
    container: {
        padding: 10,
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        marginBottom: 20,
        color: '#FFF',
        paddingHorizontal: 10
    },
    buttonText1: {
      color: "#2ecc71",
      textAlign:'center',
      padding:10
    },
    buttonText2: {
      color: "#7f8c8d",
      textAlign:'center',
      padding:10
    }
} );
