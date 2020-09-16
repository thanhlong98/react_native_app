import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SettingScreen from '@screens/setting'
import { TabParamList } from '@utils'
import React from 'react'
import HomeNavigator from './HomeNavigator'
import SearchNavigator from './SearchNavigator'

const Tab = createBottomTabNavigator<TabParamList>()

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeNavigator} />
      <Tab.Screen name='Setting' component={SettingScreen} />
      <Tab.Screen name='Search' component={SearchNavigator} />
    </Tab.Navigator>
  )
}

export default TabNavigator
