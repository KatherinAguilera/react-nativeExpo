import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  // componente para poner imagenes de fondo
  ImageBackground,
} from 'react-native';

 function CategoryListLayout(props) {
  return (
    <ImageBackground
      source={require('../../../assets/backgronund.png')}
      style={styles.container}
      >
      <Text style={styles.title}>{props.title}</Text>
      {props.children}
    </ImageBackground>
  )
}

 const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 0,
  },
  title: {
    color: '#4c4c4c',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  }
})

 export default CategoryListLayout