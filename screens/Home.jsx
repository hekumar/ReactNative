import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductDetails from '../components/ProductDetails';
import LandingPage from './LandingPage';
import ProductReview from '../components/ProductReview';

const Stack = createNativeStackNavigator()

const Home = () => {
    return (
        <Stack.Navigator initialRouteName='LandingPage'>
            <Stack.Screen
                options={{
                    headerTransparent: true,
                    headerBlurEffect: 'extraLight',
                    headerTitleStyle: {
                        color: 'white',
                        fontSize: 24
                    }
                }}
                name='Details'
                component={ProductDetails}
            />
            <Stack.Screen options={{
                headerShown: false
            }}
                name='Review'
                component={ProductReview} />
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name='LandingPage'
                component={LandingPage}
            />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default Home;
