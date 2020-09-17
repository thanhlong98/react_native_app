import { _navigation } from '@constants'
import { createStackNavigator } from '@react-navigation/stack'
import { AppStackParamList } from '@utils'
import React from 'react'
import PostNavigator from './PostNavigator'
import TabNavigator from './TabNavigator'

const AppStack = createStackNavigator<AppStackParamList>()

const AppNavigator: React.FC = () => {
  return (
    <AppStack.Navigator headerMode='none'>
      <AppStack.Screen name={_navigation.TAB} component={TabNavigator} />
      <AppStack.Screen name={_navigation.POST} component={PostNavigator} />
    </AppStack.Navigator>
  )
}

export default AppNavigator
