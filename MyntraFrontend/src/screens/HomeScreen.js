import { View, Text, ScrollView } from 'react-native'
import React,{useState} from 'react'
import TopNavbar from '../components/homescreen/TopNavbar'
import MiddleNavbar from '../components/homescreen/MiddleNavbar'
import BottomNavbar from '../components/homescreen/BottomNavbar'
import Xplore from '../components/homescreen/Xplore'
import FashionCarnival from '../components/homescreen/FashionCarnival'
import Login_SignUpModal from '../components/homescreen/Login_SignUpModal'

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView>
    <View> 
      <TopNavbar/>
    <MiddleNavbar/>
    {/* <Login_SignUpModal/> */}
    </View>
  
    </ScrollView>
  )
}

export default HomeScreen