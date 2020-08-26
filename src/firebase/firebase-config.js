import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCGScncEb4REZ0mPLs3O52VRNOeOu1TJuo',
	authDomain: 'react-app-cursos-a69a3.firebaseapp.com',
	databaseURL: 'https://react-app-cursos-a69a3.firebaseio.com',
	projectId: 'react-app-cursos-a69a3',
	storageBucket: 'react-app-cursos-a69a3.appspot.com',
	messagingSenderId: '344542186440',
	appId: '1:344542186440:web:64eee50e3ea75718318efd',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
