import { HomeStackNavProps } from '@utils'
import { Button, Icon } from 'native-base'
import React from 'react'
import { Text, View } from 'react-native'

const FeedScreen: React.FC<HomeStackNavProps<'Feed'>> = ({}) => {
  return (
    <View>
      <Text>Feed Screen</Text>
      <Button transparent>
        <Icon name='menu' />
        <Text>Click me</Text>
      </Button>
    </View>
  )
}

export default FeedScreen
