
import React, { Component } from 'react';
import { Image, KeyboardAvoidingView, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { Container, Button, View, H3 } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import myTheme from '../../themes/base-theme';
import styles from './styles';
import LoginForm from './LoginForm';

const launchscreenBg = require('../../../img/launchscreen-bg.png');
const launchscreenLogo = require('../../../img/divide-logo.png');

class Home extends Component { // eslint-disable-line

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }

  render() {
    return (
      <Container theme={myTheme}>
        <Image source={launchscreenBg} style={styles.imageContainer}>
          <View style={styles.logoContainer}>
            <Image source={launchscreenLogo} style={styles.logo} />
          </View>
          <View style={{ alignItems: 'center', marginBottom: 30, backgroundColor: 'transparent' }}>
          </View>
          <View>
            <Button
              style={{ backgroundColor: '#6FAF98', alignSelf: 'center',  }}
              onPress={this.props.openDrawer}
            >
                Lets Go!
            </Button>
          </View>
        </Image>
      </Container>
    );
  }
}

function bindActions(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindActions)(Home);
