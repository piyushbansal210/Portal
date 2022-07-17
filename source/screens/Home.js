import { View, Text,StyleSheet ,ScrollView} from 'react-native'
import React from 'react'

import {color,padding,margin} from './../constants/Constant'
import JobDisplay from '../components/JobDisplay'

const post={
  id:1,
  companyName:'Variable Innovation',
  position:'React Native Developer',
  locationCity:'Banglore',
  locationState:'Karnataka',
  payStart:'800000',
  payEnd:'1500000',
  fullTime:true,
  dayShift:false,
  urgentHiring:true,
  postedDate:'19 Days Ago',
  multipleCandidates:true,

}

const Home = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <JobDisplay post={post}/>
      <JobDisplay post={post}/>
      <JobDisplay post={post}/>
      <JobDisplay post={post}/>
      <JobDisplay post={post}/>
      <JobDisplay post={post}/>
      <JobDisplay post={post}/>
      <JobDisplay post={post}/>
      <JobDisplay post={post}/>
      <JobDisplay post={post}/><JobDisplay post={post}/>



      <JobDisplay post={post}/>
      <JobDisplay post={post}/>
      <JobDisplay post={post}/>
      <JobDisplay post={post}/>
      <JobDisplay post={post}/>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fcfcfc',
        flex:1,
    }
})

export default Home