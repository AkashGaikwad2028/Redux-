import React from 'react';
import { Text, View,StyleSheet } from 'react-native';

export default function Card({name,email,body}) {
  return (
    <View style={styles.CardContainer}>
        <View>
        <Text style={styles.CardText}>
        Name:
      </Text>
      <Text>{name}</Text>
        </View>
        <View>
        <Text style={styles.CardText}>
        Email:
      </Text>
      <Text>{email}</Text>
        </View>
        <View>
        <Text style={styles.CardText}>
        Sumary:
      </Text>
      <Text>{body}</Text>
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    CardContainer:{
       backgroundColor:"aqua",
       padding:25,
       margin:50,
    },
    CardText:{
        color:"blue",
        fontSize:25
    }
})
