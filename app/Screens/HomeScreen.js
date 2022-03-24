import { StyleSheet, Text, View, TouchableOpacity,ScrollView } from "react-native";
import React from "react";
import Screen from "../Components/Screen";
import { AntDesign } from "@expo/vector-icons";
import Card from "../Components/Card";
import useAuth from "../auth/useAuth";
import Firebase from "../config/firebase";


export default function HomeScreen({navigation}) {
  const {userData} = useAuth(); 


  
  
  return (
    <Screen style={styles.container}>
        <ScrollView>
            <Card image={require('../assets/jacket.jpg')}
            name="Sanket Sabale"
            email="sanketsabale9767@gmail.com"
            disease="Fever"
            phone_no="8530730017"
            />
        </ScrollView>
      <TouchableOpacity
      onPress={() => navigation.navigate('Profile')}
      style={styles.profileButton} >
        <AntDesign name="user" size={30} color="white"/>
      </TouchableOpacity>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileButton: {
    height: 70,
    width: 70,
    bottom:0,
    right:10,
    backgroundColor: "#1DA1F2",
    position: "absolute",
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent:'center',
    margin:20,
    borderRadius:50,
    elevation:10
  },
});
