import { StyleSheet, View, Image } from 'react-native'
import React from 'react'

export default function SecondScreen({ route }) {
  const { urlToImage } = route.params || {}
  return (
    <View style={{ flex: 1 }}>
      <Image source={{ uri: urlToImage }} resizeMode="contain" style={{ width: '100%', height: '100%' }} />
    </View>
  )
}

const styles = StyleSheet.create({})
