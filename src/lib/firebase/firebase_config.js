// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyALEjMisMqZ50nQLMIFQ6aScV9K_wARR0E',
	authDomain: 'penyiram-tanaman-62a68.firebaseapp.com',
	databaseURL: 'https://penyiram-tanaman-62a68-default-rtdb.firebaseio.com',
	projectId: 'penyiram-tanaman-62a68',
	storageBucket: 'penyiram-tanaman-62a68.appspot.com',
	messagingSenderId: '643824415120',
	appId: '1:643824415120:web:f00d249e94fb90ac75c315',
	measurementId: 'G-D6QT4C9C09'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { app, database };
