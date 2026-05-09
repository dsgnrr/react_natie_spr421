import { View, Text, FlatList, StyleSheet } from "react-native";

interface Item { 
    id:string,
    title: string
}

const AboutTab = () => {
    // const data = [
    //     { id: '1', title: 'item1' },
    //     { id: '2', title: 'item2' },
    //     { id: '3', title: 'item3' },
    //     { id: '4', title: 'item4' },
    //     { id: '5', title: 'item5' },
    //     { id: '6', title: 'item6' },
    // ];
    const data = [] as Item[]
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.listItem}>
                            <Text style={styles.listItemText}>{item.title}</Text>
                        </View>
                    )}
                    ListEmptyComponent={
                        <Text style={{
                            textAlign:'center',
                            marginTop: 50,
                            color: '#8e8e93',
                            fontSize: 16
                        }}>List is empty</Text>
                    }
                />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, gap: 15 },
    card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 15,
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.9,
        shadowRadius: 10,
        gap: 10
    },
    title: { fontSize: 22, fontWeight: 'bold', fontFamily: 'sans-serif' },
    desc: { fontSize: 16, color: '#666' },
    button: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonText: { color: '#ffffff', fontSize: 16, fontWeight: '600' },
    switch: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.9,
        shadowRadius: 10,
        borderRadius: 15
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 16
    },
    listItem: {
        backgroundColor: "#f9f9f9",
        padding: 20,
        borderRadius: 10,
        borderLeftWidth: 5,
        borderLeftColor: '#007aff',
        marginVertical: 8
    },
    listItemText: {fontSize: 16},

})

export default AboutTab;