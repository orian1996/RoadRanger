import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Switch } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
import GradientBackground from '../Components/GradientBackground';

const gender = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
    { label: 'Other', value: 'Other' },]

const insurance = [
    { label: 'PassportCard', value: 'PassportCard' },
    { label: 'Harel', value: 'Harel' },
    { label: 'Other', value: 'Other' },
]


const DropdownComponent = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitchLocation = () => setIsEnabled(previousState => !previousState);
    const toggleSwitchChatMode = () => setIsEnabled(previousState => !previousState);
    const toggleNotification = () => setIsEnabled(previousState => !previousState);

    const handleDateSelect = (date) => {
        const formattedDate = moment(date).format('DD/MM/YY');
        setSelectedDate(formattedDate);
        setIsCalendarOpen(false);
    }


    return (
       < GradientBackground>
        <View style={styles.container}>
            

            <View style={{ padding: 10 }}>

                <Dropdown
                    style={[styles.dropdown, {
                        borderColor: '#144800', borderWidth: 2,
                        borderRadius: 25,
                    }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    data={gender}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={"Gender"}
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValue(item.value);
                        setIsFocus(false);
                    }}

                />
            </View>
            <View style={{ padding: 10 }}>
                <Dropdown
                    style={[styles.dropdown, {
                        borderColor: '#144800', borderWidth: 2,
                        borderRadius: 25,
                    }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    data={insurance}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={"Insurance Company"}
                    searchPlaceholder="Search..."
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValue(item.value);
                        setIsFocus(false);
                    }}

                />
            </View>
            <View>
                <TouchableOpacity onPress={() => setIsCalendarOpen(!isCalendarOpen)} style={styles.calendar}>
                    <Text style={styles.text}>{selectedDate ? selectedDate.toString() : 'Choose date'}</Text>
                </TouchableOpacity>
                {isCalendarOpen && (
                    <View>
                        <CalendarPicker onDateChange={handleDateSelect} />
                    </View>
                )}
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Location Mode</Text>
                <Switch
                    style={styles.switch}
                    trackColor={{ false: "#767577", true: "#8FBC8F" }}
                    thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitchLocation}
                    value={isEnabled}
                />
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Notification</Text>
                <Switch
                    style={styles.switch}
                    trackColor={{ false: "#767577", true: "#8FBC8F" }}
                    thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleNotification}
                    value={isEnabled}
                />
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Chat Mode</Text>
                <Switch
                    style={styles.switch}
                    trackColor={{ false: "#767577", true: "#8FBC8F" }}
                    thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={ toggleSwitchChatMode}
                    value={isEnabled}
                />
            </View>
            <TouchableOpacity style={styles.btnSave}>
        <Text style={styles.btnText}>
          Save
        </Text>
      </TouchableOpacity>
        </View>
        </GradientBackground>

    );
};

export default DropdownComponent;

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        // backgroundColor: 'white',
        padding: 16,
    },
    dropdown: {
        height: 50,
        borderColor: '#8FBC8F',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,

    },

    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,


    },
    placeholderStyle: {
        fontSize: 18,
    },
    selectedTextStyle: {
        fontSize: 18,
    },
    calendar: {
        flexDirection: 'row',
        marginVertical: 20,
        fontSize: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: '#144800',
        borderWidth: 2,
        borderRadius: 25,
        margin: 10,
        height: 50

    },
    text: {
        fontSize: 18,
        alignSelf: 'center',
        
    },
    row:{ flexDirection: 'row', alignItems: 'center' ,justifyContent: 'space-between',padding:20},
    btnSave: {
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

});



