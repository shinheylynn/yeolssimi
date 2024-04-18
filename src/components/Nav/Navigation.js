import Link from "next/link";

function Navigation() {
	return (
		<nav className="font-semibold w-10 h-screen text-xl flex flex-col items-start gap-28 pt-32 p-5 text-grey">
			<Link
				href="/todoList"
				className="flex justify-center items-center w-36 h-10 -rotate-90 origin-left bg-bggrey border border-blue-700 text-blue rounded-t-lg"
			>
				TODO
			</Link>
			<Link
				href="/friends"
				className="flex justify-center items-center w-36 h-10 -rotate-90 origin-left bg-darkgrey border border-white text-grey rounded-t-lg"
			>
				FRIENDS
			</Link>
			<Link
				href="/mypage"
				className="flex justify-center items-center w-36 h-10 -rotate-90 origin-left bg-darkgrey border border-white text-grey rounded-t-lg"
			>
				MYPAGE
			</Link>
		</nav>
	);
}

export default Navigation;
