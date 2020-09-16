import { PostParamList } from './PostParamList'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export type SearchParamList = {
  Search: undefined
} & PostParamList

export type SearchStackNavProps<T extends keyof SearchParamList> = {
  navigation: StackNavigationProp<SearchParamList, T>
  route: RouteProp<SearchParamList, T>
}
