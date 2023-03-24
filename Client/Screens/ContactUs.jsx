import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react'
import RoadRanger from '../assets/RoadRanger.png';
import Icon from "react-native-vector-icons/Ionicons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useState } from 'react';
import GradientBackground from '../Components/GradientBackground';
import { Dropdown } from 'react-native-element-dropdown';


export default function ContactUs() {
    const Subject = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
    ]
    const [value, setValue] = useState(null);

    const navigation = useNavigation();
    state = {
        showPassword: false
    };
    return (
        < GradientBackground>
            <View style={styles.container}>
                <Text>Be sure to leave an accurate message so we can get back to you as soon as possible  </Text>
                {/* <Image source={RoadRanger} style={styles.RoadRanger} /> */}
                <Text style={styles.text}>Email:</Text>
                <TextInput style={styles.input}
                    placeholder="User Email">
                </TextInput>
                <Text style={styles.text}>Name:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Full Name" >
                </TextInput>
                <Text style={styles.text}>Subject:</Text>
                <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    data={Subject}
                    // maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={"select a subject type"}
                    value={value}

                    onChange={item => {
                        setValue(item.value);
                    }}

                />
                <Text style={styles.text}>Message:</Text>
                <TextInput style={styles.input1}
                    placeholder="Write here...">
                </TextInput>
                <TouchableOpacity style={styles.btnLogIn}>
                    <Text style={styles.btnText}>
                        Send
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

    RoadRanger: {
        alignSelf: 'center',
        resizeMode: 'contain',
        height: 100

    },
    text: {
        paddingTop: 10,
        color: '#144800',
        fontSize: 25,
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
});