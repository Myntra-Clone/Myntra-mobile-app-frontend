import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard } from "react-native";
import React, { useState } from "react";

const SignUpPage = () => {
  const [focusChange, setFocusChange] = useState(false);
  return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

    <View style={{ backgroundColor: "white", paddingTop: 30 }}>
      <View id="1" onPress={()=>{console.log(id)}}>
        <Text
          style={[
            focusChange ? styles.mobileNumberTextAfterFocus : styles.Text,
          ]}
        >
          Mobile Number
        </Text>
        <TextInput
          style={styles.textInput}
          onFocus={() => {
            setFocusChange(true);
          }}
          onBlur={() => {
            setFocusChange(false);
          }}
        ></TextInput>
      </View>
      <View>
        <Text style={styles.Text}>Create Password</Text>
        <TextInput style={styles.textInput}></TextInput>
        <View>
          <Text style={styles.Text}>8 carrecters</Text>
          <Text style={styles.Text}>1 special</Text>
          <Text style={styles.Text}>1 uppdercase</Text>
          <Text style={styles.Text}>1 neumeric</Text>
        </View>
      </View>
      <View>
        <Text style={styles.Text}>Full name</Text>

        <TextInput style={styles.textInput}></TextInput>
      </View>
      <View>
        <Text style={styles.Text}>Email</Text>
        <TextInput style={styles.textInput}></TextInput>
      </View>
      <View>
        <Text style={styles.Text}>Select gender</Text>
      </View>
      <View>
        <Text style={styles.Text}>Alternate mobile number</Text>
        <TextInput style={styles.textInput}></TextInput>
      </View>
      <View>
        <Text style={styles.Text}>Hint name(alternate mobile number)</Text>
        <TextInput style={styles.textInput}></TextInput>
      </View>
    </View>
      </TouchableWithoutFeedback>
  );
};

export default SignUpPage;

const styles = StyleSheet.create({
  Text: {
    position: "absolute",
    width: 300,
    top: 24,
    left: 70,
    fontSize: 16,
    backgroundColor: "white",
    color: "gray",
  },
  mobileNumberTextAfterFocus: {
    position: "absolute",
    top: 5,
    backgroundColor: "white",
    width: 120,
    paddingHorizontal: 10,
    fontSize: 12,
    left: 50,
    zIndex: 1,
  },
  textInput: {
    borderColor: "gray",
    borderWidth: 1,
    marginHorizontal: 40,
    marginVertical: 15,
    height: 40,
  },
});
