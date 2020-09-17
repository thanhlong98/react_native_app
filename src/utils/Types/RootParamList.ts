import { NestedNavigatorParams } from './index'
import { _navigation } from '@constants'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { AppStackParamList } from './AppParamList'
import { AuthStackParamList } from './AuthParamList'
export type RootParamList = {
  [_navigation.SPLASH]: undefined
  [_navigation.APP]: NestedNavigatorParams<AppStackParamList>
  [_navigation.AUTH]: NestedNavigatorParams<AuthStackParamList>
}

export type RootStackNavProps<T extends keyof RootParamList> = {
  navigation: StackNavigationProp<RootParamList, T>
  route: RouteProp<RootParamList, T>
}
