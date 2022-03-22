import React,{useState} from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './app/Navigator/MainNavigator';
import AuthNavigator from './app/Navigator/AuthNavigator';
import AuthContext from './app/auth/context';
import OfflineNotice from './app/Components/OfflineNotice';
import authStore from './app/auth/storage';
import AppLoading from 'expo-app-loading';

LogBox.ignoreLogs(['Setting a timer']);

export default function App() {
  const [userData,setUserData] = useState();
  const [isReady,setReady] = useState(false);
  const restoreUser = async () => {
    const user = await authStore.getData();
    if(user) setUserData(user);
  }
  if(!isReady){
    return <AppLoading onError={console.warn} startAsync={restoreUser} onFinish={() => setReady(true)} />
  }
  return (
   <AuthContext.Provider value={{userData,setUserData}}>
     <OfflineNotice/>
     <NavigationContainer>
      {userData ? <MainNavigator /> : <AuthNavigator />}
   </NavigationContainer>
   </AuthContext.Provider>
  );
}

