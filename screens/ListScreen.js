
import React, { Component } from 'react';
// import {connect} from 'react-redux';
import { View, Text } from 'react-native';

// Set up list screen and connect to store
class ListScreen extends Component {

  constructor(props) {
      super(props); 
  }

  render() {

    return (
      <View>
        <Text>Lists from API will go here</Text>
      </View>
    );
  }
}

// Set header bar for list screen
ListScreen.navigationOptions = {
  title: 'Book lists'
};

export default ListScreen;
