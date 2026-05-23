import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    FlatList
} from 'react-native';

import { fakeApi } from '@/lib/fake-api';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const RestScreen = () => {
    const [post, setPost] = useState<Post>();
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);
    

    const getPostsHandle = async () => {
        setLoading(true);
        const res = await fakeApi.get('/posts');
        console.log("Status: ", res.status);
        setPosts(res.data);
        setLoading(false);
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then((response) => response.json())
        //     .then(setPosts)
        //     .catch(console.error)
        //     .finally(()=>{
        //         setLoading(false);
        //     })
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={getPostsHandle} style={styles.button}>
                <Text style={styles.buttonText}>Get posts</Text>
            </TouchableOpacity>
            <View style={styles.card}>
                {loading? <ActivityIndicator/>:(
                <FlatList
                    data={posts}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.listItem}>
                            <Text style={styles.listItemId}>Id: {item.userId}</Text>
                            <Text style={styles.listItemUserId}>User: {item.id}</Text>
                            <Text style={styles.listItemTitle}>{item.title}</Text>
                            <Text style={styles.listItemBody}>{item.body}</Text>
                        </View>
                    )}
                    ListEmptyComponent={
                        <Text style={{
                            textAlign: 'center',
                            marginTop: 50,
                            color: '#8e8e93',
                            fontSize: 16
                        }}>List is empty</Text>
                    }
                />
                )}
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
    listItemId: { fontSize: 11 },
    listItemUserId: { fontSize: 11, fontWeight: "bold" },
    listItemTitle: { fontSize: 18, fontWeight: "bold" },
    listItemBody: { fontSize: 16, color: "#222222" },
})
export default RestScreen;