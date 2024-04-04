import React, { useState } from "react";

function Auth({ authState, setAuthState }) {
	const [id, setId] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Id:", id, "Email:", email, "Password:", password);
	};

	return (
		<>
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
						pattern=".{5,}"
						title="아이디는 5글자 이상이어야 합니다."
						required
						onChange={(e) => setId(e.target.value)}
						placeholder="아이디"
					/>
					<input
						className="input-custom"
						type="email"
						pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
						title="유효한 이메일 주소를 입력해주세요."
						required
						onChange={(e) => setEmail(e.target.value)}
						placeholder="이메일"
					/>
					<input
						className="input-custom"
						type="password"
						pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
						title="비밀번호는 최소 8자 이상이며, 숫자와 영문자를 포함해야 합니다."
						required
						onChange={(e) => setPassword(e.target.value)}
						placeholder="비밀번호"
					/>
					<button className="auth-button" type="submit">
						회원가입
					</button>
				</form>
			)}
		</>
	);
}

export default Auth;
