import { View, Text } from 'react-native';

import React,{ createContext,useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Demo from '../components/homescreen/Demo';
import MainTabNavigation from './MainTabNavigation';
import Login_SignUpModal from '../components/homescreen/Login_SignUpModal';
import OtpVerification from '../components/Login_and_signUp/OtpVerification';
import ContextApi, { TabNavigationApi } from '../ContextApi';
import SignUpPage from '../components/Login_and_signUp/SignUpPage';


const stack=createNativeStackNavigator();


const StackNavigations = ({navigation}) => {
const [visibleModal,setVisibleModal]=useState(false)

  return (
    <ContextApi.Provider value={{visibleModal:visibleModal,setVisibleModal:setVisibleModal}}>
    <TabNavigationApi.Provider value={{navigation}}>
    <stack.Navigator>
        <stack.Screen name='home' component={MainTabNavigation} options={{headerShown:false}}/>
        <stack.Screen name='demo' component={Demo}/>
        <stack.Screen name='otp_verification' component={OtpVerification} options={{ 
      headerShown:false
        }}/>
        <stack.Screen name='login/signUp' component={Login_SignUpModal} options={{headerShown:false}}/>
        <stack.Screen name='signUpForm' component={SignUpPage} options={{headerTitle:"Complete your sign up"}}/>
    </stack.Navigator>
    </TabNavigationApi.Provider>
    </ContextApi.Provider>
  )
}

export default StackNavigations