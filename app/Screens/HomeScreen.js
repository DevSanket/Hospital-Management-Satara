import { StyleSheet, Text, View, TouchableOpacity,ScrollView } from "react-native";
import React from "react";
import Screen from "../Components/Screen";
import { AntDesign } from "@expo/vector-icons";
import Card from "../Components/Card";


export default function HomeScreen() {
  return (
    <Screen style={styles.container}>
        <ScrollView>
            <Card image={require('../assets/jacket.jpg')}
            title="Sanket"
            subtitle="Hello I am Sanket"
            />
            <Card image={require('../assets/jacket.jpg')}
            title="Sanket"
            subtitle="Hello I am Sanket"
            />
            <Card image={require('../assets/jacket.jpg')}
            title="Sanket"
            subtitle="Hello I am Sanket"
            />
        </ScrollView>
      <TouchableOpacity style={styles.profileButton} >
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
