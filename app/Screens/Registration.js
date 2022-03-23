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
    label: "Furniture",
    value: 1,
  },
  {
    label: "Cars",
    value: 2,
  },
  {
    label: "Cameras",
    value: 3,
  },
  {
    label: "Games",
    value: 4,
  },
  {
    label: "Clothing",
    value: 5,
  },
  {
    label: "Sports",
    value: 6,
  },
  {
    label: "Movies & Music",
    value: 7,
  },
  {
    label: "Books",
    value: 8,
  },
  {
    label: "Other",
    value: 9,
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
      await createHospitalProfile(user,images,{name,Contact_No,Address,Taluka});
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
