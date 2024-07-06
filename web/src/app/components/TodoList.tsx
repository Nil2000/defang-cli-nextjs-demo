"use client";
import { useState } from "react";

interface Todo {
	text: string;
	completed: boolean;
}

const TodoList: React.FC = () => {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [inputValue, setInputValue] = useState<string>("");

	const addTodo = () => {
		if (inputValue.trim() !== "") {
			setTodos([...todos, { text: inputValue, completed: false }]);
			setInputValue("");
		}
	};

	const toggleTodo = (index: number) => {
		const newTodos = [...todos];
		newTodos[index].completed = !newTodos[index].completed;
		setTodos(newTodos);
	};

	const deleteTodo = (index: number) => {
		const newTodos = todos.filter((_, i) => i !== index);
		setTodos(newTodos);
	};

	return (
		<div className="container mx-auto p-4 max-w-md">
			<h1 className="text-2xl font-bold mb-4">Todo List</h1>
			<div className="flex mb-4">
				<input
					type="text"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					className="border rounded w-full py-2 px-3 mr-2"
				/>
				<button
					onClick={addTodo}
					className="bg-blue-500 text-white rounded py-2 px-4 font-semibold"
				>
					Add Todo
				</button>
			</div>
			<ul className="list-none p-0">
				{todos.map((todo, index) => (
					<li key={index} className="flex items-center mb-2">
						<span
							className={`flex-grow ${todo.completed ? "line-through" : ""}`}
						>
							{todo.text}
						</span>
						<button
							onClick={() => toggleTodo(index)}
							className="bg-green-500 text-white rounded py-1 px-2 ml-2 font-semibold"
						>
							{todo.completed ? "Undo" : "Complete"}
						</button>
						<button
							onClick={() => deleteTodo(index)}
							className="bg-red-500 text-white rounded py-1 px-2 ml-2 font-semibold"
						>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
