import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './LoginScreen'
import SignUpScreen from './SignUpScreen'
import Authenticated from './Authenticated'
import AuthProvider from '../contexts/authContext'
import CartProvider from '../contexts/cartContext'
import { SESSION_KEYS } from '../constants/appContants'

const Stack = createNativeStackNavigator()

const UnAuthenticated = () => {
  useEffect(() => {
    console.log("Unauthenticated component loaded.");

    const restoreAuthData = async (key, value) => {
      try {
        const result = await AsyncStorage.getItem(SESSION_KEYS.AUTH);
        console.log("From Async storage", result);
        
      } catch (e) {
        console.error("No Session or error restoring the session.");
      }
    };

  }, []);

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
                },
                headerBackVisible: false
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

/* Multiple Nested navigation */
// Navigation1 :  --> Login , signUp and Authenticated Components  -> will receieve navigation props for Navigation 1

// Authenticated -->  Tab Navigation (Navigation 2) --->( LandingPage -> productList), Account (logout), Cart, Dashboard --> will receieve navigation props for Navigation 2


// LandingPage-> Stack Navigation (Navigation 3) ----> Product Details -> go TO cart, -> review -> rating, seller etc.

// Security
/** Back button  */


// 1. Hardware back button
// 2. Enable auth guard for component --> useEffect hook -> on authenticated Component -> verify access token + isAuthenticated based on that allow or redirect to login page.
// 3. logged in + save the auth ---> returning scenario ( close the app and start again) --> show loading -> read the cache -> read the tokebn
// if access token is present and valid  ---> make the call to like "/me" (accept the access token and if valid then return user object)
// if access token is expired  ---> check the refresh token -> make a cal with (refresh token and access token) to get user object
// UI  check
// Accesstoken Not preset   ---> go to login

// if present
// backend Endpoint  /me
// payload expected --->   accessToken and refresh Token (optional)

// Access Token             Refresh Token
//  valid                   don't care (optional)   ---> /me will return user
// expired                   not provided ---> 401 unAuthenticated
// present and expired            valid       ---->  /me will return user but along with new accessToken and refreshToken
// expired                    expired  ----> 401 UnAuthenticated


// -------------

// Next session implementation
// hooks -->
// Async Storage and camera

// Authentication  -> identity (username/email/phone + password/otp) - check correct user -> proving your identity

// Authorization  ->  permission --

// Requesting access to some resource

