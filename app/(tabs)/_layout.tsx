import { Tabs } from "expo-router";
import {Ionicons} from '@expo/vector-icons'
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

const TabLayout = () =>{
    return(
        <Tabs screenOptions={{
            tabBarActiveTintColor: '#007AFF',
            headerStyle :{backgroundColor:'#f5f5f5'}
        }}>
            <Tabs.Screen name="index" 
            options={{
                title:'Main Page', 
                tabBarIcon:({color})=> <Ionicons name="home" size={24} color={color}/>}}
            />
            <Tabs.Screen name="database" 
            options={{
                title:'Database', 
                tabBarIcon:({color})=> <Entypo name="database" size={24} color={color} />}}
            />
            <Tabs.Screen name="rest" 
            options={{
                title:'RestAPI', 
                tabBarIcon:({color})=> <AntDesign name="api" size={24} color={color} />}}
            />
        </Tabs>
    )
}

export default TabLayout;