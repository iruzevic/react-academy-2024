import { ITodo } from "@/typings/Todo.type";
import { Button, Flex, Input } from "@chakra-ui/react";

interface ITodoFormProps {
	onAdd: (todo: ITodo) => void;
}

export const TodoForm = ({onAdd}: ITodoFormProps) => {
	const onClickHandler = () => {
		const inputElement = document.getElementById('title-input') as HTMLInputElement;
		const value = inputElement.value;
		const newTodo: ITodo = {
			title: value,
			done: false
		};

		onAdd(newTodo);
	};

	return (
		<Flex gap={12}>
			<Input
				id="title-input"
				placeholder="I need to..."
				variant='flushed'
			/>
			<Button onClick={onClickHandler}>Add</Button>
		</Flex>
	);
}
