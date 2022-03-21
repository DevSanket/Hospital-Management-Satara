import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './app/Navigator/MainNavigator';

export default function App() {
  return (
    <NavigationContainer>
          <MainNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
