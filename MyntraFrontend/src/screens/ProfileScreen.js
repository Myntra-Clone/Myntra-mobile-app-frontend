import { View, Text, ScrollView } from 'react-native'
import React,{useContext,useState} from 'react'
import TopAndLoginSignUpBtn from '../components/ProfileScreen/TopAndLoginSignUpBtn'
import Login_SignUpModal from '../components/homescreen/Login_SignUpModal'
import ContextApi, { TabNavigationApi } from '../ContextApi'
import OrderToWishlist from '../components/ProfileScreen/OrderToWishlist'
import Faq from '../components/ProfileScreen/Faq'
// import { Navigation } from '../navigations/MainTabNavigation'

const ProfileScreen = ({navigation}) => {

  return (
    <ScrollView style={{flex:1,backgroundColor:'#DFDFDF'}}>
    <TabNavigationApi.Provider value={{navigation:navigation}}>

    {/* <ContextApi.Provider value={{visibleModal:visibleModal,setVisibleModal:setVisibleModal,navigation:navigation}}> */}
    <TopAndLoginSignUpBtn/>
    <OrderToWishlist/>
    <Faq/>
    <Login_SignUpModal/>
    </TabNavigationApi.Provider>
    {/* </ContextApi.Provider> */}
    </ScrollView>
  )
}

export default ProfileScreen