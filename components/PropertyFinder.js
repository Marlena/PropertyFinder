import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

import SearchPage from './SearchPage';

export default class PropertyFinder extends Component<{}> {
  render() {
    return (
        <NavigatorIOS
            style={styles.container}
            initialRoute={{
              title: 'Property Finder',
              component: SearchPage
            }}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    flexDirection: 'column'
  }
});
