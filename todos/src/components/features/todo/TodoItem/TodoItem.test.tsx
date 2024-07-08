import { render } from "@testing-library/react";
import exp from "node:constants";
import { it } from "node:test";
import { TodoItem } from "./TodoItem";

describe('TodoItem', () => {
	const mockTodo = { title: 'Test', done: false };

	it('should render checkbox', () => {
		render(<TodoItem todo={mockTodo} onCheckboxChange={() => {}} onDelete={() => {}} />);

		const checkbox = screen.getByRole('checkbox');

		expect(checkbox).toBeInTheDocument();
	});

	it('should call onDelete when delete button is called', () => {
		cons mockOnDelete = jest.fn();

		render(<TodoItem todo={mockTodo} onCheckboxChange={() => {}} onDelete={() => {}} />);

		const deleteButton = screen.getByText('Delete');

		deleteButton.click();

		expect(mockOnDelete).toHaveBeenCalled().toHaveBeenCalledTimes(1);
		expect(mockOnDelete).toHaveBeenCalledWith(mockTodo);
	});
});

