import { _navigation } from '@constants'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '@screens/home'
import SettingScreen from '@screens/setting'
import React from 'react'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={_navigation.HOME} component={HomeScreen} />
      <Tab.Screen name={_navigation.SETTING} component={SettingScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigator
