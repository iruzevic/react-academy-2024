import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"
import { TodoListsTableItem } from "./components/TodoListsTableItem"
import { ITodoList } from "@/typings/Todo.type"

interface ITodoListsTableProps {
	todoLists: Array<ITodoList>;
}


export const TodoListsTable = ({todoLists}: ITodoListsTableProps) => {
	return (
		<TableContainer>
			<Table variant='simple'>
				<Thead>
					<Tr>
						<Th>TITLE</Th>
						<Th>ID</Th>
						<Th textAlign='right'>Actions</Th>
					</Tr>
				</Thead>
				<Tbody>
					{todoLists.map((todoList) => {
						return <TodoListsTableItem todoList={todoList} key={todoList.id}/>
					})}
				</Tbody>
			</Table>
		</TableContainer>
	)
}
