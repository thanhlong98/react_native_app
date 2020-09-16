import { HomeStackNavProps } from '@utils'
import React from 'react'
import { Text, View } from 'react-native'

const EditPostScreen: React.FC<HomeStackNavProps<'EditPost'>> = ({ route }) => {
  console.log(route.params.id)
  return (
    <View>
      <Text>Post Screen</Text>
    </View>
  )
}

export default EditPostScreen
