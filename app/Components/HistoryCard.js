import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/colors';

export default function HistoryCard({name,email,contact_no}) {
  return (
    <View style={styles.historyCard}>
      <View style={styles.Checklogo}>
        <MaterialCommunityIcons size={25} name="check" />
      </View>
      <View style={styles.Details}>
           <Text>Name :- {name}</Text> 
           <Text>Email :- {email}</Text>
           <Text>Contact No :- {contact_no}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    historyCard:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        padding:10,
        borderRadius:15,
        backgroundColor :colors.white,
        margin : 20,
        elevation:10,
        overflow:'hidden'
    },
    Checklogo:{
        height:'100%',
        width:60,
        backgroundColor:colors.gray,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50
    },
    Details:{
        height:'100%',
        marginLeft:30,
        alignSelf:'flex-start'
    }
})