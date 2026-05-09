import React, {useState} from 'react';
import {
    View, 
    Text, 
    Switch, 
    StyleSheet, 
    ToastAndroid,
    TouchableOpacity, 
    Alert,
    Button,
    TextInput,
    FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = ()=>{
    const [isEnabled, setIsEnabled] = useState(false)
    const [text, setText] = useState('')

   
    
    const pressButton = ()=>{
        Alert.alert("Thanks for Subscribe", 'Waiting GooglePay services', [
            {
                text:'Ok',
                onPress:()=>console.log('Ok Pressed'),
                style: 'cancel'
            }
        ] )
    }
    const showToast = ()=>{
        ToastAndroid.show("Toast!", ToastAndroid.LONG)
    }

    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Welcome to our APP</Text>
                <Text style={styles.desc}>cool app</Text>
            </View>
            <TouchableOpacity onPress={pressButton} style={styles.button}>
                <Text style={styles.buttonText}>Subscribe $2.99/Month</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={showToast} style={[styles.button ,{ backgroundColor: '#1b9c2c'}]}>
                <Text style={styles.buttonText}>Show Toast</Text>
            </TouchableOpacity>

            <Button title='Default button' color={'#0f836a'}/>

            <View style={styles.switch}>
                <Text style={{fontSize: 18}}>Notifications</Text>
                <Switch 
                trackColor={{'false':'#767577', true:'#81b0ff'}}
                thumbColor={isEnabled ? '#007aff' : '#f4f3f4'}
                onValueChange={() => setIsEnabled(!isEnabled)}
                value={isEnabled}
                />
            </View>
            <View style={styles.card}>
                <TextInput
                    style={styles.input} 
                    placeholder='Type something'
                    onChangeText={setText}
                    value={text}
                    placeholderTextColor="#999"
                />
                <Text style={{color:'gray', fontSize: 18}}>&gt; {text}</Text>
            </View>
        </View>
    )
}

/* Flex:
flex: 1
flexDirection: 'column'/'row'
justifyContent: 'center'/'space-between'/'flex-start'/'flex-end'
alignItems: center/stretch/flext-start
gap

Sizes
width/height: number/percent

margin/padding

marginVertical/marginHorizontal

*/

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
    listItem:{
        backgroundColor:"#f9f9f9",
        padding: 20,
        borderRadius: 10,
        borderLeftWidth: 5,
        borderLeftColor: '#007aff'
    },
    listItemText:{},

})
export default HomeScreen;