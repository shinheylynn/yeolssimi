import useStore from "../store/store";
import Link from "next/link";
import { NAV_LINKS, NAV_CATEGORIES } from "./NavConstants";

function NavLink() {
	const { selected, setSelected } = useStore();

	return (
		<>
			{Object.entries(NAV_CATEGORIES).map(([key, value]) => (
				<Link
					key={key}
					href={NAV_LINKS[key]}
					className={`flex justify-center items-center w-36 h-10 -rotate-90 origin-left ${
						selected === value ? "text-blue bg-bggrey" : "text-grey bg-darkgrey"
					} border border-blue-700 rounded-t-lg`}
					onClick={() => setSelected(value)}
				>
					{key}
				</Link>
			))}
		</>
	);
}

export default NavLink;
