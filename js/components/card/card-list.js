
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Button, Icon, Card, CardItem, Text } from 'native-base';

import styles from './styles';

const {
  replaceAt,
} = actions;

class NHCardList extends Component {

  static propTypes = {
    replaceAt: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  replaceAt(route) {
    this.props.replaceAt('cardList', { key: route }, this.props.navigation.key);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Button transparent onPress={() => this.replaceAt('card')}>
            <Icon name="ios-arrow-back" />
          </Button>

          <Title> People Owing you debt! </Title>
        </Header>

        <Content padder>
          <Card style={[styles.mb, { flex: 0 }]}>
            <CardItem>
              <Icon name="ios-person" style={{ color: '#DD5044' }} />
              <Text>Friend1</Text>
            </CardItem>
            <CardItem>
              <Icon name="ios-person" style={{ color: '#3B579D' }} />
              <Text>Friend2</Text>
            </CardItem>
            <CardItem>
              <Icon name="ios-person" style={{ color: '#55ACEE' }} />
              <Text>Friend3</Text>
            </CardItem>
            <CardItem>
              <Icon name="ios-person" style={{ color: '#FF4500' }} />
              <Text>Friend4</Text>
            </CardItem>
            <CardItem>
              <Icon name="ios-person" style={{ color: '#007BB6' }} />
              <Text>Friend5</Text>
            </CardItem>
            <CardItem>
              <Icon name="ios-person" style={{ color: '#D62727' }} />
              <Text>Friend6</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    replaceAt: (routeKey, route, key) => dispatch(replaceAt(routeKey, route, key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(NHCardList);
