import { View, SectionList, Dimensions,Alert ,TouchableOpacity, StyleSheet, Text, useWindowDimensions, Platform, ToastAndroid } from "react-native"
import { useEffect, useState } from "react"

import * as Notifications from "expo-notifications";
import* as Contacts from "expo-contacts";

const dimensionTab = () => {

    console.log("Platform version: ", Platform.Version)
    console.log("Platform OS: ", Platform.OS)
    console.log("Platform constants: ", Platform.constants)
    const dimension = useWindowDimensions();
    const isWide = dimension.width > 500;
    const cards = ['A', 'B', 'C', 'D'];

    const getContact = async () => {
        const {status} = await Contacts.requestPermissionsAsync();
        if(status === 'granted'){
            const {data} = await Contacts.getContactsAsync({
                fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Name]
            })
            if(data.length > 0){
                Alert.alert("First contact",`Name: ${data[0].name}\nPhone numbers: ${data[0].phoneNumbers?
                    data[0].phoneNumbers[0].number:"No-set"
                }`)
            }
        }
    }
    const showPushNotify = async () => {
        if (Platform.OS !== 'android') return;

        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            ToastAndroid.show("Go to settings and allow notifiacation permission", ToastAndroid.LONG);
        }

        await Notifications.setNotificationChannelAsync('default', {
            name: 'Main Channel',
            importance: Notifications.AndroidImportance.MAX,
            lightColor: "#3f9dd8ff",
            description: "Notify push"
        })
    }


    const styles = StyleSheet.create({
        container: {
            padding: 10,
            flex: 1,
            backgroundColor: 'lightblue'
        },
        cardContainer: {
            flex: 1,
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: isWide ? 'row' : 'column'
        },
        button: {
            backgroundColor: '#007AFF',
            padding: 15,
            borderRadius: 10,
            alignItems: 'center'
        },
        buttonText: { color: '#ffffff', fontSize: 16, fontWeight: '600' },
        card: {
            backgroundColor: '#216778',
            width: isWide ? 50 : 150,
            height: isWide ? 50 : 150,
            margin: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10
        },
        cardContent: {
            color: 'white',
            fontSize: 24
        }
    })
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={showPushNotify} style={styles.button}>
                <Text style={styles.buttonText}>Notify</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={getContact} style={styles.button}>
                <Text style={styles.buttonText}>Get contact</Text>
            </TouchableOpacity>
            <View style={styles.cardContainer}>
                {cards.map((item, index) => (
                    <View key={index} style={styles.card}>
                        <Text style={styles.cardContent}>{item}</Text>
                    </View>
                ))}
            </View>
        </View>
    )
}


export default dimensionTab;