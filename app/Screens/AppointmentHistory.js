import { StyleSheet, Text, ScrollView,View } from 'react-native'
import React from 'react'
import Screen from '../Components/Screen'
import Card from '../Components/Card'

export default function AppointmentHistory() {
  return (
    <Screen>
      <ScrollView>
        <View style={styles.container}>
        <Text style={styles.text}>Appointment History</Text>
        </View>
        <Card image={require('../assets/jacket.jpg')}
            name="Sanket Sabale"
            email="sanketsabale9767@gmail.com"
            disease="Fever"
            phone_no="8530730017"
            />
            <Card image={require('../assets/jacket.jpg')}
            name="Sanket Sabale"
            email="sanketsabale9767@gmail.com"
            disease="Fever"
            phone_no="8530730017"
            />
            <Card image={require('../assets/jacket.jpg')}
            name="Sanket Sabale"
            email="sanketsabale9767@gmail.com"
            disease="Fever"
            phone_no="8530730017"
            />
      </ScrollView>
    </Screen>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        padding:10
    },
    text:{
        fontSize:20,
        textTransform:"uppercase",
        padding:5
    }
})