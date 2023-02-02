import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()

    const firebaseConfig = {
        apiKey: "AIzaSyCd4NIIJSjX257GqyiSyQAYOCXNdfKVSKU",
        authDomain: "todo-f5081.firebaseapp.com",
        projectId: "todo-f5081",
        storageBucket: "todo-f5081.appspot.com",
        messagingSenderId: "518927255950",
        appId: "1:518927255950:web:5fe539a4df8a3030387cdf"
    };

    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)
    const firestore = getFirestore(app)
    const provider = new GoogleAuthProvider()

    nuxtApp.provide("auth", auth)
    nuxtApp.provide("firestore", firestore)
    nuxtApp.provide("provider", provider)
})
