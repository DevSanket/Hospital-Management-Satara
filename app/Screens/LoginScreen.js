import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import Screen from '../Components/Screen'
import { ErrorMessage, Form,FormField,SubmitButton } from '../Components/forms'
import * as Yup from "yup";
import colors from '../config/colors';
import firebase from '../config/firebase';
import useAuth from '../auth/useAuth';
import ActivityIndicator from '../Components/ActivityIndicator';


const validationSchema = Yup.object().shape({
    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
 password: Yup.string().max(255).required('Password is required')
})




export default function LoginScreen({navigation}) {
  const [loginFailed, setLoginFailed] = useState(false);
  const [loading,setLoading] = useState(false);

  const auth = useAuth();
  const handleSubmit = async ({email,password}) => {
    try { 
      setLoading(true);
      const {user} = await firebase.auth().signInWithEmailAndPassword(email,password);
      setLoginFailed(false);
      auth.logIn(user);
      setLoading(false);
    } catch (error) {
      console.log("Error While Login ",error);
      setLoading(false);
      return setLoginFailed(true); 
    }
    setLoading(false);
      return;
  }

  return (
    <>
    <ActivityIndicator visible={loading} />
    <Screen style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../assets/logo-hospital.png")}
        />
        <Form
        initialValues={
            {
                email:'',
                password:''
            }
        }

        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        >
          <ErrorMessage error="Invalid Email/password" visible={loginFailed} />
            <FormField 
                maxLength={255}
                name="email"
                placeholder="Hospital Email"
            />
            <FormField 
                 name="password"
                 placeholder="Hospital Password"
                 secureTextEntry={true}
            />
            <SubmitButton title="Login" />
        </Form>
        <TouchableOpacity style={styles.redirect} onPress={() => navigation.navigate('Register')}>
                <Text>Not an Account?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.text}>Forgot Password ?</Text>
        </TouchableOpacity>
    </Screen>
    </>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        backgroundColor:colors.gray
    },
    logo: {
        height: 150,
        width: 150,
        alignSelf:"center"
      },
      text:{
        textAlign:"center"
      },
      redirect:{
        marginTop:10,
        marginBottom:10
      }
})