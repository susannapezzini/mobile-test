import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../../screens/Home/index'
import DetailsScreen from '../../screens/Details/index'

const MainNavigator = () => {
	const Stack = createStackNavigator()

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='Home' component={HomeScreen} borderBottom />
				<Stack.Screen name='Details' component={DetailsScreen} borderBottom />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default MainNavigator
