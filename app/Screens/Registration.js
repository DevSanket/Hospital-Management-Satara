import { StyleSheet, Text, View,Image,ScrollView } from 'react-native'
import React from 'react'
import Screen from '../Components/Screen'
import AppForm from '../Components/forms/Form'

export default function Registration() {
  return (
   <Screen style={styles.container}>
        <ScrollView>
        <Image style={styles.logo} source={require('../assets/logo-hospital.png')}/>
        <AppForm>
              
        </AppForm>
        </ScrollView>
   </Screen>
  )
}

const styles = StyleSheet.create({
container:{
    flex:1,
    alignItems:'center'
},
logo:{  
    height:150,
    width:150
}
})