import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Dimensions,
    ScrollView,
  } from "react-native";
  import React, { useState,useContext } from "react";
  import ContextApi, { StackNavigationApi } from "../../ContextApi";
  // import { Navigation } from "./MiddleNavbar";
  
  var width = Dimensions.get("window").width;
  
  const FashionCarnival = () => {
    const {navigation}= useContext(StackNavigationApi);
    const [currentPage, setCurrentPage] = useState(0);
    const data = [
      {
        img: require("../../../assets/fashion/extra_off/extraOff1.jpg"),
        id: 1,
      },
      {
        img: require("../../../assets/fashion/extra_off/extraOff2.jpg"),
        id: 2,
      },
      {
        img: require("../../../assets/fashion/extra_off/extraOff3.jpg"),
        id: 3,
      },
      {
        img: require("../../../assets/fashion/extra_off/extraOff4.jpg"),
        id: 4,
      },
    ];
    return (
      <View>
        <Image
          source={require("../../../assets/fashion/fashionCarnival.jpg")}
          style={styles.image}
        />
        <View style={styles.cauroselContainer}>
          <FlatList
            data={data}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={(e) => {
              const x = e.nativeEvent.contentOffset.x;
              setCurrentPage((x/width).toFixed(0)-0);
              // console.log(currentPage)
            }}
            renderItem={({ item }) => {
              return (
                <View key={item.id}>
                  <TouchableOpacity onPress={()=>navigation.navigate('demo')}>
                    <Image source={item.img} style={styles.cauroselImg} />
                  </TouchableOpacity>
                </View>
              );
            }}
          />
          {/* {data.map(item=>{
              return <View key={item.id}>
                  <Image  style={styles.cauroselImg} source={item.img}/>
              </View>
          })} */}
        </View>
        <View style={styles.indicatorContainer}>
          {data.map((item,index) => {
            return (
              <View 
              key={index}
                style={{
                  height:currentPage===index ?10:6,
                  width:currentPage===index ?10:6,
                  borderRadius:currentPage===index?10:4,
                  marginHorizontal:currentPage===index ?0:2,
                  backgroundColor: currentPage===index ? "skyblue" : "gray",
                  
                }}
              ></View>
            );
          })}
        </View>
      </View>
    );
  };
  const styles = StyleSheet.create({
    image: {
      width: 410,
      height: 300,
    },
    cauroselImg: {
      width: width - 20,
      height: 100,
      marginTop: 20,
      marginHorizontal: 10,
    },
    cauroselContainer: {
      marginTop: 20,
    },
    indicatorContainer: {
      marginTop: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  export default FashionCarnival;
  