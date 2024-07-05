import { ITodo } from "@/typings/Todo.type";
import { Button, Checkbox, Flex, Text } from "@chakra-ui/react";

interface ITodoItemProps {
	todo: ITodo;
}

export const TodoItem = ({ todo }: ITodoItemProps) => {
	return (
		<Flex alignItems="center" gap={2}>
			<Checkbox
				onChange={() => {
					console.log("Checkbox clicked");
				}}
				isChecked={todo.done}
			/>
			<Text flexGrow={1}>
				{todo.title}
			</Text>
			<Button
				colorScheme="red"
			>
				Delete
			</Button>
		</Flex>
	);
}
