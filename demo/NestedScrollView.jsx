import React from 'react';
import { Text } from 'react-native';
import { ScrollView } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { products } from '../data';
import { FlatList } from 'react-native';

const data = [
    {
        "category": "Fruits",
        "items": [
            { "name": "Apple", "price": 1.2 },
            { "name": "Banana", "price": 0.5 },
            { "name": "Cherry", "price": 2.0 }
        ]
    },
    {
        "category": "Vegetables",
        "items": [
            { "name": "Carrot", "price": 0.8 },
            { "name": "Lettuce", "price": 1.0 },
            { "name": "Spinach", "price": 1.5 }
        ]
    },
    {
        "category": "Dairy",
        "items": [
            { "name": "Milk", "price": 1.3 },
            { "name": "Cheese", "price": 2.5 },
            { "name": "Yogurt", "price": 1.0 }
        ]
    }
]

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


const NestedScrollView = () => {
    return (
        <View style={{ marginTop: 50 }}>
            <Text>Hello World</Text>
            {/* <ScrollView nestedScrollEnabled={true} horizontal={false}> */}

            <ScrollView
                horizontal={true}
            >
                {categoryData.map((item) => {
                    <View key={item.id}>  <View>{item.icon}</View><Text>{item.name}</Text></View>
                }
                )}
            </ScrollView>
            {/* <View>
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
                </View> */}


            {/* </ScrollView> */}

        </View>
    );
}

const styles = StyleSheet.create({})

export default NestedScrollView;

// scrollView -> having performance

// scrollview --> scroll view


// category  horizontal scroll
// products
