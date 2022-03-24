import { StyleSheet, Image, ScrollView } from "react-native";
import React,{useState} from "react";
import Screen from "../Components/Screen";
import CategoryPickerItem from "../Components/CategoryPickerItem";
import * as Yup from "yup";
import { Form,FormField,SubmitButton,FormPicker as Picker,FormImagePicker, ErrorMessage} from '../Components/forms';
import colors from "../config/colors";
import Firebase, { createHospitalProfile } from "../config/firebase";
import useAuth from "../auth/useAuth";
import ActivityIndicator from "../Components/ActivityIndicator";

const categories = [
  {
    label: "karad",
    value: 1,
  },
  {
    label: "Satara",
    value: 2,
  },
  {
    label: "Phaltan",
    value: 3,
  },
  {
    label: "Patan",
    value: 4,
  },
  {
    label: "Khatav",
    value: 5,
  },
  {
    label: "Koregoan",
    value: 6,
  },
  {
    label: "Man",
    value: 8,
  },
  {
    label: "Wai",
    value: 9,
  },
  {
    label: "Khandala",
    value: 10,
  },
  {
    label: "Jaoli",
    value: 11,
  },
  {
    label: "Mahabaleshwar",
    value: 12,
  },
];

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label("Name"),
  Contact_No: Yup.number().required().min(10).label("Contact No."),
  Address: Yup.string().label("Address"),
  Taluka: Yup.object().required().nullable().label("Taluka"),
  images: Yup.array().min(1, "Please Select Atleast on Image"),
  password: Yup.string().required().min(4).label("Password")
});

export default function Registration() {
  const [error, setError] = useState(null);
  const [loading,setLoading] = useState(false);


  const auth = useAuth();

  const HandleSubmit = async ({email,password,name,Contact_No,Address,Taluka,images}) => {
    try {
      setLoading(true);
      const {user} = await Firebase.auth().createUserWithEmailAndPassword(email,password);
      await createHospitalProfile(user,images,{name,Contact_No,Address,Taluka,password});
      auth.logIn(user);
      setLoading(false);
    } catch (error) {
      setError("An unexprected error occured");
      console.log(error);
      setLoading(false);
      return;
    }
  }

  return (
    <>
    <ActivityIndicator  visible={loading}/>
    <Screen style={styles.container}>
      <ScrollView>
        <Image
          style={styles.logo}
          source={require("../assets/logo-hospital.png")}
        />
        <Form
          initialValues={{
            name: "",
            Contact_No: "",
            Address: "",
            Taluka: null,
            images: [],
            email:'',
            password:''
          }}
          onSubmit={HandleSubmit}
          validationSchema={validationSchema}
        >

          <FormImagePicker name="images" />
          <ErrorMessage error={error}/>
          <FormField maxLength={255} name="name" placeholder="Hospital Name" />
          <FormField maxLength={255} name="email" placeholder="Hospital Email" />
          <FormField
            keyboardType="numeric"
            maxLength={10}
            name="Contact_No"
            placeholder="Hospital Contact No."
          />
          
          <Picker
                items={categories}
                name="Taluka"
                placeholder="Taluka"
                PickerItemComponent={CategoryPickerItem}
            /> 
           <FormField 
            multiline
            name="Address"
            placeholder="Hospital Address"
            />
             <FormField 
            name="password"
            placeholder="Hospital Password"
            secureTextEntry={true}
            />
            <SubmitButton title="Register" />
        </Form>
        </ScrollView>
    </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    padding:10,
    backgroundColor:colors.gray
  },
  logo: {
    height: 150,
    width: 150,
    alignSelf:"center"
  },
});
