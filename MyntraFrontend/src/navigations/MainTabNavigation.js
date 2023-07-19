import { ScrollView, StyleSheet, Text, View } from "react-native";
import React,{useState,useEffect,createContext,useContext} from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import StackNavigations from "./StackNavigations";

import Login_SignUpModal, { loginContext } from "../components/homescreen/Login_SignUpModal";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ContextApi, { StackNavigationApi } from "../ContextApi";

//export const Navigation=createContext();

const Tab = createBottomTabNavigator();
//var width = Dimensions.get("window").width;

export default function MainTabNavigation({navigation}) {

  // const [loginModal,setLoginModal]=useState(false);
  // useEffect(()=>{
  //   setTimeout(() => {
  //    setLoginModal(true)
  //   }, 2000);
  // })

  return (
      <StackNavigationApi.Provider value={{navigation:navigation}}>
      <Tab.Navigator screenOptions={{tabBarActiveTintColor:'red',
      tabBarStyle:{height:60,
      shadowColor:'black',
      shadowOpacity:1,
      elevation:100
            }
      }}>
        <Tab.Screen
          name="HOME"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: (tab) => {
              if(tab.focused){
              return <Entypo name="home" size={40} color="red" />
              }else{
                return <AntDesign name="home" size={24} color="black" />
              }
            },
            tabBarLabelStyle:{
              fontSize:16,
             
            },
      
          }}
        />
        <Tab.Screen name="Profile" component={ProfileScreen} 
          options={{
            tabBarIcon: (tab) => {
              if(tab.focused){
              return <FontAwesome name="user-circle-o" size={36} color="red" />
              }else{
                return <FontAwesome name="user-o" size={24} color="black" />
              }
            },
            tabBarLabelStyle:{
              fontSize:16,
             
            },
      
          }}
          
        />
      </Tab.Navigator>
    </StackNavigationApi.Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
