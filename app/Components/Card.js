import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import AppText from './AppText'

export default function Card({title,subtitle,image}) {
  return (
    <View style={styles.card}>
      <Image
      style={styles.image} 
      source={image}
      />
      <View style={styles.detailsContainer}>
      <AppText style={styles.title}>{title}</AppText>
      <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card :{
        borderRadius:15,
        backgroundColor :colors.white,
        margin : 20,
        elevation:10,
        overflow:'hidden'
    },
    image:{
        width:"100%",
        height: 200
    },
    detailsContainer:{
        padding:20
    },
    title:{
        marginBottom : 7
    },
    subtitle:{
        color:colors.secondary,
        fontWeight:'bold'
    }
})