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
  // key id para cada elemento optimizar redenderizado
  keyExtractor = item => item.id.toString()
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
    return (
      <Layout
        title="Recomendado para ti"
        >
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmtpy}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={ this.renderItem }
        />
      </Layout>
    )
  }
}

export default SuggestionList