import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import { FontAwesome5 } from "@expo/vector-icons";
  import { SimpleLineIcons } from "@expo/vector-icons";
  import { Ionicons } from "@expo/vector-icons";
  import { Feather } from "@expo/vector-icons";
  
  const TopNavbar = () => {
    const [cartValue, setCartValue] = useState(0);
    useEffect(() => {
      setTimeout(() => {
        setCartValue(cartValue + 1);
      }, 2000);
    }, [cartValue]);
    return (
      <View style={styles.container}>
        <View style={styles.topWrapper}>
          <Image
            source={require("../../../assets/myntra-logo.png")}
            alt="image"
            style={styles.myntraImage}
          />
          <View style={styles.IconContainer}>
           
              <Ionicons name="notifications-outline" size={26} color="black" />
            <FontAwesome5 name="heart" size={26} color="black" />
            <SimpleLineIcons name="handbag" size={26} color="black" />
          </View>
          <Text style={styles.cartValue}>{cartValue}</Text>
        </View>
        <TouchableOpacity style={styles.searchContainer} activeOpacity={0.8}>
          <View style={styles.searchTextFlex}>
            <Ionicons name="ios-search-outline" size={20} color="black" />
            <Text style={styles.text}>Search for brands and products</Text>
          </View>
          <Feather name="mic" size={20} color="black" />
        </TouchableOpacity>
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      marginTop: 35,
      flex: 1,
      paddingHorizontal: 15,
      backgroundColor:'white'
    },
    topWrapper: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    myntraImage: {
      height: 40,
      width: 40,
    },
    IconContainer: {
      flexDirection: "row",
      gap: 15,
    },
    cartValue: {
      position: "absolute",
      height: 15,
      width: 15,
      borderRadius: 10,
      backgroundColor: "red",
      color: "white",
      fontSize: 12,
      fontWeight: "bold",
      alignItems: "center",
      paddingLeft: 3,
      left: "98%",
      top: "18%",
    },
    searchContainer: {
      flexDirection: "row",
      marginTop: 10,
      borderWidth: 1,
      borderColor: "grey",
      height: 40,
      borderRadius: 20,
      alignItems: "center",
      paddingLeft: 20,
      justifyContent: "space-between",
      paddingRight: 35,
      shadowColor: "grey",
      backgroundColor: "white",
      shadowColor: "black",
      elevation: 15,
      shadowOpacity: 0.5,
      shadowOffset: { width: -50, height: 100 },
      shadowRadius: 10,
    },
    searchTextFlex: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },
    text: {
      color: "grey",
      fontSize: 16,
      fontWeight: 300,
    },
  });
  export default TopNavbar;
  