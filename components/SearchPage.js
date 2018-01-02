import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  ActivityIndicator
} from 'react-native';

import SearchResults from './SearchResults';

function urlForQueryAndPage(key, value, pageNumber) {
  const data = {
    country: 'uk',
    pretty: '1',
    encoding: 'json',
    listing_type: 'buy',
    action: 'search_listings',
    page: pageNumber,
    message: ''
  };

  data[key] = value;

  const queryString = Object.keys(data)
      .map(key => key + '=' + encodeURIComponent(data[key]))
      .join('&');

  return 'https://api.nestoria.co.uk/api?' + queryString;
}

export default class SearchPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchString: 'london',
      isLoading: false
    };
  }

  onSearchTextChanged = (event) => {
    this.setState({searchString: event.nativeEvent.text})
  };

  executeQuery = (query) => {
    this.setState({ isLoading: true });

    fetch(query)
        .then(response => response.json())
        .then(json => this.handleResponse(json.response))
        .catch(error =>
          this.setState({
            isLoading:false,
            message: 'Something bad happened ' + error
          }));
  };

  handleResponse = (response) => {
    this.setState({ isLoading: false, message: ''});
    if (response.application_response_code.substr(0, 1) === '1') {
      this.props.navigator.push({
        title: 'Results',
        component: SearchResults,
        passProps: {listings: response.listings}
      });
    } else {
      this.setState({ message: 'Location not recognized. Please try again'});
    }
  };

  onSearchPressed = () => {
    const query = urlForQueryAndPage('place_name', this.state.searchString, 1);
    this.executeQuery(query);
  };

  render() {

    const spinner = this.state.isLoading ? <ActivityIndicator size='large'/> : null;

    return (
        <View style={styles.container}>
          <Text style={styles.description}>
            Search for Houses to buy!
          </Text>
          <Text style={styles.description}>
            Search by place-name or postcode
          </Text>
          <View style={styles.flowRight}>
          <TextInput
              style={styles.searchInput}
              value={this.state.searchString}
              onChange={this.onSearchTextChanged}
              placeholder='Search by name or postcode'
            />
          <Button
            onPress={this.onSearchPressed}
            color='#48BBEC'
            title='Go'
            />
          </View>
          <Image
            source={require('../assets/house.png')}
            style={styles.image}
          />
          {spinner}
          <Text style={styles.description}>{this.state.message}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    marginBottom:20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  image: {
    width: 217,
    height: 138
  }

});
