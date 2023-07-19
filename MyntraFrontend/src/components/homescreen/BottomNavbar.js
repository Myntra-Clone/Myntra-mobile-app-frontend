import { View, Text, ScrollView,Image,StyleSheet, Button } from 'react-native'
import React,{useContext} from 'react'
import { categories } from "../../Data/CategoriesData";
import ContextApi, { StackNavigationApi } from '../../ContextApi';
//  import { Navigation } from './MiddleNavbar';
const BottomNavbar = () => {
  
   const {navigation}=useContext(StackNavigationApi);

  return (
    <ScrollView  style={styles.container} horizontal
    showsHorizontalScrollIndicator={false}>
     {categories.map(item=>{
         return(
             <View  key={item.id} >
             <View style={styles.categoriesContainer} onStartShouldSetResponder={()=>navigation.navigate('demo')}>
         <Image source={item.image} style={styles.image}/>
         <Text style={styles.text}>{item.title}</Text>
             </View>
         </View>
         )
     })}
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        paddingBottom: 15,
        flex: 1,
        marginHorizontal: 3,
    //           borderWidth:1,
    //  borderColor:'black',
    },
    categoriesContainer: {
    //   borderWidth:1,
    //   borderColor:'black',
      alignItems:'center',
      marginHorizontal: 10,

    },
    image:{
        height:60,
        width:60,
        borderRadius:40,
    },
    text:{
       fontSize:15,
       fontWeight:600,
       color:'grey'
    }
})

export default BottomNavbar