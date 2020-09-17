import { _navigation } from '@constants'
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { AppStackParamList } from './AppParamList'

export type PostStackParamList = {
  [_navigation.DETAIL_POST]: {
    id: string
  }
  [_navigation.EDIT_POST]: {
    id: string
  }
}

export type PostStackNavProps<T extends keyof PostStackParamList> = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<PostStackParamList, T>,
    StackNavigationProp<AppStackParamList>
  >
  route: RouteProp<PostStackParamList, T>
}
