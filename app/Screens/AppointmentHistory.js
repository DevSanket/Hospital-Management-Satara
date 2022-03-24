import { StyleSheet, Text, ScrollView,View } from 'react-native'
import React from 'react'
import Screen from '../Components/Screen'
import Card from '../Components/Card'
import HistoryCard from '../Components/HistoryCard'
import useAuth from '../auth/useAuth'

export default function AppointmentHistory() {


  return (
    <Screen>
      <ScrollView>
        <View style={styles.container}>
        <Text style={styles.text}>Appointment History</Text>
        </View>
        <HistoryCard
        name="Sanket Sabale"
        email="test@gmail.com"
        contact_no="1234567890"
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