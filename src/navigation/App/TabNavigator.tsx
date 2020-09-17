import { _navigation } from '@constants'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '@screens/home'
import ProfileScreen from '@screens/profile'
import SearchScreen from '@screens/search'
import SettingScreen from '@screens/setting'
import React from 'react'

const Tab = createBottomTabNavigator()

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={_navigation.HOME} component={HomeScreen} />
      <Tab.Screen name={_navigation.SETTING} component={SettingScreen} />
      <Tab.Screen name={_navigation.SEARCH} component={SearchScreen} />
      <Tab.Screen
        name={_navigation.PROFILE}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator
