// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyA1Wse_1HWsS2c_D95Us5RYpRpwre0xjMw",
	authDomain: "yeolssimi-8486b.firebaseapp.com",
	projectId: "yeolssimi-8486b",
	storageBucket: "yeolssimi-8486b.appspot.com",
	messagingSenderId: "754833894538",
	appId: "1:754833894538:web:04ecf2e6564d465f271173",
	measurementId: "G-QVNCZPZLGP",
};

// Initialize Firebase
if (typeof window !== "undefined") {
	// 클라이언트 사이드 코드
	const app = initializeApp(firebaseConfig);
	const analytics = getAnalytics(app);
}
