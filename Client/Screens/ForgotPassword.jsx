import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react'
import RoadRanger from '../assets/RoadRanger.png';
import Icon from "react-native-vector-icons/Ionicons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useState } from 'react';
import GradientBackground from '../Components/GradientBackground';
import { Dropdown } from 'react-native-element-dropdown';
import { useRef } from 'react';

export default function ForgotPassword() {


    const navigation = useNavigation();
    const [errorMessage, setErrorMessage] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const newPasswordRef = useRef(null);
    const confirmNewPasswordRef = useRef(null);
    const [passwordResetStatus, setPasswordResetStatus] = useState('');


    const handleSendPress = () => {
        if (newPassword === confirmNewPassword) {
            setPasswordResetStatus('success');
            setErrorMessage('');
            // passwords match, handle password reset logic
        } else {
            // passwords don't match, display error message
            setErrorMessage('Passwords do not match. Please try again.');
            setNewPassword('');
            setConfirmNewPassword('');
            newPasswordRef.current.clear();
            confirmNewPasswordRef.current.clear();
        }
    };
    return (
        < GradientBackground>
            <View style={styles.container}>
                <Text style={styles.title}>Forgot Your Password?</Text>
                {/* <Image source={RoadRanger} style={styles.RoadRanger} /> */}
                <Text style={styles.text}>Email:</Text>
                <TextInput style={styles.input}
                    placeholder="User Email">
                </TextInput>
                <Text style={styles.text}>Write A New Password:</Text>
                <TextInput
                    style={styles.input}
                    ref={newPasswordRef}
                    onChangeText={setNewPassword}
                    secureTextEntry={true}
                    placeholder="New Password" >
                </TextInput>


                <Text style={styles.text}>Write again the New Password:</Text>
                <TextInput style={styles.input}
                    ref={confirmNewPasswordRef}

                    onChangeText={setConfirmNewPassword}
                    secureTextEntry={true}
                    placeholder="New Password">
                </TextInput>
                {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
                {passwordResetStatus === 'success' ? (
                    <Text style={styles.success}>
                        Password reset successful!
                    </Text>
                ) : null}
                <TouchableOpacity style={styles.btnLogIn} onPress={handleSendPress}>

                    <Text style={styles.btnText}>
                        Save
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
        padding: 10,
        width: "100%",

    },
    title: {
        fontSize: 40,
        marginBottom: 50
    },

    RoadRanger: {
        alignSelf: 'center',
        resizeMode: 'contain',
        height: 100

    },
    text: {
        paddingTop: 10,
        color: '#144800',
        fontSize: 20,
    },
    input: {
        flexDirection: 'row',
        marginVertical: 10,
        width: "90%",
        fontSize: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: '#144800',
        borderWidth: 1,
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
    placeholderStyle: {
        fontSize: 18,
        color: "#A9A9A9"
    },

    dropdown: {
        height: 40,
        borderColor: '#8FBC8F',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        borderColor: '#144800',
        borderWidth: 1,
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 10,
        marginTop: 10,
        width: "90%",

    },
    input1: {
        flexDirection: 'row',
        marginVertical: 10,
        width: "90%",
        fontSize: 20,
        paddingVertical: 70,
        paddingHorizontal: 15,
        borderColor: '#144800',
        borderWidth: 1,
        borderRadius: 25,


    },
    error: {
        color: 'red'
    },
    success: {
        color: '#144800'
    }
});