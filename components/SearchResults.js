'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableHighlight
} from 'react-native';

import ListItem from './ListItem';

export default class SearchResults extends Component {

  static propTypes = {
    listings: PropTypes.object.isRequired
  };

  keyExtractor = (item, index) => index;

  renderItem = ({item, index}) => {
    return (
        <ListItem
          item={item}
          index={index}
          onPressItem={this.onPressItem}
        />
    )
  };

  onPressItem = (index) => {
    console.log("Pressed row: " + index);
  };

  render() {

    return (
        <FlatList
            data={this.props.listings}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
          />
    )
  }
}
