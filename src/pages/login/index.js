import React, { useState } from "react";

function Login() {
	const [authState, setAuthState] = useState("login");
	const [id, setId] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Id:", id, "Password:", password);
	};

	return (
		<main className="h-iphone15pro w-iphone15pro flex flex-col justify-center items-center border border-red-50 h-2/3">
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

				{authState === "login" ? (
					<form
						className="pt-16 flex flex-col items-center gap-3"
						method="post"
						id="loginForm"
						onSubmit={handleSubmit}
					>
						<input
							className="input-custom"
							type="text"
							required
							onChange={(e) => setId(e.target.value)}
							placeholder="아이디"
						/>
						<input
							className="input-custom"
							type="password"
							required
							onChange={(e) => setPassword(e.target.value)}
							placeholder="비밀번호"
						/>
						<button className="auth-button" type="submit">
							로그인
						</button>
					</form>
				) : (
					<form
						className="pt-10 flex flex-col items-center gap-3"
						method="post"
						id="signupForm"
						onSubmit={handleSubmit}
					>
						<input
							className="input-custom"
							type="text"
							required
							onChange={(e) => setId(e.target.value)}
							placeholder="아이디"
						/>
						<input
							className="input-custom"
							type="email"
							pattern=".+@example\.com"
							required
							onChange={(e) => setEmail(e.target.value)}
							placeholder="이메일"
						/>
						<input
							className="input-custom"
							type="password"
							required
							onChange={(e) => setPassword(e.target.value)}
							placeholder="비밀번호"
						/>
						<button className="auth-button" type="submit">
							회원가입
						</button>
					</form>
				)}
			</div>
		</main>
	);
}

export default Login;
