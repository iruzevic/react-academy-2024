'use client';

import { getTodoList } from "@/fetchers/todo";
import { TodoList } from "../TodoList/TodoList"
import useSWR from "swr";
import { useParams } from "next/navigation";

const mock = [
	{
		id: 1,
		title: 'First list',
		todos: [],
	},
	{
		id: 2,
		title: 'Second list',
		todos: [],
	}
];

export const TodoListsDetailsSection = () => {
	const params = useParams();

	const { data, error, isLoading } = useSWR(`/todo-lists/${params.id}`, () => getTodoList(params.id as string))

	if (error) {
		return <div>Something went wrong</div>
	}

	if (isLoading || !data) {
		return <div>Loading...</div>
	}

	return (
		<TodoList todoList={data} onCheckboxChange={() => {}} onDelete={() =>{}} />
	)
}
