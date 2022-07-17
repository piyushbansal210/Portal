import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import BottomTabs from './BottomTabs'

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="BottomTabs" screenOptions={{
                headerShown:false,
            }}>
                <Stack.Screen name="BottomTabs" component={BottomTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation