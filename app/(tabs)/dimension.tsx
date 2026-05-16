import { View, SectionList, Dimensions, StyleSheet, Text, useWindowDimensions } from "react-native"
import { useEffect, useState } from "react"

const dimensionTab = () => {

    const dimension = useWindowDimensions();
    const isWide = dimension.width > 500;
    const cards = ['A', 'B', 'C', 'D']
    const styles = StyleSheet.create({
        container: {
            padding: 10,
            flex: 1,
            backgroundColor: 'lightblue'
        },
        cardContainer: {
            flex: 1,
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: isWide ? 'row': 'column'
        },
        card: {
            backgroundColor: '#216778',
            width: isWide ? 50: 150,
            height: isWide? 50: 150,
            margin: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10
        },
        cardContent: {
            color: 'white',
            fontSize: 24
        }
    })
    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                {cards.map((item, index) => (
                    <View key={index} style={styles.card}>
                        <Text style={styles.cardContent}>{item}</Text>
                    </View>
                ))}
            </View>
        </View>
    )
}


export default dimensionTab;