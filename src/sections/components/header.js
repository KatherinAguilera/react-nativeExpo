import React from 'react';
import {
  Platform,
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView, // no pegue con la barra de notificacion de celular
} from 'react-native';

// parametro props
function Header(props) {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.container}>
          <Image
            source={require('../../../assets/logo.png')}
            style={styles.logo}
          />
          <View style={styles.right}>
            {props.children}
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 26,
    // parecido a backgroun-size de css hacer que se adapte al tamaño dado
    resizeMode: 'contain',
  },
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Platform.select ({
      android: 20,
    })
  },
  right: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor:'#70D6A8',
    paddingRight: 4,
    paddingLeft: 1,
  }
})

export default Header;
