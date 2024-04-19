import useStore from "../store/store";

function TodoItem() {
	const { isChecked, toggleCheck } = useStore((state) => ({
		isChecked: state.isChecked,
		toggleCheck: state.toggleCheck,
	}));

	return (
		<div
			className={`h-24 rounded-3xl flex ${
				isChecked ? "bg-darkgrey text-white" : "bg-lightblue"
			}`}
		>
			<section className="ml-3">
				<div
					className={`text-xs  mt-3 p-1 px-3 rounded-3xl w-fit h-auto ${
						isChecked ? "bg-grey text-white" : "bg-white"
					}`}
				>
					카테고리
				</div>

				<h5 className={`ml-1 mt-2 ${isChecked ? "line-through" : ""}`}>
					투두 아이템
				</h5>
			</section>

			<section className="flex ml-auto">
				<input
					type="checkbox"
					className="ml-auto mr-5 w-6"
					checked={isChecked}
					onChange={toggleCheck}
				/>
			</section>
		</div>
	);
}

export default TodoItem;
