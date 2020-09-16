import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from '@screens/splash'
import { RootParamList } from '@utils'
import React, { useEffect, useState } from 'react'
import AppNavigator from './App'
import AuthNavigator from './AuthNavigator'

const RootStack = createStackNavigator<RootParamList>()

const Navigation = () => {
  const [loading, setLoading] = useState(true)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [token, setToken] = useState('asd')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <RootStack.Navigator
      headerMode='none'
      screenOptions={{
        animationTypeForReplace: 'push'
      }}
      initialRouteName='Splash'
    >
      {loading ? (
        <RootStack.Screen name='Splash' component={SplashScreen} />
      ) : token ? (
        <RootStack.Screen name='App' component={AppNavigator} />
      ) : (
        <RootStack.Screen name='Auth' component={AuthNavigator} />
      )}
    </RootStack.Navigator>
  )
}

export default Navigation
