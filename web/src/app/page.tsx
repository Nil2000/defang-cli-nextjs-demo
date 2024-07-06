import Image from "next/image";
import TodoList from "./components/TodoList";

export default function Home() {
	return (
		<main className="flex min-h-screen min-w-screen">
			<TodoList />
		</main>
	);
}
