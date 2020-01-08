import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Sandbox() {
    return (
        <View style={styles.container}>
            <Text style={styles.box1}>Sandbox1</Text>
            <Text style={styles.box2}>Sandbox2</Text>
            <Text style={styles.box3}>Sandbox3</Text>
            <Text style={styles.box4}>Sandbox4</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 40,
        alignItems: 'center',
        backgroundColor: '#1a1a1a'
    },
    box1: {
        flex: 1,
        backgroundColor: '#b7b7b7',
        padding: 10
    },
    box2: {
        flex: 1,
        backgroundColor: '#555',
        padding: 10
    },
    box3: {
        flex: 1,
        backgroundColor: '#333',
        padding: 10
    },
    box4: {
        flex: 1,
        backgroundColor: '#e8e8e8',
        padding: 10
    },
})