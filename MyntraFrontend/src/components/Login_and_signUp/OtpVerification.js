import {
    Button,
    Keyboard,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View,
  } from "react-native";
  import React, { useState, useRef, useContext } from "react";
  import { Ionicons } from "@expo/vector-icons";
  import ContextApi, {
    StackNavigationApi,
    TabNavigationApi,
  } from "../../ContextApi";
  const OtpVerification = ({navigation}) => {
    const { visibleModal, setVisibleModal } = useContext(ContextApi);
    // const {navigation}=useContext(TabNavigationApi);
    // const { navigation } = useContext(StackNavigationApi);
    const otp1 = useRef(null);
    const otp2 = useRef(null);
    const otp3 = useRef(null);
    const otp4 = useRef(null);
  
    const [otpInput1, setOtpInput1] = useState("");
    const [otpInput2, setOtpInput2] = useState("");
    const [otpInput3, setOtpInput3] = useState("");
    const [otpInput4, setOtpInput4] = useState("");
  
    if (otpInput1 && otpInput2 && otpInput3 && otpInput4) {
      alert("verifying your otp");
      setTimeout(() => {
        alert("succesfully logged in");
        navigation.navigate("signUpForm");
      }, 3000);
    }
  
    return (
      <SafeAreaView style={styles.container}>
        <Ionicons
          name="arrow-back"
          size={30}
          color="black"
          onPress={() => {
            setVisibleModal(false);
          }}
        />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <Text
              style={{
                fontWeight: 600,
                fontSize: 24,
                marginBottom: 20,
                marginTop: 20,
              }}
            >
              Verify with OTP
            </Text>
            <Text>Sent via SMS to 700000000</Text>
            <View style={styles.TextInputWrapper}>
              <TextInput
                ref={otp1}
                style={styles.textInput}
                maxLength={1}
                autoFocus
                onChangeText={(value) => {
                  setOtpInput1(value);
                  if (value.length != 0) {
                    otp2.current.focus();
                  }
                }}
                value={otpInput1}
                keyboardType={"number-pad"}
              />
              <TextInput
                ref={otp2}
                style={styles.textInput}
                maxLength={1}
                keyboardType={"number-pad"}
                onChangeText={(value) => {
                  setOtpInput2(value);
                  if (value.length != 0) {
                    otp3.current.focus();
                  }
                }}
                value={otpInput2}
              />
              <TextInput
                ref={otp3}
                style={styles.textInput}
                maxLength={1}
                keyboardType={"number-pad"}
                onChangeText={(value) => {
                  setOtpInput3(value);
                  if (value.length != 0) {
                    otp4.current.focus();
                  }
                }}
                value={otpInput3}
              />
              <TextInput
                ref={otp4}
                style={styles.textInput}
                maxLength={1}
                keyboardType={"number-pad"}
                onChangeText={(value) => {
                  setOtpInput4(value);
                }}
                value={otpInput4}
              />
            </View>
            <Text style={styles.textMargin}>Trying to auto-fill OTP 00:14</Text>
            <Text style={styles.textMargin}>
              Log in using <Text style={styles.text}>Password</Text>
            </Text>
            <Text style={styles.textMargin}>
              Having trouble logging in? <Text style={styles.text}>Get help</Text>
            </Text>
            {/* <Button
              title="continue"
              onPress={() => {
                navigation.navigate("signUpForm");
              }}
            /> */}
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    );
  };
  
  export default OtpVerification;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      paddingLeft: 30,
      paddingTop: 40,
    },
    TextInputWrapper: {
      flexDirection: "row",
      marginVertical: 20,
    },
    textInput: {
      height: 40,
      width: 30,
      marginRight: 10,
      borderColor: "gray",
      borderWidth: 1,
      paddingHorizontal: 10,
      fontSize: 16,
      // fontWeight:600
    },
    text: {
      color: "red",
      fontWeight: 600,
    },
    textMargin: {
      marginTop: 20,
    },
  });
  