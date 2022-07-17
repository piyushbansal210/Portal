import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

import {color,padding,margin} from './../constants/Constant'

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Notification</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
      backgroundColor:'green',
      flex:1,
      padding:padding.Medium
  }
})

export default Profile