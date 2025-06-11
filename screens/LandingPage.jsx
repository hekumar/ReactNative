import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AuthContext } from '../contexts/authContext'
import ProductList from '../components/ProductList'

const LandingPage = () => {
  const { auth } = useContext(AuthContext)
  return (
    <View style={styles.container}>
      <ProductList></ProductList>
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
