import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import AppText from './AppText'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import IconButton from './IconButton';


export default function Card({name,disease,image,phone_no,email}) {
  return (
    <View style={styles.card}>
    <View style={styles.firstContainer}>
      <View style={styles.LogoContainer}>
      <Image
      style={styles.image} 
      source={image}
      />
      </View>
      <View style={styles.dataContainer}>
          <AppText style={styles.patientAppText}>Name :- {name}</AppText>
          <AppText style={styles.patientAppText}>Contact No :- {phone_no}</AppText>
          <AppText style={styles.patientAppText}>Disease :- {disease}.</AppText>
          <AppText style={styles.patientAppText}>Email :- {email}</AppText>
      </View>
    </View>
      <View style={styles.ButtonContainer}>
        <IconButton name="check"  style={{backgroundColor:'#34eb49'}}/>
        <IconButton name="phone" style={{backgroundColor:'#34a8eb'}} />
        <IconButton name="cancel" style={{backgroundColor:'#eb345f'}}/>
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
    firstContainer:{
      width:"100%",   
      height: 200,
      flex:1,
      flexDirection:'row'
    },
    image:{
      height:"90%",
      width:"90%",
      margin:10,
      borderRadius:10,
      alignSelf:'center'
    },
    ButtonContainer:{
        padding:10,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    title:{
        marginBottom : 7
    },
    subtitle:{
        color:colors.secondary,
        fontWeight:'bold'
    },
    LogoContainer:{
      width:"40%",
      height:"100%"
    },
    dataContainer:{
      flex:1,
      justifyContent:'center'
    },
    patientAppText:{
      fontSize:15,
      margin:5
    }
})