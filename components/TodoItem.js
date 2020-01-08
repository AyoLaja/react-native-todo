import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TodoItem(props) {
    return (
        <TouchableOpacity onPress={() => props.pressHandler(props.item.key)}>
            <View style={styles.item}>
                <Text style={styles.text}>{props.item.text}</Text>
                <Ionicons name="md-trash" size={25} color="#b00931" />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        marginTop: 16,
        borderColor: '#555',
        borderWidth: 2,
        borderStyle: 'dashed',
        borderRadius: 5,
        fontWeight: 'bold'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 17
    }
})