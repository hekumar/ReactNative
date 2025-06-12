import React from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import Product from './Product';

const ProductList = ({ data: products }) => {

    const handleProductPress = () => {
        console.log('Product pressed');
    };

    const handleColorSelect = (color) => {
        console.log('Color selected:', color);
    };

    return (
        <>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                horizontal="true"
                renderItem={({ item: { id,
                    brand,
                    image,
                    title,
                    description,
                    price,
                    discount,
                    category,
                    color, } }) => {
                    return (<View key={id} style={styles.NestedscrollView1}>
                        <Product
                            {...{
                                id,
                                image,
                                title,
                                description,
                                price,
                                originalPrice: price,
                                discount,
                                tag: brand,
                                category,
                                colors: [
                                    { name: 'Black', value: '#000000' },
                                    { name: 'White', value: '#ffffff' },
                                    { name: color, value: '#ff0000' },
                                    { name: 'Blue', value: '#0066cc' }
                                ]
                            }}

                            onPress={handleProductPress}
                            onColorSelect={handleColorSelect}
                        />
                    </View>)
                }}
            />
        </>

    )
}

const styles = StyleSheet.create({
    NestedscrollView: {
        overflow: 'scroll'
    },
    NestedscrollView1: {
        maxWidth: 400
    },
    NestedText: {
        margin: 20
    }
})

export default ProductList
