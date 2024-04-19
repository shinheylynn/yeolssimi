import { create } from "zustand";

const useStore = create((set) => ({
	selected: "todo",
	setSelected: (link) => set(() => ({ selected: link })),

	isChecked: false,
	toggleCheck: () => set((state) => ({ isChecked: !state.isChecked })),
}));

export default useStore;
