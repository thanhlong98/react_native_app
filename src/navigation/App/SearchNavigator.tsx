import { createStackNavigator } from '@react-navigation/stack'
import SearchScreen from '@screens/search'
import React from 'react'
import { SearchParamList } from 'src/utils/Types/SearchParamList'

const SearchStack = createStackNavigator<SearchParamList>()

const SearchNavigator: React.FC = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name='Search' component={SearchScreen} />
    </SearchStack.Navigator>
  )
}

export default SearchNavigator
