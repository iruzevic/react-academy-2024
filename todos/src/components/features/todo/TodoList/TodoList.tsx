import { ITodoList } from "@/typings/Todo.type";
import { TodoItem } from "../TodoItem/TodoItem";
import { Container, Flex, Heading } from "@chakra-ui/react";
import { TodoForm } from "@/components/shared/TodoForm/TodoForm";

interface ITodoListProps {
	todoList: ITodoList;
}

export const TodoList = ({todoList}: ITodoListProps) => {
	return (
		<Container>
			<Heading size="md" marginBottom={2}>
				{todoList.title}
			</Heading>

			<Flex direction="column" gap={3} marginTop={3}>
				{todoList.todos.map((todo, i) => (
					<TodoItem key={i} todo={todo} />
				))}
			</Flex>
		</Container>
	);
}
