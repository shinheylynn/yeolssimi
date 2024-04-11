import Link from "next/link";
import React, { useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import fireStore from "@/src/firebase/firestore";
import fireAuth from "@/src/firebase/fireAuth";

const handleLogin = async () => {
	const provider = new GoogleAuthProvider();
	const data = await signInWithPopup(fireAuth, provider);

	console.log(data.user);
};

function GoogleOauth() {
	return (
		<button onClick={handleLogin}>
			<img
				// src="public/images/GoogleLogin/png@3x/dark/web_dark_sq_SU@3x.png"
				className="hover:cursor-pointer"
				alt="Login with Google"
			></img>
		</button>
	);
}

export default GoogleOauth;
