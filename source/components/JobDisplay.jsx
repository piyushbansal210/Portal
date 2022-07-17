import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import { color } from '../constants/Constant'

import { Ionicons } from '@expo/vector-icons';

export default function JobDisplay(props) {

    return (
        <View style={styles.container}>
            <Text style={styles.position}>{props.post.position}</Text>
            <Text style={styles.companyName}>{props.post.companyName}</Text>
            <View style={styles.detail}>

            </View>
            {
                props.post.fullTime ? <View>
                    <Ionicons name="ios-send" size={18} color={color.blue} />
                    <Text>fullTime</Text>
                </View> : null
            }
            {
                props.post.dayShift ? <View>
                    <Ionicons name="ios-send" size={18} color={color.blue} />
                    <Text>dayShift</Text>
                </View> : null
            }
            {
                props.post.urgentHiring ? <View>
                    <Ionicons name="ios-send" size={18} color={color.blue} />
                    <Text>urgentHiring</Text>
                </View> : null
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f8f8',
        elevation: 5,
        padding: 10,
        marginHorizontal: 10,
        marginVertical: 6,
        borderRadius:10,
    },
    position: {
        fontFamily: 'Bold',
        fontSize: 20,
    },
    companyName: {
        fontFamily: 'Regular',
    },
    location: {
        fontFamily: 'Regular',
    },
    detail: {
        backgroundColor: 'orange'
    }
})