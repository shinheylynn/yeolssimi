import useStore from "../Store/store";

function TodoItem({ id }) {
	const todo = useStore((state) => state.todos.find((t) => t.id === id));
	const toggleCheck = useStore((state) => () => state.toggleCheck(id));

	return (
		<div
			className={`flex-shrink-0 h-24 rounded-3xl flex ${
				todo.checked ? "bg-darkgrey text-white" : "bg-lightblue"
			}`}
		>
			<section className="ml-3">
				<div
					className={`text-xs mt-3 p-1 px-3 rounded-3xl w-fit h-auto ${
						todo.checked ? "bg-grey text-white" : "bg-white"
					}`}
				>
					{todo.category}
				</div>

				<h5 className={`ml-1 mt-2 ${todo.checked ? "line-through" : ""}`}>
					{todo.text}
				</h5>
			</section>

			<section className="flex ml-auto">
				<input
					type="checkbox"
					className="ml-auto mr-5 w-6"
					checked={todo.checked}
					onChange={toggleCheck}
				/>
			</section>
		</div>
	);
}

export default TodoItem;
