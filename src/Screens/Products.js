import React, { useEffect } from 'react'
import{View, TextInput, TouchableOpacity,StyleSheet,Text,FlatList, ScrollView} from "react-native";
import Card from './Components/Card';
import {useSelector, useDispatch} from 'react-redux';
import {fetchUsers} from "./Redux/ApiAction";




export default function Products() {
  const usersData = useSelector(state => state.users);
  console.log("userData",usersData)
 const dispatch=useDispatch()


  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (

<View>
    <View style={styles.Search}>
        <TextInput style={styles.Text}/>
        <TouchableOpacity><Text style={styles.searchBtn}>Search</Text></TouchableOpacity>
      
    </View>
    <FlatList
        data={usersData.users}
        renderItem={itemData => (
          // <Text style={styles.subHeading}>{itemData.item.name}</Text>
          <Card
            name={itemData.item.name}
            email={itemData.item.email}
            body={itemData.item.body}
          />
        )}
        keyExtractor={item => item.id}
      />
</View>     
  )
}
const styles=StyleSheet.create({
    Text:{
        borderWidth:5,
        borderColor:"black",
    },
    Search:{
        margin:20
    },
    searchBtn:{
        backgroundColor:"blue",
        padding:20,
        color:"white",
        fontSize:25,
        width:"50%",
        marginTop:15,
        borderRadius:5,
        textAlign:"center"
    }
})
