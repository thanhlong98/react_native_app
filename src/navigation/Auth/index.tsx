import { _navigation } from '@constants'
import { createStackNavigator } from '@react-navigation/stack'
import SignInScreen from '@screens/signIn'
import SignUpScreen from '@screens/signUp'
import { AuthStackParamList } from '@utils'
import React from 'react'

const AuthStack = createStackNavigator<AuthStackParamList>()

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator headerMode='none'>
      <AuthStack.Screen name={_navigation.SIGN_IN} component={SignInScreen} />
      <AuthStack.Screen name={_navigation.SIGN_UP} component={SignUpScreen} />
    </AuthStack.Navigator>
  )
}

export default AuthNavigator
