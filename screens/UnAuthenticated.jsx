import React from 'react'
import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './LoginScreen'
import SignUpScreen from './SignUpScreen'
import Authenticated from './Authenticated'
import AuthProvider from '../contexts/authContext'
import CartProvider from '../contexts/cartContext'

const Stack = createNativeStackNavigator()

const UnAuthenticated = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <CartProvider>
          <Stack.Navigator>
            <Stack.Screen
              options={{
                headerTransparent: true,
                headerBlurEffect: 'extraLight',
                headerTitleStyle: {
                  color: 'white',
                  fontSize: 24
                }
              }}
              name='Login'
              component={LoginScreen}
            />
            <Stack.Screen name='Signup' component={SignUpScreen} />
            <Stack.Screen
              options={{
                headerShown: false
              }}
              name='Authenticated'
              component={Authenticated}
            />
          </Stack.Navigator>
        </CartProvider>
      </AuthProvider>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})

export default UnAuthenticated

// you app can have multiple navigations but only one NavigationContainer
