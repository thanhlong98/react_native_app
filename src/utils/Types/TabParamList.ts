import { _navigation } from '@constants'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { AppStackParamList } from './AppParamList'

export type TabStackParamList = {
  [_navigation.HOME]: undefined
  [_navigation.SETTING]: undefined
  [_navigation.SEARCH]: undefined
  [_navigation.PROFILE]: undefined
}

export type TabStackNavProps<T extends keyof TabStackParamList> = {
  route: RouteProp<TabStackParamList, T>
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<TabStackParamList, T>,
    StackNavigationProp<AppStackParamList>
  >
}
