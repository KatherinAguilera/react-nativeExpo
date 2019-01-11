import React, { Component } from 'react';
import {
  FlatList,
  Text
} from 'react-native';
import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Separator from '../components/vertical-separator';
import Suggestion from './../components/suggestion';

class SuggestionList extends Component {
  // funcion empty
  renderEmtpy = () => <Empty text="No hay sugerencias :(" />
  itemSeparator = () => <Separator />
  // recibe nuestro item y devuelve componente
  renderItem = ({item})=>{
    return (
      <Suggestion {...item}/>
    )
  }
  render() {
    // si esta vacio esta lista muestra su componente EMPTY
    const list = [
      {
        title: 'Avengers',
        year: 2007,
        key: '1',
      },
      {
        title: 'Pokemon',
        year: 1995,
        key: '2'
      }
      ,
      {
        title: 'Naruto',
        year: 2008,
        key: '3'
      }
    ]
    return (
      <Layout
        title="Recomendado para ti"
        >
        <FlatList
          data={list}
          ListEmptyComponent={this.renderEmtpy}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={ this.renderItem }
        />
      </Layout>
    )
  }
}

export default SuggestionList