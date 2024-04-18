import React, { useState } from "react";
import Auth from "@/src/components/Auth";
import GoogleOauth from "@/src/components/Oauth/Google";

function Home() {
	const [authState, setAuthState] = useState("login");

	return (
		<main className="h-iphone15pro w-iphone15pro flex flex-col justify-center items-center border border-red-50">
			<h1 className="pb-10 text-5xl font-bold text-lightblue">YeolSsiMi</h1>

			<div className="pt-10 bg-grey rounded-lg w-4/5 h-2/5">
				<div className="flex justify-center gap-x-10">
					<h5
						className={`text-white h-auto hover:cursor-pointer ${
							authState === "login" ? "underline-custom" : ""
						}`}
						onClick={() => setAuthState("login")}
					>
						로그인
					</h5>
					<h5
						className={`text-white hover:cursor-pointer ${
							authState === "signup" ? "underline-custom" : ""
						}`}
						onClick={() => setAuthState("signup")}
					>
						회원가입
					</h5>
				</div>
				<Auth authState={authState} setAuthState={setAuthState} />
			</div>
			<GoogleOauth />
		</main>
	);
}

export default Home;
