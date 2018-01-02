import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';

import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableHighlight,
  Image
} from 'react-native';

export default class ListItem extends React.PureComponent {

  static propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onPressItem: PropTypes.func.isRequired
  };

  onPress = () => {
    this.props.onPressItem(this.props.index);
  };

  render() {
    return (
        <TouchableHighlight
            onPress={this.onPress}
            underlayColor = '#dddddd'>
          <View>
            <View style={styles.rowContainer}>
              <Image style={styles.thumb} source={{ uri: this.props.item.img_url }} />
              <View style={styles.textContainer}>
                <Text style={styles.price}>{this.props.item.price}</Text>
                <Text style={styles.title} numberOfLines={1}>
                  {this.props.item.title}
                </Text>
              </View>
            </View>
            <View style={styles.separator}/>
          </View>
        </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  textContainer: {
    flex: 1
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#656565',
  },
  title: {
    fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  }
});