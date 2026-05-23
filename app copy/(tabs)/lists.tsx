import { View, SectionList,Dimensions, StyleSheet, Text, useWindowDimensions } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { StatusBar } from "react-native"
import { useEffect, useState } from "react"

interface Item {
    title: string,
    data: string[]
}

const ListsTab = () => {
    // const window = Dimensions.get("window");
    // console.log(window)
    const [windowData, setWindowData] = useState(Dimensions.get('window'));

    useEffect(()=>{
        const subscription = Dimensions.addEventListener('change',({window, screen})=>{
            setWindowData(window)
            console.log('Orientation changed: ', window)
        })
    },[])

    const dimension = useWindowDimensions();
    const insets = useSafeAreaInsets();
    const data: Item[] = [
        {
            title: 'Category1',
            data: ['item1', 'item2', 'item3', 'item4']
        },
        {
            title: 'Category2',
            data: ['item1', 'item2', 'item3', 'item4']
        },
        {
            title: 'Category3',
            data: ['item1', 'item2', 'item3', 'item4']
        },
    ]
    return (
        <View style={[styles.container,{paddingTop: insets.top, paddingBottom: insets.bottom}]}>
            <StatusBar barStyle="dark-content" backgroundColor="#138539" translucent={true}/>
            <View style={styles.card}>
                <SectionList
                    sections={data}
                    renderItem={({ item }) => (
                        <View style={styles.itemRow}>
                            <Text style={styles.itemText}>{item}</Text>
                        </View>
                    )}
                    renderSectionHeader={({section:{title}})=>(
                        <View style={styles.headerRow}>
                            <Text style={styles.headerText}>{title}</Text>
                        </View>
                    )}
                    keyExtractor={(item,index) => item+index}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 2, padding: 20, gap: 15 },
    headerRow:{
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginBottom:10 
    },
    headerText:{
        fontSize: 18,
        fontWeight:'bold',
        color: '#333'
    },
    card: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 15,
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.9,
        shadowRadius: 10,
        gap: 10
    },

    itemRow: {
        backgroundColor: "#f9f9f9",
        padding: 20,
        marginBottom: 5,
        borderRadius: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#007aff',
        borderLeftWidth: 2,
        borderLeftColor: '#007aff',
    },
    itemText: { fontSize: 16 },

})

export default ListsTab;