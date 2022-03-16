import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';


export default function IconButton({name,onPress}) {
  return (
    <TouchableOpacity style={styles.btn}>
              <MaterialCommunityIcons name={name} size={30} />
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    btn:{
        width:100,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.secondary,
        borderRadius:5
      }
})