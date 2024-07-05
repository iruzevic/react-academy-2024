'use client';

import { ITodo } from "@/typings/Todo.type";
import { TodoList } from "../TodoList/TodoList";
import { TodoForm } from "@/components/shared/TodoForm/TodoForm";
import { useEffect, useState } from "react";
import { log } from "console";

const mockTodoList = {
	title: "My first todo",
	todos: [
		{
			title: "Buy milk",
			done: true,
		},
		{
			title: "Buy eggs",
			done: false,
		},
		{
			title: "Buy bread",
			done: false,
		},
	],
};

export const TodoListContainer = () => {
	const [todoList, setTodoList] = useState(mockTodoList);

	useEffect(() => {
		const loadedList = loadFromLocalStorage();
		setTodoList(loadedList);
	}, []);

	useEffect(() => {
		saveToLocalStorage();
	}, [todoList]);

	const saveToLocalStorage = () => {
		localStorage.setItem('todo-lists', JSON.stringify(todoList));
	}

	const loadFromLocalStorage = () => {
		const todoListOutput = localStorage.getItem('todo-lists');

		if (!todoListOutput) {
			return mockTodoList;
		}

		return JSON.parse(todoListOutput);
	}

	const onAddTodo = (todo: ITodo) => {
		const newTodoList = {
			title: todoList.title,
			todos: [todo, ...todoList.todos],
		}

		setTodoList(newTodoList);
	}

	return (
		<>
			{
				todoList.todos.length &&
				<TodoList todoList={todoList} />
			}
			<TodoForm onAdd={onAddTodo} />
		</>
	);
}
