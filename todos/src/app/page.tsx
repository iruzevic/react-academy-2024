'use client'

import { useState } from "react";
import styles from "./page.module.css";
import { TodoList } from "../components/features/todo/TodoList/TodoList";
import { ITodo } from "@/typings/Todo.type";
import { TodoForm } from "@/components/shared/TodoForm/TodoForm";
import { title } from "process";
import { TodoListContainer } from "@/components/features/todo/TodoListContainer/TodoListContainer";



export default function Home() {
	return (
		<main className={styles.main}>
			<TodoListContainer />
		</main>
	);
}
