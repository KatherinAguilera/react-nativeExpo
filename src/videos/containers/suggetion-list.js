import React, { Component } from 'react';
import {
  //listas
  FlatList,
  Text
} from 'react-native';

class SuggestionList extends Component {
  render() {
    //array de objetos para almacenar las listas
    const list = [
      {
        title: 'leo',
        key: '1'
      },
      {
        title: 'nidas',
        key: '2'
      }
    ]
    return (
      <FlatList
        data={list}
        renderItem={({ item }) => <Text>{item.title}</Text> }
      />
    )
  }
}

export default SuggestionList