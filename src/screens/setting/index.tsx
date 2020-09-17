import { _navigation } from '@constants'
import { TabStackNavProps } from '@utils'
import { Button } from 'native-base'
import React from 'react'
import { Text, View } from 'react-native'

const SettingScreen: React.FC<TabStackNavProps<_navigation.SETTING>> = ({
  navigation
}) => {
  return (
    <View>
      <Text>Setting Screen</Text>
      <Button onPress={() => navigation.navigate(_navigation.PROFILE)}>
        <Text>Go to profile</Text>
      </Button>
    </View>
  )
}

export default SettingScreen
