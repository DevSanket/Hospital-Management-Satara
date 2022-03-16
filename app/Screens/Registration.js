import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import Screen from "../Components/Screen";
import CategoryPickerItem from "../Components/CategoryPickerItem";
import * as Yup from "yup";
import { Form,FormField,SubmitButton,FormPicker as Picker,FormImagePicker} from '../Components/forms';

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
  return (
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
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <FormImagePicker name="images" />
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    padding:10
  },
  logo: {
    height: 150,
    width: 150,
    alignSelf:"center"
  },
});
