import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import RoadRanger from '../assets/RoadRanger.png';
// import SQLite from 'react-native-sqlite-storage';
import GradientBackground from '../Components/GradientBackground';
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const db = SQLite.openDatabase({ name: 'igroup190_prod' });

export default function SignUp() {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  // const handleSignUp =  () => {

  // };
  const handleSignUp = async () => {
    try {
      const response = await fetch('http://cgroup90@194.90.158.74/cgroup90/prod/api/post/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          phone: phone,
          password: password,
          firstName: firstName,
          lastName: lastName
        })
      });

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      // Handle successful sign-up here
      // For example, you can navigate to a success screen:
      navigation.navigate('SignUpSuccess');
    } catch (error) {
      console.error(error);
      // Handle errors here, such as displaying an error message to the user
    }
  };

  return (
    <ScrollView>
      < GradientBackground>
        <View style={styles.container}>
          <Image source={RoadRanger} style={styles.RoadRanger} />
          <Text style={styles.text}>First Name:</Text>
          <TextInput style={styles.input}
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
            placeholder="First Name">
          </TextInput>
          <Text style={styles.text}>Last Name:</Text>
          <TextInput style={styles.input}
            value={lastName}
            onChangeText={(text) => setLastName(text)}
            placeholder="Last Name">
          </TextInput>
          <Text style={styles.text}>Email:</Text>
          <TextInput style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="User Email">
          </TextInput>
          <Text style={styles.text}>Password:</Text>
          <TextInput style={styles.input}
            placeholder="*****"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          >
          </TextInput>
          <Text style={styles.text}>phone:</Text>
          <TextInput style={styles.input}
            placeholder="phone"
            value={phone}
            onChangeText={(text) => setPhone(text)}
            secureTextEntry={true}
          >
          </TextInput>

          <TouchableOpacity style={styles.btnSignUp} onPress={handleSignUp}>
            <Text style={styles.btnText}>
              Sign Up
            </Text>
          </TouchableOpacity>


          <TouchableOpacity style={{ flexDirection: 'row' }}>
            <Icon name="mail-open-outline" size={30} />
            <Text style={styles.contact}>
              Contact us
            </Text>
          </TouchableOpacity>
        </View>

      </GradientBackground>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 20,
    width: "100%",

  },

  RoadRanger: {
    alignSelf: 'center',
    resizeMode: 'contain',
    height: 100

  },
  text: {
    color: '#144800',
    fontSize: 30,

  },
  input: {
    flexDirection: 'row',
    marginVertical: 20,
    width: "90%",
    fontSize: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#144800',
    borderWidth: 2,
    borderRadius: 25,

  },
  btnSignUp: {
    marginVertical: 20,
    width: "50%",
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#144800',
    borderWidth: 2,
    borderRadius: 25,
    backgroundColor: '#144800'
  },
  btnText: {
    color: '#F8F8FF',
    alignSelf: 'center',
    fontSize: 20,

  },
  contact: {
    fontSize: 20,
    alignSelf: 'center',
    marginLeft: 10
  }
});