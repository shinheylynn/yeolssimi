import NavLink from "./NavLink";
import { LogoutIcon } from "@/public/Icons";

function Navigation() {
	return (
		<div className="relative h-screen w-10">
			<nav className="font-semibold text-xl flex flex-col items-start gap-28 pt-32 p-5 text-grey">
				<NavLink />
			</nav>
			<div className="absolute bottom-2 pl-2 w-8 h-8 text-white hover:cursor-pointer">
				<LogoutIcon />
			</div>
		</div>
	);
}

export default Navigation;
