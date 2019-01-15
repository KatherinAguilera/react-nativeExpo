import React, { Component } from 'react';
import {
  Text
} from 'react-native';
import { connect } from 'react-redux';
import API from '../utils/api';
import Home from './screens/containers/home';
import Header from './sections/components/header';
import SuggestionList from './videos/containers/suggestion-list';
import CategoryList from './videos/containers/category-list.js';
// import Player from './player/containers/player';
import Movie from './screens/containers/movie';

class AppLayout extends Component {
  async componentDidMount() {
    const categoryList = await API.getMovies();
    this.props.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    })
    const suggestionList = await API.getSuggestion(10);
    this.props.dispatch({
      type: 'SET_SEGGESTION_LIST',
      payload: {
        suggestionList
      }
    })
  }
  render() {
    // si muestra una panatalla o la otra si selecciona una movie la muestre
    if (this.props.selectedMovie) {
      return <Movie />
    }

    return (
      <Home>
        <Header />
        <CategoryList />
        <SuggestionList />
      </Home>
    )
  }
}

function mapStateToProps(state) {
  return {
    selectedMovie: state.selectedMovie,
  }
}

export default connect(mapStateToProps)(AppLayout);