
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { Content, Text, List, ListItem, Icon, View } from 'native-base';

import navigateTo from '../../actions/sideBarNav';
import sidebarTheme from './sidebar-theme';
import styles from './style';

const drawerCover = require('../../../img/drawer-cover.png');
const drawerImage = require('../../../img/divide-logo.png');

class SideBar extends Component {

  static propTypes = {
    navigateTo: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4,
    };
  }

  navigateTo(route) {
    this.props.navigateTo(route, 'home');
  }

  render() {
    return (
      <Content
        theme={sidebarTheme}
        style={styles.sidebar}
      >
        <Image source={drawerCover} style={styles.drawerCover}>
          <Image
            square
            style={styles.drawerImage}
            source={drawerImage}
          />
        </Image>
        <List>
          <ListItem button iconLeft onPress={() => this.navigateTo('anatomy')} >
            <View style={styles.listItemContainer}>
              <View style={[styles.iconContainer, { backgroundColor: '#0209D8', paddingLeft: 11 }]}>
                <Icon name="ios-home" style={styles.sidebarIcon} />
              </View>
              <Text style={styles.text}>Home</Text>
            </View>
          </ListItem>
          <ListItem button iconLeft onPress={() => this.navigateTo('badge')}>
            <View style={styles.listItemContainer}>
              <View style={[styles.iconContainer, { backgroundColor: '#4DCAE0' }]}>
                <Icon name="ios-camera" style={styles.sidebarIcon} />
              </View>
              <Text style={styles.text}>Add</Text>
            </View>
          </ListItem>
          <ListItem button iconLeft onPress={() => this.navigateTo('button')} >
            <View style={styles.listItemContainer}>
              <View style={[styles.iconContainer, { backgroundColor: '#5cb85c', paddingLeft: 9 }]}>
                <Icon name="ios-people" style={styles.sidebarIcon} />
              </View>
              <Text style={styles.text}>Groups</Text>
            </View>
          </ListItem>
          <ListItem button iconLeft onPress={() => this.navigateTo('card')} >
            <View style={styles.listItemContainer}>
              <View style={[styles.iconContainer, { backgroundColor: '#877CA6' }]}>
                <Icon name="ios-clock-outline" style={styles.sidebarIcon} />
              </View>
              <Text style={styles.text}>History</Text>
            </View>
          </ListItem>
        </List>
      </Content>
    );
  }
}

function bindAction(dispatch) {
  return {
    navigateTo: (route, homeRoute) => dispatch(navigateTo(route, homeRoute)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(SideBar);
