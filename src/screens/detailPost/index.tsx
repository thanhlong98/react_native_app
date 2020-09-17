import { _navigation } from '@constants'
import { PostStackNavProps } from '@utils'
import { Button } from 'native-base'
import React from 'react'
import { Text, View } from 'react-native'

const DetailPostScreen: React.FC<PostStackNavProps<
  _navigation.DETAIL_POST
>> = ({ navigation }) => {
  return (
    <View>
      <Text>Detail Post Screen</Text>
      <Button
        onPress={() =>
          navigation.navigate(_navigation.EDIT_POST, { id: '123' })
        }
      >
        <Text>Edit</Text>
      </Button>
    </View>
  )
}

export default DetailPostScreen
