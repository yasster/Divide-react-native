
const React = require('react-native');

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get('window').height;

module.exports = StyleSheet.create({
  imageContainer: {
    flex: 1,
    width: null,
    height: null,
  },
  logoContainer: {
    flex: 1,
    marginTop: deviceHeight / 2,
    alignVertical: 'center',
    marginBottom: 100,
  },
  logo: {
    position: 'relative',
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 20,
    left: (Platform.OS === 'android') ? 0 : 50,
    top: (Platform.OS === 'android') ? 90 : 60,
    width: 380,
    height: 200,
  },
  text: {
    color: '#D8D8D8',
    bottom: 6,
  },
  container: {
    backgroundColor: '#ecf0f1',
    flex: 1,
    },
  logoContainer: {
      alignItems: 'center',
      flexGrow: 0.5,
      justifyContent: 'center'
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
});
