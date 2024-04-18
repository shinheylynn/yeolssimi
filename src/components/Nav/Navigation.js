import { LogoutIcon } from "@/public/Icons";
import Link from "next/link";
import useStore from "../store/store";

function Navigation() {
	const { selected, setSelected } = useStore();

	return (
		<div className="relative h-screen w-10">
			<nav className="font-semibold text-xl flex flex-col items-start gap-28 pt-32 p-5 text-grey">
				<Link
					href="/todoList"
					className={`flex justify-center items-center w-36 h-10 -rotate-90 origin-left ${
						selected === "todo"
							? "text-blue bg-bggrey"
							: "text-grey bg-darkgrey"
					} border border-blue-700 rounded-t-lg`}
					onClick={() => setSelected("todo")}
				>
					TODO
				</Link>
				<Link
					href="/friends"
					className={`flex justify-center items-center w-36 h-10 -rotate-90 origin-left ${
						selected === "friends"
							? "text-blue bg-bggrey"
							: "text-grey bg-darkgrey"
					} border border-white rounded-t-lg`}
					onClick={() => setSelected("friends")}
				>
					FRIENDS
				</Link>
				<Link
					href="/mypage"
					className={`flex justify-center items-center w-36 h-10 -rotate-90 origin-left ${
						selected === "mypage"
							? "text-blue bg-bggrey"
							: "text-grey bg-darkgrey"
					} border border-white rounded-t-lg`}
					onClick={() => setSelected("mypage")}
				>
					MYPAGE
				</Link>
			</nav>
			<div className="absolute bottom-2 pl-2 w-8 h-8 text-white hover:cursor-pointer">
				<LogoutIcon />
			</div>
		</div>
	);
}

export default Navigation;
