import { View, Text, StyleSheet, Image, ScrollView, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from "react-native";
import React, { useState, createContext } from "react";
import BottomNavbar from "./BottomNavbar";
import Demo from "./Demo";
import FashionCarnival from "./FashionCarnival";

//  export const Navigation = createContext();

const MiddleNavbar = () => {
  const [clickToggle, setClickToggle] = useState(1);

  return (
    <View>
      <View style={styles.container}>
        <View
          style={[styles.toggles, clickToggle === 1 && styles.toggleClick]}
          onStartShouldSetResponder={() => {
            setClickToggle(1);
          }}
        >
          <Image
            source={require("../../../assets/myntra-fashion-sticker.png")}
            style={styles.image}
          />
          <Text style={[styles.text, clickToggle === 1 && styles.textClick]}>
            Fashion
          </Text>
        </View>
        <View
          style={[styles.toggles, clickToggle === 2 && styles.toggleClick]}
          onStartShouldSetResponder={() => {
            setClickToggle(2);
          }}
        >
          <Image
            source={require("../../../assets/myntra-beauty-kit.jpg")}
            style={styles.image}
          />
          <Text style={[styles.text, clickToggle === 2 && styles.textClick]}>
            Beauty
          </Text>
        </View>
      </View>
      {clickToggle === 1 && (
        <ScrollView>
          {/* <Navigation.Provider value={{navigation:navigation}}> */}
          <BottomNavbar/>
          <FashionCarnival />
          {/* </Navigation.Provider> */}
        </ScrollView>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "white",

    flexDirection: "row",
    justifyContent: "space-between",
  },
  toggles: {
    height: 50,
    marginVertical: 5,
    width: "48%",
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 50,
    paddingHorizontal: 20,
    // justifyContent:'space-between',
    alignItems: "center",
    borderWidth: 2,
    borderColor: "blaCK",
    gap: 5,
  },
  image: {
    height: 35,
    width: 35,
    marginLeft: 10,
    borderRadius: 20,
  },
  text: {
    fontSize: 25,
  },
  toggleClick: {
    backgroundColor: "black",
    color: "white",
  },
  textClick: {
    color: "white",
  },
});
export default MiddleNavbar;
