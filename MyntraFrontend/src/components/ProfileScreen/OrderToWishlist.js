import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import React,{useContext} from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ContextApi, { StackNavigationApi } from "../../ContextApi";
// import { Navigation } from "../../navigations/MainTabNavigation";
const OrderToWishlist = () => {

    const {visibleModal,setVisibleModal}=useContext(ContextApi);
    const {navigation}=useContext(StackNavigationApi);
  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => {
         setVisibleModal(true)
        }}
      >
        <View style={styles.orderContainer}>
          <AntDesign name="CodeSandbox" size={30} color="#A39D9F" />
          <View style={styles.middleTextWrapper}>
            <Text style={{ fontSize: 20, fontWeight: 600 }}>Orders</Text>
            <Text>Check your order status</Text>
          </View>
          <MaterialIcons name="navigate-next" size={30} color="#A39D9F" />
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          navigation.navigate('demo')
        }}
      >
        <View style={styles.orderContainer}>
          <MaterialCommunityIcons
            name="help-circle-outline"
            size={30}
            color="#A39D9F"
          />
          <View style={styles.middleTextWrapper}>
            <Text style={{ fontSize: 20, fontWeight: 600 }}>Help Center</Text>
            <Text>Check your order status</Text>
          </View>
          <MaterialIcons name="navigate-next" size={30} color="#A39D9F" />
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          alert("press");
        }}
      >
        <View style={styles.orderContainer}>
          <AntDesign name="hearto" size={30} color="#A39D9F" />
          <View style={styles.middleTextWrapper}>
            <Text style={{ fontSize: 20, fontWeight: 600 }}>Wishlist</Text>
            <Text>Check your order status</Text>
          </View>
          <MaterialIcons name="navigate-next" size={30} color="#A39D9F" />
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          alert("press");
        }}
      >
        <View
          style={[
            styles.orderContainer,
            { borderTopColor: "#DFDFDF", borderTopWidth: 15,
            borderBottomColor: "#DFDFDF", borderBottomWidth: 15 },
          ]}
        >
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={30}
            color="#A39D9F"
          />
          <View style={styles.middleTextWrapper}>
            <Text style={{ fontSize: 20, fontWeight: 600 }}>
              Scan for coupon
            </Text>
            <Text>Check your order status</Text>
          </View>
          <MaterialIcons name="navigate-next" size={30} color="#A39D9F" />
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default OrderToWishlist;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: "white",
  },
  orderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "white",
    borderBottomColor: "#DFDFDF",
    borderBottomWidth: 1,
  },
  middleTextWrapper: {
    left: -70,
  },
});
