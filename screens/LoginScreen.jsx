import React, { useState } from 'react'
import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native'
import TextInputComponent from './TextInputComponent'
import loginScreenStyles from '../styles/loginScreenStyles'

const LoginScreen = ({ setActiveScreen }) => {
  const [userLoginCredential, setUserLoginCredential] = useState({
    email: '',
    password: ''
  })

  const handleLogin = () => {
    console.log('====================================')
    console.log(userLoginCredential)
    console.log('====================================')
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={loginScreenStyles.firstContainer}></View>
      <View style={loginScreenStyles.secondContainer}>
        <Image
          resizeMode='cover'
          source={{
            uri: 'https://th.bing.com/th/id/OIP.B_sdRpRCFSkWtUhRkN1gDwHaFj?rs=1&pid=ImgDetMain'
          }}
          style={{ width: 100, height: 100 }}
        />
      </View>
      <View style={loginScreenStyles.loginContainer}>
        <View>
          <TextInputComponent
            type='email'
            placeholder='Enter your email'
            onChange={text =>
              setUserLoginCredential(prevValues => ({
                ...prevValues,
                email: text
              }))
            }
          />
          <TextInputComponent
            type='password'
            placeholder='Enter your password'
            onChange={text =>
              setUserLoginCredential(prevValues => ({
                ...prevValues,
                password: text
              }))
            }
          />
          <TouchableHighlight
            style={{
              height: 50,
              width: 380,
              borderWidth: 1,
              borderRadius: 20,
              backgroundColor: 'purple'
            }}
            onPress={handleLogin}
          >
            <View
              style={{
                height: 50,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text style={{ color: 'white' }}>Login</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text>Remember Me</Text>
          <Text>Forgot Password?</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 30 }}>
          <Pressable
            onPress={() => {
              setActiveScreen('signup')
            }}
          >
            <Text>Alreay have an account?</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default LoginScreen
