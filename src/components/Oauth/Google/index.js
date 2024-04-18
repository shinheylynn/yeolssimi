import Link from "next/link";
import React, { useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import fireStore from "@/src/components/firebase/firestore";
import fireAuth from "@/src/components/firebase/fireAuth";

const handleLogin = async () => {
	const provider = new GoogleAuthProvider();
	const data = await signInWithPopup(fireAuth, provider);

	console.log(data.user);
};

function GoogleOauth() {
	return (
		<div className="p-8">
			<button onClick={handleLogin}>
				<img
					src="images/GoogleLogin/png@1x/dark/web_dark_sq_SU@1x.png"
					className="hover:cursor-pointer"
					alt="Login with Google"
				></img>
			</button>
		</div>
	);
}

export default GoogleOauth;
