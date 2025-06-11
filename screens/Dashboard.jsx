import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text>Dashboard Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Dashboard

// option 1 -> tab based navigation and show login and sign up -> wrong

// option 2 -> landing page with stack navigation (switch between login and sign up and AuthenticatedComponent)

// AuthenticatedComponent (header --> hide) -> tab navigation
