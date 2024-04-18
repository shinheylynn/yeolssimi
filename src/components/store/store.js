import { create } from "zustand";

const useStore = create((set) => ({
	selected: "todo",
	setSelected: (link) => set(() => ({ selected: link })),
}));

export default useStore;
