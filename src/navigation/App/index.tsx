import { createStackNavigator } from '@react-navigation/stack'
import { AppParamList } from '@utils'
import React from 'react'
import PostNavigator from './PostNavigator'
import TabNavigator from './TabNavigator'

const AppStack = createStackNavigator<AppParamList>()

const AppNavigator = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        options={{ header: () => null }}
        name='Tab'
        component={TabNavigator}
      />
      <AppStack.Screen name='Post' component={PostNavigator} />
    </AppStack.Navigator>
  )
}

export default AppNavigator
