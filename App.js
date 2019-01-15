import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import API from './utils/api';
import CategoryList from './src/videos/containers/category-list.js';
import Player from './src/player/containers/player';
import { Provider } from 'react-redux';
import store from './store';


export default class App extends Component {
  state = {
    // suggestionList: [],
    // categoryList: [],
  }
  async componentDidMount() {
    const categoryList = await API.getMovies();
    // enviar los elementos
    store.dispatch({
      // nombre de la accion 
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    })
    const suggestionList = await API.getSuggestion(10);
    store.dispatch({
      type: 'SET_SEGGESTION_LIST',
      payload: {
        suggestionList
      }
    })
  }
  render() {
    return (
      <Provider
      store={store}
    >
      <Home>
        <Header />
        <Player />
        <Text></Text>
        <Text></Text>
        <CategoryList/>
        <SuggestionList />
      </Home>
    </Provider>
    );
  }
}

