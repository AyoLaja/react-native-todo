import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        // height: 80,
        paddingTop: 58,
        backgroundColor: '#1a1a1a',
        padding: 20
    },
    title: {
        color: '#b7b7b7',
        fontSize: 30,
        fontWeight: 'bold'
    }
})