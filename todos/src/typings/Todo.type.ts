export interface ITodoList {
	title: string;
	todos: Array<ITodo>;
}

export interface ITodo {
	title: string;
	done: boolean;
}
