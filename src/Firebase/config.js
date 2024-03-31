
import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAIscvrh0Qsrj7XFTguNtDrsz4OSoYAcmw",
    authDomain: "udemy-vue-firebase-sites-1e6bc.firebaseapp.com",
    projectId: "udemy-vue-firebase-sites-1e6bc",
    storageBucket: "udemy-vue-firebase-sites-1e6bc.appspot.com",
    messagingSenderId: "211448407018",
    appId: "1:211448407018:web:d0059b8a7fb391bbf44893"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init firestoer service
const projectFireStore = firebase.firestore()

exort { projectFireStore }