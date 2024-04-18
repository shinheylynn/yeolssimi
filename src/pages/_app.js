import Head from "next/head";
import { useRouter } from "next/router";
import Navigation from "../components/Nav/Navigation";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
	const router = useRouter();
	const showNavigation = router.pathname !== "/login";

	return (
		<>
			<Head>
				<title>YeolSsiMi</title>
			</Head>
			{showNavigation && <Navigation />}
			<Component {...pageProps} />
		</>
	);
}
