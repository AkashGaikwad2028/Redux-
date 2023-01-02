import React from 'react'
import Products from './src/Screens/Products'
import { View,StyleSheet, ScrollView } from 'react-native'
import { Provider } from 'react-redux'
import store from './src/Screens/store'
export default function App() {
  return (
    <Provider store={store}>
   <View style={styles.Page}>
    <Products/>
   </View>
   </Provider>
  )
}



const styles=StyleSheet.create({
    
  Page:{
    flex:1,
    margin:0
  }
})
