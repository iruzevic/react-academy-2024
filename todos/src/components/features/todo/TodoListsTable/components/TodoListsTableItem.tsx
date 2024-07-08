'use client';

import { ITodoList } from "@/typings/Todo.type"
import { DeleteIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup, IconButton, Td, Tr } from "@chakra-ui/react"
import NexLink from "next/link";

interface ITodoListsTableItemProps {
	todoList: ITodoList;
}

export const TodoListsTableItem = ({todoList}: ITodoListsTableItemProps) => {
	return (
		<Tr>
			<Td>{todoList.title}</Td>
			<Td>{todoList.id}</Td>
			<Td textAlign={'right'}>
				<ButtonGroup>
					<Button as={NexLink} href={`/todo-lists/${todoList.id}`}>Details</Button>
					<IconButton aria-label='Delete todo list' icon={<DeleteIcon />} />
				</ButtonGroup>
			</Td>
		</Tr>
	)
}
