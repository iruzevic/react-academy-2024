'use client'

import styles from "./page.module.css";
import { TodoList } from "../components/features/todo/TodoList/TodoList";
import { ITodo } from "@/typings/Todo.type";
import { TodoForm } from "@/components/shared/TodoForm/TodoForm";
import { title } from "process";
import { TodoListContainer } from "@/components/features/todo/TodoListContainer/TodoListContainer";
import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";

export default function Home() {
	return (
		<main className={styles.main}>
			<AuthRedirect to='/login' condition="isLoggedOut" />
			<TodoListContainer />
		</main>
	);
}
