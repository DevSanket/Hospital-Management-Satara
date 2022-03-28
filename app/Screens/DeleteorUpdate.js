import { StyleSheet, Text} from 'react-native'
import React from 'react'
import Screen from '../Components/Screen';

export default function DeleteorUpdate() {
  return (
    <Screen style={styles.container}>
      <Text style={styles.title}>Contact us</Text>
      <Text style={styles.info}>Email :-  sanketsabale9767@gmail.com</Text>
      <Text style={styles.info}>Phone No - +91 8788714366 ( WhatsApp )</Text>
      <Text style={styles.info}>Note :-  Right Now for Hospitals sensitive Information we are not allow to delete Hospital data you need to contact us for doing some changes and update your data once we verify that you are a valid person or from hospital then we change your data for you...</Text>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:"center",
    padding:10
  },
  title:{
    fontSize:20,
    fontWeight:'bold'
  },
  info:{
    fontSize:15,
    fontWeight:'bold',
    marginTop:10
  }
})