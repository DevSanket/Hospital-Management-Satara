import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from './Icon'
import AppText from './AppText'

export default function CategoryPickerItem({onPress,item}) {
  return (
   <TouchableOpacity style={styles.container} onPress={onPress}>
       <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
       <AppText style={styles.label}>{item.label}</AppText>
   </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:30,
        paddingVertical:15,
        alignItems:'center'
    },
    label:{
        marginTop:5,
        textAlign:'center'
    }
})