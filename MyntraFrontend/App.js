import { ScrollView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import React,{createContext} from 'react'
import { NavigationContainer } from "@react-navigation/native";
import MainTabNavigation from "./src/navigations/MainTabNavigation";
import StackNavigations from "./src/navigations/StackNavigations";
//  export const Navigation=createContext();
export default function App({navigation}) {
  return (
    <NavigationContainer>
      <StatusBar style="grey" backgroundColor="white" />
     <StackNavigations/>
    </NavigationContainer>
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
