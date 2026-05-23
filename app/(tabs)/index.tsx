import React, {useEffect, useState} from 'react';
import {
    View, 
    Text, 
    StyleSheet,
    TextInput,
    TouchableOpacity 
} from 'react-native';
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { MMKV, useMMKVString } from 'react-native-mmkv';
import {storage} from '@/lib/storage';


const HomeScreen = ()=>{
    const [name, setName] = useState("");
    const [savedName, setSavedName] = useMMKVString('username', storage)

    useEffect(()=>{
        loadName()
    }, [])
    // const saveNameAsync = async () => {
    //     try {
    //         await AsyncStorage.setItem("username", name)
    //         setSavedName(name)
    //         setName("")
    //     } catch (error) {
    //         console.error("Save error: ", error)
    //     }
    // }
    const saveName = () => {
        try {
            storage.set("username", name)
            setSavedName(name)
            setName("")
        } catch (error) {
            console.error("Save error: ", error)
        }
    }

    const loadName = async () => {
        try {
            const storedValue =  storage.getString("username")
            if(storedValue) setSavedName(storedValue)
        } catch (error) {
            console.error("Load error: ", error)
        }
    }

    // const loadNameAsync = async () => {
    //     try {
    //         const storedValue = await AsyncStorage.getItem("username")
    //         if(storedValue) setSavedName(storedValue)
    //     } catch (error) {
    //         console.error("Load error: ", error)
    //     }
    // }

    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Welcome {savedName?"":", "+savedName+" "}to our APP</Text>
                <Text style={styles.desc}>{savedName}</Text>
            </View>
            <View style={styles.card}>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder='Enter name'
                    placeholderTextColor='#999'
                ></TextInput>
                <TouchableOpacity
                onPress={saveName}
                style={styles.button}
                >
                    <Text style={styles.buttonText}>Save Name</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{flex:1, padding: 20, gap:15},
    card:{
        backgroundColor:'#fff',
        padding:20,
        borderRadius: 15,
        elevation: 4,
        shadowColor:'#000',
        shadowOpacity: 0.9,
        shadowRadius: 10,
        gap: 10
    },
    title:{fontSize: 22, fontWeight:'bold', fontFamily:'sans-serif'},
    desc:{fontSize:16, color:'#666'},
    button:{
        backgroundColor:'#007AFF',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonText: {color:'#ffffff', fontSize: 16, fontWeight:'600'},
    switch:{
        backgroundColor:'#fff',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        padding: 20,
        elevation: 4,
        shadowColor:'#000',
        shadowOpacity: 0.9,
        shadowRadius: 10,
        borderRadius: 15
    },
    input:{
        height:50,
        borderWidth:1,
        borderColor:'#ccc',
        borderRadius:8,
        paddingHorizontal: 15,
        fontSize: 16
    },
})
export default HomeScreen;