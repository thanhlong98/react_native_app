import { _navigation } from '@constants'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export type AuthStackParamList = {
  [_navigation.SIGN_IN]: undefined
  [_navigation.SIGN_UP]: undefined
}

export type AuthNavProps<T extends keyof AuthStackParamList> = {
  navigation: StackNavigationProp<AuthStackParamList, T>
  route: RouteProp<AuthStackParamList, T>
}
