import { _navigation } from '@constants'
import {
  CardStyleInterpolators,
  createStackNavigator
} from '@react-navigation/stack'
import DetailPostScreen from '@screens/detailPost'
import EditPostScreen from '@screens/editPost'
import { PostStackParamList } from '@utils'
import React from 'react'

const PostStack = createStackNavigator<PostStackParamList>()

const PostNavigator: React.FC = () => {
  return (
    <PostStack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
      <PostStack.Screen
        name={_navigation.DETAIL_POST}
        component={DetailPostScreen}
      />
      <PostStack.Screen
        name={_navigation.EDIT_POST}
        component={EditPostScreen}
      />
    </PostStack.Navigator>
  )
}

export default PostNavigator
