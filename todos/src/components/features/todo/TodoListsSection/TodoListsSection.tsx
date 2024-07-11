'use client';

import { Button, Card, CardBody, CardHeader, Flex, Input } from "@chakra-ui/react"
import { TodoListsTable } from "../TodoListsTable/TodoListsTable";
import { todo } from "node:test";
import { use, useEffect } from "react";
import { getTodoLists } from "@/fetchers/todo";
import { log } from "console";
import { ITodoList } from "@/typings/Todo.type";
import useSWR from "swr";
import { swrKeys } from "@/fetchers/swrKeys";
import { fetcher } from "@/fetchers/fetcher";

export const TodoListsSection = () => {

	const {
		data: todoLists,
		error,
		isLoading
	} = useSWR<Array, <ITodoLists>>(swrKeys.todoLists, fetcher)

	if (error) {
		return <div>Something went wrong</div>
	}

	if (isLoading) {
		return <div>Loading...</div>
	}

	return (
		<Card maxW={'800px'} mx={'auto'} mt={5}  backgroundColor={'white'}>
			<CardHeader>
				<Flex gap={2}>
					<Input placeholder="Search by title" />
					<Button>Add new list</Button>
				</Flex>

			</CardHeader>
			<CardBody>
				{todoLists && <TodoListsTable todoLists={todoLists} />}
			</CardBody>
		</Card>
	);
};
