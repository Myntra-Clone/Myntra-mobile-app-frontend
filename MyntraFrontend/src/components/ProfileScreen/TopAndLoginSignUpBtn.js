import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React,{useContext,useState} from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
// import { Navigation } from "../../navigations/MainTabNavigation";
import Login_SignUpModal, { loginContext } from "../homescreen/Login_SignUpModal";
import ContextApi from "../../ContextApi";
// import {Navigation} from '../../navigations/StackNavigations'
const TopAndLoginSignUpBtn = () => {
    // const {navigation}=useContext(Navigation);
    // const [visibleModal,setVisibleModal]=useState(false)
 const {visibleModal,setVisibleModal}=useContext(ContextApi);
 
  return (
    <View style={styles.container}>
    <View style={{backgroundColor:'#3C3637',height:150}}></View>
      <View style={styles.subContainer}>
        <SimpleLineIcons
          name="user"
          size={80}
          color="black"
          style={styles.userIcon}
        />
        <View style={styles.loginBtn} onStartShouldSetResponder={()=>{setVisibleModal(true)}}>
          <TouchableOpacity onPress={()=>{{setVisibleModal(true)}}}>
            <Text style={styles.loginText}>LOG IN/SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TopAndLoginSignUpBtn;

const styles = StyleSheet.create({
  container: {
    // height:150,
  flex:1,
  borderBottomColor:'gray',
  backgroundColor:'white',
  paddingBottom:20
  },
  subContainer: {
     flexDirection: "row",
    gap: 20,
     alignItems: "center",
    // backgroundColor:'black'
    justifyContent:'center'
  },
  userIcon: {
    backgroundColor: "white",
    height: 140,
    width: 140,
    marginLeft: 20,
    padding: 30,
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    
    marginTop:-70
  },
  loginBtn: {
    backgroundColor: "#ff3f6c",
    height: 50,
    width: 220,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop:10
  },
  loginText: {
    color: "white",
    fontSize: 16,
    fontWeight: 500,
  },
});
