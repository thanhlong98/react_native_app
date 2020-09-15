import React from 'react'
import { Image, View, StyleSheet } from 'react-native'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('@images/logo.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  image: {
    width: '50%',
    resizeMode: 'contain'
  }
})

export default SplashScreen
