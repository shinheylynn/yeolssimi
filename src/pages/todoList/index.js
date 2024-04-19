import Link from "next/link";
import useStore from "@/src/components/Store/store";
import TodoItem from "@/src/components/TodoItem/TodoItem";
import { ArrowIcon, CalendarIcon } from "@/public/Icons";

function TodoList() {
	const todos = useStore((state) => state.todos);

	return (
		<div className="selected-nav-bg">
			<Link
				href="/calendar"
				className="mt-5 gap-2 flex items-center justify-center h-12 w-12"
			>
				<ArrowIcon />
				<CalendarIcon />
			</Link>

			<div className="text-grey mt-5 font-semibold">2024년 7월</div>
			<div className="flex gap-2 text-3xl mt-1 font-bold">
				<div>23일</div>
				<div>금요일</div>
			</div>

			<hr className="bg-black w-full h-0.5 mt-5" />

			<section className="flex items-center gap-1 mt-6">
				<div>달성률:</div>
				<div className="font-bold text-2xl text-lightblue">70%</div>
				<Link
					href="/todoList/achievements"
					className="ml-auto mr-5 font-bold text-sm"
				>
					카테고리 별 달성률 {">"}
				</Link>
			</section>

			<section className="max-h-550 overflow-y-auto scrollbar-hide flex flex-col gap-3 mr-5 mt-5">
				{todos.map((todo) => (
					<TodoItem key={todo.id} id={todo.id} />
				))}
			</section>
		</div>
	);
}

export default TodoList;
