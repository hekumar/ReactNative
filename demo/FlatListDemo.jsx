import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { products } from '../data'

const FlatListDemo = () => {
  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View key={item.id} style={styles.NestedscrollView1}>
              <Text style={styles.NestedText}>{item.title}</Text>
              <Text style={styles.NestedText}>{item.description}</Text>
              <Text style={styles.NestedText}>{item.price}</Text>
              <Text style={styles.NestedText}>{item.category}</Text>
            </View>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  NestedscrollView: {},
  NestedscrollView1: {},
  NestedText: {
    margin: 20
  }
})

export default FlatListDemo
