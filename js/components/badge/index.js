
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, Badge, Footer, FooterTab } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';

class NHBadge extends Component { //eslint-disable-line

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      tab1: false,
    };
  }


  toggleTab1() {
    this.setState({
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false,
    });
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Title>Camera</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>
        <Content padder>
        </Content>
        <Footer >
          <FooterTab>
            <Button active={this.state.tab1} onPress={() => this.toggleTab1()} >
                Camera
              <Icon name="ios-camera-outline" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(NHBadge);
