export interface ITodoList {
	id: string;
	title: string;
	todos: Array<ITodo>;
}

export interface ITodo {
	title: string;
	done: boolean;
}
