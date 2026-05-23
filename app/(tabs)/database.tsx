import React, {useEffect, useState} from 'react';
import {
    View, 
    Text, 
    StyleSheet,
    TextInput,
    TouchableOpacity 
} from 'react-native';



const DatabaseScreen = ()=>{
    
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Welcome to our APP</Text>
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
export default DatabaseScreen;