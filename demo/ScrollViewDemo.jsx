import React from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import { products } from '../data'

const categoryData = [
  { "id": 1, "name": "Fruits", "icon": "🍎" },
  { "id": 2, "name": "Vegetables", "icon": "🥦" },
  { "id": 3, "name": "Dairy", "icon": "🧀" },
  { "id": 4, "name": "Beverages", "icon": "🥤" },
  { "id": 5, "name": "Snacks", "icon": "🍪" },
  { "id": 6, "name": "Bakery", "icon": "🍞" },
  { "id": 7, "name": "Meat", "icon": "🍗" },
  { "id": 8, "name": "Seafood", "icon": "🦐" }
]

const ScrollViewDemo = () => {
  return (
    <View style={{ marginTop: 60 }}>

      <ScrollView
        style={styles.NestedscrollView}
        nestedScrollEnabled={true}
      >
        <ScrollView horizontal={true} style={{ backgroundColor: "red", height: 240, marginVertical: 20 }}>
          {/* {products.map(item => (
            <View key={item.id} style={styles.NestedscrollView1}>
              <Text style={styles.NestedText}>{item.title}</Text>
              <Text style={styles.NestedText}>{item.description}</Text>
              <Text style={styles.NestedText}>{item.price}</Text>
              <Text style={styles.NestedText}>{item.category}</Text>
            </View>
          ))} */}

          {categoryData.map((item) => {
            return (<View key={item.id} style={{ height: 200, backgroundColor: 'grey' }}>
              <Text style={{ fontSize: 30, margin: 10, padding: 10 }}>{item.icon}</Text>
              <Text style={{ color: 'white', fontSize: 30, padding: 10 }}>{item.name}</Text>
            </View>)
          }
          )}

        </ScrollView>

        {/* <ScrollView style={{ backgroundColor: "green" }}>
          <View>
            {products.map(item => (
              <View key={item.id} style={styles.NestedscrollView1}>
                <Text style={styles.NestedText}>{item.title}</Text>
                <Text style={styles.NestedText}>{item.description}</Text>
                <Text style={styles.NestedText}>{item.price}</Text>
                <Text style={styles.NestedText}>{item.category}</Text>
              </View>
            ))}
          </View>
        </ScrollView> */}
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
      </ScrollView>
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

export default ScrollViewDemo
