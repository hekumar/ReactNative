import React, { useContext, useState } from 'react'
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
import TextInputComponent from '../components/common/TextInputComponent'
import loginScreenStyles from '../styles/loginScreenStyles'
import { authenticateUser } from '../services/authService'
import { AuthContext } from '../contexts/authContext'

const LoginScreen = ({ navigation, setActiveScreen }) => {
  console.log('navigation from Login')

  const { setAuth } = useContext(AuthContext)

  const [userLoginCredential, setUserLoginCredential] = useState({
    username: 'emilys',
    password: 'emilyspass'
  })

  const handleLogin = async () => {
    try {
      const result = await authenticateUser(userLoginCredential)
      if (result && result.accessToken) {
        // cache the access token, reffresh token , also expiry time
        // set the profile in the state
        // navigate to home or any authenticated route
        const { accessToken, refreshToken, ...user } = result
        setAuth({
          isAuthenticated: Boolean(result.accessToken),
          user,
          accessToken,
          refreshToken
        })
        navigation.navigate('Authenticated')
      }
      //   result.accessToken

      console.log('RESULT IN COMPONENT...')
    } catch (error) {
      console.log('ERROR in Authentication...', error.message)
    }
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
            value={userLoginCredential.username}
            placeholder='Enter your email'
            onChange={text =>
              setUserLoginCredential(prevValues => ({
                ...prevValues,
                username: text
              }))
            }
          />
          <TextInputComponent
            type='password'
            placeholder='Enter your password'
            value={userLoginCredential.password}
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
        <View
          style={{ flexDirection: 'row', justifyContent: 'center', margin: 30 }}
        >
          <Pressable
            onPress={() => {
              // setActiveScreen('signup')
              navigation.navigate('Signup')
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
