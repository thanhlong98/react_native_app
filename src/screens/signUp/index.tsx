import React from 'react'
import { View, Text } from 'react-native'
import { AuthNavProps } from 'src/utils'

const SignUpScreen: React.FC<AuthNavProps<'SignUp'>> = () => {
  return (
    <View>
      <Text>Sign Up</Text>
    </View>
  )
}

export default SignUpScreen
