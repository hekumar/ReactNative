import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AuthContext } from '../contexts/authContext'
import ProductList from '../components/ProductList'
import { getProductList } from '../services/productService'

const LandingPage = () => {
  const { auth } = useContext(AuthContext)
  const [data, setData] = useState([])

  useEffect(() => {
    const _fetchProductData = async () => {
      const { products } = await getProductList()
      setData(products)
    }

    _fetchProductData()
  }, [])
  return (
    <View style={styles.container}>
      <ProductList data={data}></ProductList>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'red',
    // alignItems: 'center',
    // justifyContent: 'center'
  }
})

export default LandingPage

// option 1 -> tab based navigation and show login and sign up -> wrong

// option 2 -> landing page with stack navigation (switch between login and sign up and AuthenticatedComponent)

// AuthenticatedComponent (header --> hide) -> tab navigation
