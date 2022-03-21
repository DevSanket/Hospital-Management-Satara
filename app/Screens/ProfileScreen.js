import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Screen from "../Components/Screen";
import ListItem from "../Components/ListItem";
import colors from "../config/colors";
import AppText from "../Components/AppText";
import Divider from "../Components/Divider";
import Icon from "../Components/Icon";

export default function ProfileScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <Divider />
        <View style={styles.profile}>
          <View style={styles.profileLogoContainer}>
            <Image
              style={styles.profileLogo}
              source={require("../assets/mosh.jpg")}
            />
          </View>
          <View style={styles.profileDataContainer}>
            <AppText>Mosh Hamedani</AppText>
            <AppText>codewithmosh@gmail.com</AppText>
          </View>
        </View>
        <Divider />
        <ListItem
          title="Running Appointment"
          IconComponent={
            <Icon name="account-check" backgroundColor={colors.secondary} />
          }
        />
        <Divider />
        <ListItem
          title="Cancel Appointment"
          IconComponent={
            <Icon name="account-cancel" backgroundColor={colors.danger} />
          }
        />
        <Divider />
        <ListItem
          title="Appointment History"
          IconComponent={
            <Icon name="history" backgroundColor={colors.medium} />
          }
        />
        <Divider />
        <ListItem
          title="About us"
          IconComponent={<Icon name="android" backgroundColor="#01F7CC" />}
        />
        <Divider />
        <ListItem
          title="Log Out"
          IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        />
        <Divider />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    flexDirection: "row",
  },
  profileLogo: {
    borderRadius: 50,
    height: 60,
    width: 60,
  },
  profileLogoContainer: {
    margin: 10,
    height: "100%",
  },
  profileDataContainer: {
    height: "100%",
    margin: 10,
    alignContent: "center",
  },
});
