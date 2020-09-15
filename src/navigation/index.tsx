import { _navigation } from '@constants'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from '@screens/splash'
import React, { useEffect, useState } from 'react'
import TabNavigator from './TabNavigator'

const Stack = createStackNavigator()

const Navigation = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <Stack.Navigator
      headerMode='none'
      screenOptions={{
        animationTypeForReplace: 'push'
      }}
    >
      {loading ? (
        <Stack.Screen name={_navigation.SPLASH} component={SplashScreen} />
      ) : (
        <Stack.Screen name={_navigation.APP} component={TabNavigator} />
      )}
    </Stack.Navigator>
  )
}

export default Navigation
