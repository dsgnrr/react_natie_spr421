import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = ()=>{

    const pressButton = ()=>{
        Alert.alert("Thanks for Subscribe", 'Waiting GooglePay services', [
            {
                text:'Ok',
                onPress:()=>console.log('Ok Pressed')
            }
        ] )
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
        shadowRadius: 10
    },
    title:{fontSize: 22, fontWeight:'bold', fontFamily:'sans-serif'},
    desc:{fontSize:16, color:'#666', marginTop: 10},
    button:{
        backgroundColor:'#007AFF',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonText: {color:'#ffffff', fontSize: 16, fontWeight:'600'}
})
export default HomeScreen;