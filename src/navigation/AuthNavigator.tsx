import { createStackNavigator } from '@react-navigation/stack'
import SignInScreen from '@screens/signIn'
import SignUpScreen from '@screens/signUp'
import React from 'react'
import { AuthParamList } from '@utils'

const AuthStack = createStackNavigator<AuthParamList>()

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator headerMode='none'>
      <AuthStack.Screen name='SignIn' component={SignInScreen} />
      <AuthStack.Screen name='SignUp' component={SignUpScreen} />
    </AuthStack.Navigator>
  )
}

export default AuthNavigator
