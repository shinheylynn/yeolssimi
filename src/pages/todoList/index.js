import Link from "next/link";
import { ArrowIcon, CalendarIcon } from "@/public/Icons";
import TodoItem from "@/src/components/TodoItem/TodoItem";

function TodoList() {
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
				<Link href="" className="ml-auto mr-5 font-bold text-sm">
					카테고리 별 달성률 {">"}
				</Link>
			</section>

			<section className="mr-5 mt-5">
				<TodoItem />
			</section>
		</div>
	);
}

export default TodoList;
