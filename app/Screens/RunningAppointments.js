import { StyleSheet, Text, View,ScrollView,ToastAndroid } from 'react-native'
import React,{useState,useEffect} from 'react'
import Screen from '../Components/Screen'
import useAuth from '../auth/useAuth'
import Firebase from '../config/firebase';
import RunningAppointMentCard from '../Components/RunningAppointmentCard';

export default function RunningAppointments() {
  const {userData} = useAuth();
  const [Data,setData] = useState([]);
  const db = Firebase.firestore();

  const HandleCheck = async (name,email,disease,phone_no,id) => {
    const userRef = Firebase.firestore().collection('hospitals').doc(userData.id).collection('Appointments_History');
    try {
      await userRef.add({
        name,
        email,
        disease,
        contact_no:phone_no,
        date: Date.now()
      }).then(data => {
        ToastAndroid.show("Appointment Added in History",ToastAndroid.SHORT);
        
      })
    } catch (error) {
      ToastAndroid.show("Something went Wrong",ToastAndroid.SHORT);
    }
    try {
     await Firebase.firestore().collection('hospitals').doc(userData.id).collection('Running_Appointments').doc(id).delete();
    } catch (error) {
      ToastAndroid.show("Something went Wrong",ToastAndroid.SHORT);
    }

  }

  //Firebase Data featch
  useEffect(() => {
    db.collection('hospitals').doc(userData.id).collection('Running_Appointments').onSnapshot(snapshot => {
        setData(snapshot.docs.map(
            doc => (
                {
                id:doc.id,
                contact_no:doc.data().phone_no,
                disease:doc.data().disease,
                email:doc.data().email,
                name:doc.data().name
            })))

    });
},[]);





  return (
    <Screen>
     <ScrollView>
     {
        Data.length ?

       Data.map(data =>  {
         return (
          <RunningAppointMentCard 
          disease={data.disease}
          email={data.email}
          name={data.name}
          phone_no={data.contact_no}
          id={data.id}
          key={data.id}
          HandleCheck={() =>  HandleCheck(data.name,data.email,data.disease,data.contact_no,data.id)}
         />
         )
       }) :
       <Text style={styles.text}>No Running Appointments Yet!</Text>
      }
     </ScrollView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  text:{
    textAlign:'center',
    fontSize:20
  }
})