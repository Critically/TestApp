import { StyleSheet, Text, SafeAreaView, FlatList, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import * as counterSelectors from '../redux/selectors'
import { navigationRef } from '../utils/navigation'

export default function FirstScreen() {
  const dataList = useSelector(counterSelectors.dataList)

  const onPress = (urlToImage) => {
    navigationRef.navigate('Second', {
      urlToImage: urlToImage
    })
  }

  const ItemView = ({ item, index }) => {
    return (
      <View style={styles.item}>
        {item.urlToImage && (
          <TouchableOpacity style={styles.imageContainer} onPress={() => onPress(item.urlToImage)}>
            <Image source={{ uri: item.urlToImage }} resizeMode="contain" style={styles.image} />
          </TouchableOpacity>
        )}
        <View style={styles.description}>
          <Text>{item.author ? item.author : 'Не указан'}</Text>
          <Text>{item.title ? item.title : 'Не указан'}</Text>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        removeClippedSubviews={true}
        showsVerticalScrollIndicator={false}
        data={dataList.articles}
        keyExtractor={(item, index) => index}
        renderItem={ItemView}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ececec',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%'
  },
  imageContainer: { width: '20%' },
  image: {
    flex: 1
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#ffff',
    alignSelf: 'center',
    marginTop: 15
  },
  description: {
    marginLeft: '3%',
    width: '75%'
  }
})
