import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'

const Faq = () => {
  return (
    <View style={{backgroundColor:'white'}}>
     <TouchableHighlight onPress={()=>{}} style={styles.textContainer} underlayColor='#DFDFDF' activeOpacity={0.5}>
       <Text  style={styles.text}>FAQs</Text>
     </TouchableHighlight>
     <TouchableHighlight onPress={()=>{}}  style={styles.textContainer}underlayColor='#DFDFDF' activeOpacity={0.5}>
       <Text  style={styles.text}>ABOUT US</Text>
     </TouchableHighlight>
     <TouchableHighlight onPress={()=>{}}  style={styles.textContainer}underlayColor='#DFDFDF' activeOpacity={0.5}>
       <Text  style={styles.text}>TERMS OF USE</Text>
     </TouchableHighlight>
     <TouchableHighlight onPress={()=>{}}  style={[styles.textContainer,{marginBottom:100}]}underlayColor='#DFDFDF' activeOpacity={0.5}>
       <Text  style={styles.text}>PRIVACY POLICY</Text>
     </TouchableHighlight>

    </View>
  )
}

export default Faq

const styles = StyleSheet.create({
    textContainer:{
        // height:45,
        paddingLeft:60,
        paddingVertical:15,
    },
    text:{
        fontSize:14,
        fontWeight:800,
        color:'gray'
    }
})