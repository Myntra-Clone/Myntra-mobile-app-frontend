import {
    Modal,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    Button,
    KeyboardAvoidingView,
  } from "react-native";
  import React, { useState, useEffect,createContext,useContext } from "react";
  //var width = Dimensions.get("window").width;
  import { Entypo } from "@expo/vector-icons";
  import ContextApi, { StackNavigationApi } from "../../ContextApi";
  
  //export const loginContext=createContext()
  
  const Login_SignUpModal = () => {
    const [modalVisible, setModalVisible] = useState(true);
    const [focusChange, setFocusChange] = useState(false);
    const [handleInput, setHandleInput] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const {visibleModal,setVisibleModal}=useContext(ContextApi);
     const {navigation}=useContext(StackNavigationApi)
    useEffect(() => {
      // setTimeout(() => {
        setModalVisible(true);
      // }, 2000);
    }, []);
  
    const handleOnBlur = () => {
      if (handleInput.length < 10) {
        setErrMsg("please enter a valid Mobile number");
      } else {
        setErrMsg("");
        styleHandle = null;
      }
    };
    const continueBtn=()=>{
      if(!errMsg && handleInput.length!=0){
        navigation.navigate('otp_verification')
      }
    }
    return (
      
      <KeyboardAvoidingView enabled={true}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
          <View>
            <Modal transparent visible={visibleModal} style={styles.modalShadow}>
              <View style={styles.container}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../../../assets/myntra-logo.png")}
                    style={styles.myntraImage}
                  />
                  <Entypo
                    name="cross"
                    size={30}
                    color="black"
                    onPress={() => {
                      setVisibleModal(false);
                    }}
                  />
                </View>
                <Text style={styles.loginText}>
                  Login <Text style={{ fontSize: 20, fontWeight: 400 }}>or </Text>{" "}
                  Signup
                </Text>
  
                <View
                  style={[
                    styles.formInput,
                    { borderColor: errMsg ? "red" : "gray" },
                  ]}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      paddingLeft: 10,
                      paddingBottom: 5,
                      color: "gray",
                    }}
                  >
                    +91 <Text style={{ fontSize: 30 }}>|</Text>
                  </Text>
                  <View>
                    <Text
                      style={
                     [   focusChange || handleInput
                          ? styles.mobileNumberTextAfterFocus
                          : styles.mobileNumberText,
                          { color: errMsg ? "red" : "gray" }
                          ]
                      }
                    >
                      Mobile Number<Text style={{ color: "#ff3f6c" }}>*</Text>
                    </Text>
                    <TextInput
                      keyboardType="number-pad"
                      onFocus={() => {
                        setFocusChange(true);
                      }}
                      style={{ width: 280, height: 50, fontSize: 20 }}
                      onBlur={() => {
                        setFocusChange(false);
                        handleOnBlur();
                      }}
                      onChangeText={(value) => {
                        setHandleInput(value);
                      }}
                      maxLength={10}
                      value={handleInput}
                    />
                  </View>
                </View>
                {errMsg ? (
                  <Text style={{ color: "red", marginTop: 10 }}>{errMsg}</Text>
                ) : null}
                <Text style={styles.text}>
                  By continuing, I agree to the{" "}
                  <Text style={styles.myntraColorText}>Terms of use </Text> &{" "}
                  <Text style={styles.myntraColorText}>Privacy Policy</Text>
                </Text>
                <Button title="CONTINUE" color={"#ff3f6c"} onPress={()=>{continueBtn()}}/>
                <Text style={styles.text}>
                  Having trouble logging in?
                  <Text style={styles.myntraColorText}>Get help</Text>
                </Text>
              </View>
              <View></View>
            </Modal>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  };
  
  export default Login_SignUpModal;
  
  const styles = StyleSheet.create({
    modalShadow: {
      backgroundColor: "red",
    },
    container: {
      flex: 1,
  
      backgroundColor: "white",
      marginTop: 320,
      paddingTop: 10,
      paddingHorizontal: 30,
      //shadowOffset: {width: 200, height: 400},
      shadowColor: "red",
      shadowOpacity: 1,
      shadowRadius: 3,
      elevation: 1000,
      // borderColor:'red',
      // borderWidth:5
    },
    myntraImage: {
      height: 50,
      width: 50,
    },
    loginText: {
      fontSize: 30,
      fontWeight: 600,
      marginVertical: 20,
    },
    formInput: {
      width: "100%",
      borderWidth: 1,
      borderRadius: 5,
      height: 60,
      marginTop: 20,
      flexDirection: "row",
      alignItems: "center",
      gap: 20,
    },
    myntraColorText: {
      fontWeight: 500,
      color: "#ff3f6c",
    },
    text: {
      marginVertical: 30,
      fontSize: 17,
    },
    mobileNumberText: {
      position: "absolute",
      width: 200,
      top: 13,
      fontSize: 20,
      backgroundColor: "white",
      color: "gray",
    },
    mobileNumberTextAfterFocus: {
      position: "absolute",
      top: -15,
      backgroundColor: "white",
      width: 120,
      paddingHorizontal: 10,
      fontSize: 12,
    },
  });
  