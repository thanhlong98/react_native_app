import { createStackNavigator } from '@react-navigation/stack'
import EditPostScreen from '@screens/editPost'
import DetailPostScreen from '@screens/detailPost'
import { PostParamList } from '@utils'
import React from 'react'

const PostStack = createStackNavigator<PostParamList>()

const PostNavigator: React.FC = () => {
  return (
    <PostStack.Navigator>
      <PostStack.Screen name='DetailPost' component={DetailPostScreen} />
      <PostStack.Screen name='EditPost' component={EditPostScreen} />
    </PostStack.Navigator>
  )
}

export default PostNavigator
