import React from 'react'
import { View, Text, Dimensions,StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Entypo, Ionicons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Notification from '../screens/Notification';
import Profile from '../screens/Profile';

import {color} from '../constants/Constant'

const { width, height } = Dimensions.get('screen')


const BottomStack = createBottomTabNavigator();

const Navigation = () => {
    return (
        <BottomStack.Navigator
            screenOptions={{
                headerShown: true,
                tabBarStyle: {
                    height: height / 15,
                    borderRadius:10
                },
                tabBarActiveTintColor:color.blue,
                tabBarInactiveTintColor:'#808080',
                tabBarIconStyle:{
                    marginTop:5
                },
                headerTitleStyle:{
                    fontFamily:'ExtraBold'
                }
                
            }}
        >
            <BottomStack.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({color,size}) => (<><Entypo name="home" size={size} color={color} />
                        <Text style={[styles.label,{color:color}]}>Home</Text>
                    </>),
                    tabBarLabel: () => null
                }}
            />
            <BottomStack.Screen
                name="Notification"
                component={Notification}
                options={{
                    tabBarIcon: ({color,size}) => (<><Ionicons name="notifications" size={size} color={color}/>
                        <Text style={[styles.label,{color:color}]}>Notification</Text>
                    </>),
                    tabBarLabel: () => null
                }}
            />
            <BottomStack.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({color,size}) => (<><Entypo name="user" size={size} color={color} />
                        <Text style={[styles.label,{color:color}]}>Profile</Text>
                    </>),
                    tabBarLabel: () => null
                }}
            />
        </BottomStack.Navigator>
    )
}

const styles = StyleSheet.create({
    label:{
        fontFamily:'Bold'
    }
})

export default Navigation