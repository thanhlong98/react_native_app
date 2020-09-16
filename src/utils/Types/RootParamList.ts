import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
export type RootParamList = {
  Splash: undefined
  App: undefined
  Auth: undefined
}

export type RootStackNavProps<T extends keyof RootParamList> = {
  navigation: StackNavigationProp<RootParamList, T>
  route: RouteProp<RootParamList, T>
}
