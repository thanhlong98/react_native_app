import { createStackNavigator } from '@react-navigation/stack'
import FeedScreen from '@screens/feed'
import React from 'react'
import { HomeParamList } from '@utils'

const HomeStack = createStackNavigator<HomeParamList>()

const HomeNavigator: React.FC = () => {
  return (
    <HomeStack.Navigator headerMode='none'>
      <HomeStack.Screen name='Feed' component={FeedScreen} />
    </HomeStack.Navigator>
  )
}

export default HomeNavigator
