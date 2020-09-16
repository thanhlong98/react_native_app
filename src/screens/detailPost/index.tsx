import { HomeStackNavProps } from '@utils'
import React from 'react'
import { Text, View } from 'react-native'

const DetailPostScreen: React.FC<HomeStackNavProps<'DetailPost'>> = ({
  route
}) => {
  console.log(route.params.id)
  return (
    <View>
      <Text>Detail Post Screen</Text>
    </View>
  )
}

export default DetailPostScreen
