import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';

export default function AddTodo(props) {
    const [todo, setTodo] = useState('')

    const changeHandler = (val) => {
        setTodo(val)
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Add a todo..."
                onChangeText={changeHandler}
            />
            <View style={styles.buttonContainer}>
                <Button
                    title="Add todo"
                    onPress={() => props.submitHandler(todo)}
                    color='#fff'
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderBottomColor: 'green',
		padding: 10,
        borderRadius: 5,
		marginBottom: 10,
		color: '#555'
    },
    buttonContainer: {
		marginTop: 10,
        backgroundColor: 'green',
        borderRadius: 35,
        padding: 10
	},
})