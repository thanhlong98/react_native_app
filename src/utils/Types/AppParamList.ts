import { _navigation } from '@constants'
import { NestedNavigatorParams } from './index'
import { PostStackParamList } from './PostParamList'
import { TabStackParamList } from './TabParamList'

export type AppStackParamList = {
  [_navigation.TAB]: NestedNavigatorParams<TabStackParamList>
  [_navigation.POST]: NestedNavigatorParams<PostStackParamList>
}
