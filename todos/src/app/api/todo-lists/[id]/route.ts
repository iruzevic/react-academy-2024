var fs = require('fs');
import { ITodoList } from '@/typings/TodoList.types';

const todoListsJson = require('@/todoLists.json');

export async function GET(_request: Request, { params }: { params: { id: string } }) {
	if (params.id) {
		const todoList = todoListsJson.todoLists.find((todoList: ITodoList) => todoList.id === params.id);

		if (todoList) {
			return Response.json(todoList);
		}
	}

	return null;
}


export async function POST(_request: Request, { params, body }: { params: { id: string }, body: ITodoList }) {
	if (params.id && body) {
		
		console.log('body', body, params.id);
		// const todoListIndex = todoListsJson.todoLists.findIndex((todoList: ITodoList) => todoList.id === params.id);

		// if (todoListIndex !== -1) {
		// 	todoListsJson.todoLists[todoListIndex] = body;
		// 	return Response.json(body);
		// }
	}

	return null;
}