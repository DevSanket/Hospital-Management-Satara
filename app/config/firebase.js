import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import Constants  from 'expo-constants';
import 'firebase/compat/firestore';

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
  export const createHospitalProfile = async (HospitalAuth,additionalData) => {
    if(!HospitalAuth) return;
    const userRef = firestore.doc(`hospitals/${HospitalAuth.uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists){
      const {email} = HospitalAuth;
      const createdAt = Date.now();
      try {
        await userRef.set({
          id:HospitalAuth.uid,
          email,
          createdAt,
          NewAppointments:[],
          RunningAppointments:[],
          CanceledAppointments :[],
          AppointmentsHistory:[],
          ...additionalData
        });
      } catch (error) {
        console.log('Error while creating User ',error.message);
      }
    }
    return userRef;

  }
  export default Firebase; 