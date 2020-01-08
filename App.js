import React, { useState } from 'react';
import { 
	StyleSheet, 
	Alert, 
	View, 
	FlatList, 
	TouchableWithoutFeedback, 
	Keyboard } from 'react-native';
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'
import Sandbox from './components/Sandbox'


export default function App() {
	const [todos, setTodos] = useState([
		{ text: 'buy coffee', key: '1' },
		{ text: 'create an app', key: '2' },
		{ text: 'play on the switch', key: '3' }
	])

	const pressHandler = (key) => {
		setTodos((prevToDos) => {
			return prevToDos.filter(todos => todos.key !== key)
		})
	}

	const submitHandler = (todo) => {
		if (todo.length > 3) {
			setTodos((prevTodos) => {
				// let newID = parseInt(todos[todos.length].key) + 1
				return [
					...prevTodos,
					{ text: todo, key: Math.random().toString() }
				]
			})
		}
		else {
			Alert.alert('Error', 'Todos must be over 3 characters long', [
				{text: 'Understood', onPress: () => console.log('alert closed')}
			])
		}
	}

	return (
		// <Sandbox/>
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.container}>
				{/* Header */}
				<Header/>
				<View style={styles.content}>
					{/* todo form */}
					<AddTodo submitHandler={submitHandler}/>
					<View style={styles.list}>
						<FlatList
							data={todos}
							renderItem={({ item }) => (
								<TodoItem item={item} pressHandler={pressHandler}/>
							)}
						/>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}
	
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	content: {
		backgroundColor: '#e8e8e8',
		padding: 40,
		flex: 1
	},
	list: {
		flex: 1,
		paddingTop: 10,
		// backgroundColor: '#eee',
	}
});
	