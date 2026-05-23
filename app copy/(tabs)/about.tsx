import { useRef, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Animated, Image } from "react-native";

interface Item {
    id: string,
    title: string
}

const AboutTab = () => {
    const data: Item[] = [
        { id: '1', title: 'item1' },
        { id: '2', title: 'item2' },
        { id: '3', title: 'item3' },
        { id: '4', title: 'item4' },
        { id: '5', title: 'item5' },
        { id: '6', title: 'item6' },
        { id: '7', title: 'item6' },
        { id: '8', title: 'item6' },
        { id: '9', title: 'item6' },
        { id: '10', title: 'item6' },
        { id: '11', title: 'item6' },
        { id: '12', title: 'item6' },
        { id: '13', title: 'item6' },
        { id: '14', title: 'item6' },
        { id: '15', title: 'item6' },
        { id: '16', title: 'item6' },
        { id: '17', title: 'item6' },
        { id: '18', title: 'item6' },
        { id: '19', title: 'item6' },
        { id: '20', title: 'item6' },
        { id: '21', title: 'item6' },
        { id: '22', title: 'item6' },
        { id: '23', title: 'item6' },
        { id: '24', title: 'item6' },
        { id: '25', title: 'item6' },
        { id: '26', title: 'item6' },
        { id: '27', title: 'item6' },
        { id: '28', title: 'item6' },
        { id: '29', title: 'item6' },
    ];
    // const data = [] as Item[]
    const fadeAnim = useRef(data.map(() => new Animated.Value(0))).current;

    useEffect(() => {
        data.forEach((_, i) => {
            Animated.timing(fadeAnim[i], {
                toValue: 1,
                duration: 500,
                delay: 200,
                useNativeDriver: true
            }).start()
        })
    }, [])

    const renderItem = ({ item, index }: { item: Item, index: number }) => (
        <Animated.View style={[styles.listItem, { opacity: fadeAnim[index] }]}>
            <Text style={styles.listItemText}>{item.title}</Text>
        </Animated.View>
    )


    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require("../../assets/firefox.jpg")}></Image>
                </View>
            <View style={styles.card}>
                
                <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    /*renderItem={({ item }) => (
                        <View style={styles.listItem}>
                            <Text style={styles.listItemText}>{item.title}</Text>
                        </View>
                    )}*/
                    renderItem={renderItem}
                    ListEmptyComponent={
                        <Text style={{
                            textAlign: 'center',
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
    container: { flex: 2, padding: 20, gap: 15 },
    imageContainer: {
        flex: 2,
        borderColor: "darkgray",
        borderWidth: 2,
        position: "relative",
        borderRadius: 15,
        overflow: 'hidden'
    },
    image: {
        flex: 1,
        width: "100%",
        height: "100%",
        resizeMode: "cover"
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
    listItemText: { fontSize: 16 },

})

export default AboutTab;