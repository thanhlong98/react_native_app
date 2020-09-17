import { _navigation } from '@constants'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from '@screens/splash'
import React, { useEffect, useState } from 'react'
import AppNavigator from './App'
import AuthNavigator from './Auth'

const RootStack = createStackNavigator()

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
      initialRouteName={_navigation.SPLASH}
    >
      {loading ? (
        <RootStack.Screen name={_navigation.SPLASH} component={SplashScreen} />
      ) : token ? (
        <RootStack.Screen name={_navigation.APP} component={AppNavigator} />
      ) : (
        <RootStack.Screen name={_navigation.AUTH} component={AuthNavigator} />
      )}
    </RootStack.Navigator>
  )
}

export default Navigation
