import { _navigation } from '@constants'
import { TabStackNavProps } from '@utils'
import { Button, Container, Content, Icon } from 'native-base'
import React from 'react'
import { Text } from 'react-native'

const HomeScreen: React.FC<TabStackNavProps<_navigation.HOME>> = ({
  navigation
}) => {
  return (
    <Container>
      <Content style={{ backgroundColor: 'yellow' }}>
        <Text>Home Screen</Text>
        <Button
          transparent
          onPress={() =>
            navigation.navigate(_navigation.POST, {
              screen: _navigation.DETAIL_POST,
              params: {
                id: '123'
              }
            })
          }
        >
          <Icon name='menu' />
          <Text>Click me</Text>
        </Button>
      </Content>
    </Container>
  )
}

export default HomeScreen
