import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'
import Screen from '../Components/Screen'
import useAuth from '../auth/useAuth'
import Firebase from '../config/firebase';
import RunningAppointMentCard from '../Components/RunningAppointmentCard';

export default function RunningAppointments() {
  const {userData} = useAuth();
  const [Data,setData] = useState([]);
  const db = Firebase.firestore();

  //Firebase Data featch
  useEffect(() => {
    db.collection('hospitals').doc(userData.id).collection('Running_Appointments').onSnapshot(snapshot => {
        setData(snapshot.docs.map(
            doc => (
                {
                id:doc.id,
                contact_no:doc.data().contact_no,
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
         />
         )
       }) :
       <Text>No Appointments</Text>
      }
     </ScrollView>
    </Screen>
  )
}

const styles = StyleSheet.create({
})