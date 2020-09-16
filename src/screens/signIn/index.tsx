import { Button } from 'native-base'
import React from 'react'
import { Text, View } from 'react-native'
import { AuthNavProps } from 'src/utils'

const SignInScreen: React.FC<AuthNavProps<'SignIn'>> = ({
  navigation,
  route
}) => {
  return (
    <View>
      <Text>Sign In</Text>
      <Text>Route name: {route.name}</Text>
      <Button onPress={() => navigation.navigate('SignUp')}>
        <Text>Sign Up</Text>
      </Button>
    </View>
  )
}

export default SignInScreen
