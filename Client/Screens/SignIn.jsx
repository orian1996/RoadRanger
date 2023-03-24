import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react'
import RoadRanger from '../assets/RoadRanger.png';
import Icon from "react-native-vector-icons/Ionicons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useState } from 'react';
import GradientBackground from '../Components/GradientBackground';

export default function SignIn() {

    const navigation = useNavigation();
    state = {
        showPassword: false
    };
    return (
        < GradientBackground>

            <View style={styles.container}>
                <Image source={RoadRanger} style={styles.RoadRanger} />
                <Text style={styles.text}>Email:</Text>
                <TextInput style={styles.input}
                    placeholder="User Email">
                </TextInput>
                <Text style={styles.text}>Password:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="***"
                    secureTextEntry={!this.state.showPassword}
                >
                    {/* <Icon
                        name={this.state.showPassword ? 'eye-outline' : 'eye-outline'}
                        size={30}
                        onPress={() =>
                            this.setState(prevState => ({
                                showPassword: !prevState.showPassword
                            }))
                        }
                    /> */}
                </TextInput>


                <TouchableOpacity onPress={() => {
                    navigation.navigate("Forgot password")}}>
                    <Text >
                        Forgot you'r password?
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnLogIn}>
                    <Text style={styles.btnText}>
                        Log In
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnSignUp} onPress={() => {
                    navigation.navigate("Sign Up");
                }}>
                    <Text > Don't have an Account?  </Text>
                    <Text style={styles.text1}> Click Here </Text>

                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', marginTop:150}} onPress={() => {
                    navigation.navigate("Contact Us");
                }}>
                    <Icon name="mail-open-outline" size={30} />
                    <Text style={styles.contact}>
                        Contact us
                    </Text>
                </TouchableOpacity>
            </View >
        </ GradientBackground>

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
        flexDirection: 'row',
        alignItems: 'center'

    },
    btnLogIn: {
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
    btnSignUp: {
        flexDirection: 'row',
        marginBottom:20,
        marginTop:20
    },
    contact: {
        fontSize: 20,
        alignSelf: 'center',
        marginLeft: 10,
    },
    text1: {
        fontWeight: 'bold',
        fontSize: 15,

    }
});