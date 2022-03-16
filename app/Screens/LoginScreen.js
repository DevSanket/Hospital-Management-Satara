import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Screen from '../Components/Screen'
import { Form,FormField,SubmitButton } from '../Components/forms'
import * as Yup from "yup";


const validationSchema = Yup.object().shape({
    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
 password: Yup.string().max(255).required('Password is required')
})

export default function LoginScreen() {
  return (
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

        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
        >
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
        <Text style={styles.text}>Forgot Password ? 
        Contact (sanketsabale9767@gmail.com)</Text>
    </Screen>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:10
    },
    logo: {
        height: 150,
        width: 150,
        alignSelf:"center"
      },
      text:{
        textAlign:"center"
      }
})