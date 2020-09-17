import { Button } from 'native-base'
import React from 'react'
import { Text, View } from 'react-native'

const SignInScreen: React.FC = ({}) => {
  return (
    <View>
      <Text>Sign In</Text>
      <Text>Route name: </Text>
      <Button>
        <Text>Sign Up</Text>
      </Button>
    </View>
  )
}

export default SignInScreen
