import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import Constants  from 'expo-constants';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import uuid from 'uuid';
import { ref } from 'yup';

// Initialize Firebase
const firebaseConfig = {
    apiKey: Constants.manifest.extra.apiKey,
    authDomain: Constants.manifest.extra.authDomain,
    projectId: Constants.manifest.extra.projectId,
    storageBucket: Constants.manifest.extra.storageBucket,
    messagingSenderId: Constants.manifest.extra.messagingSenderId,
    appId: Constants.manifest.extra.appId
  };



  let Firebase = firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore();
  export const createHospitalProfile = async (HospitalAuth,Images,additionalData) => {
    if(!HospitalAuth) return;
    const userRef = firestore.doc(`hospitals/${HospitalAuth.uid}`);
    const snapshot = await userRef.get();
    let newImages = [];

    for (let i = 0; i < Images.length; i++) {
        const response = await fetch(Images[i]);
        const blob = await response.blob();
        const ref = Firebase.storage().ref().child(`hospitals/${Date.now()}`);
        await (ref.put(blob)); 
        const link = await ref.getDownloadURL();
        newImages.push(link);
    }

    // Images.map(
    //   async (Image) => {
    //     const response = await fetch(Image);
    //     const blob = await response.blob();
    //     const ref = Firebase.storage().ref().child(`hospitals/${Date.now()}`);
    //     await (ref.put(blob)); 
    //     const link = await ref.getDownloadURL();
      
    //   }
    // )

    console.log(newImages);
    if(!snapshot.exists){
      const {email} = HospitalAuth;
      //formatting Date
      const createdAt = new Date();
      //Images
      

      try {
        await userRef.set({
          id:HospitalAuth.uid,
          email,
          createdAt,
          NewAppointments:[],
          RunningAppointments:[],
          CanceledAppointments :[],
          AppointmentsHistory:[],
          Images : newImages,
          ...additionalData
        });
      } catch (error) {
        console.log('Error while creating User ',error.message);
      }
    }
    return userRef;

  }


  export default Firebase; 