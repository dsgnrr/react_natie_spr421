import { Tabs } from "expo-router";
import {Ionicons} from '@expo/vector-icons'
import Feather from '@expo/vector-icons/Feather';
import EvilIcons from '@expo/vector-icons/EvilIcons';

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
            <Tabs.Screen name="about" 
            options={{
                title:'About', 
                tabBarIcon:({color})=> <EvilIcons name="question" size={24} color={color}/>}}
            />
            <Tabs.Screen name="lists"
            options={{
                title: 'Lists',
                tabBarIcon:({color})=> <Feather name="list" size={24} color={color} />
            }}
            />
        </Tabs>
    )
}

export default TabLayout;