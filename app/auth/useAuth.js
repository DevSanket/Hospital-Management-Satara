import { useContext } from "react";
import AuthContext from './context';
import authStorage from './storage';
import Firebase from '../config/firebase';

export default useAuth = () => {
    const {userData,setUserData} = useContext(AuthContext);
    const db = Firebase.firestore();

    const logOut = () =>  {
        setUserData(null);
        authStorage.removeData();
    }

    const logIn = (user) => {
        db.collection('hospitals').doc(user.uid).get()
        .then(snapshot => setUserData(JSON.stringify(snapshot.data()))); 
        authStorage.storeData(userData);
    }

    return {userData,setUserData,logOut,logIn};

}