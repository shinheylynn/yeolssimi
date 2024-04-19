import { create } from "zustand";

const useStore = create((set) => ({
	selected: "TODO",
	setSelected: (link) => set(() => ({ selected: link })),

	// TODO: Goal 추가 기능 생성 후 todos 배열에 자동으로 추가되게끔 하는 로직 구현 필요
	todos: [
		{ id: 1, text: "Task 1", category: "카테고리", checked: false },
		{ id: 2, text: "Task 2", category: "카테고리", checked: false },
		{ id: 3, text: "Task 3", category: "카테고리", checked: false },
		{ id: 4, text: "Task 4", category: "카테고리", checked: false },
		{ id: 5, text: "Task 5", category: "카테고리", checked: false },
		{ id: 6, text: "Task 6", category: "카테고리", checked: false },
		{ id: 7, text: "Task 7", category: "카테고리", checked: false },
		{ id: 8, text: "Task 8", category: "카테고리", checked: false },
		{ id: 9, text: "Task 9", category: "카테고리", checked: false },
	],
	toggleCheck: (id) =>
		set((state) => ({
			todos: state.todos
				.map((todo) =>
					todo.id === id ? { ...todo, checked: !todo.checked } : todo
				)
				.sort((a, b) => {
					if (a.checked && !b.checked) {
						return 1;
					} else if (!a.checked && b.checked) {
						return -1;
					} else {
						return a.id - b.id; // 체크 상태가 같다면 ID 순으로 정렬
					}
				}),
		})),
}));

export default useStore;
