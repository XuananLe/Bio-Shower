import { initializeApp } from "firebase/app";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";
import { getAuth, onAuthStateChanged, type User } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { writable, type Readable, derived } from "svelte/store";


interface UserData {
  username: string;
  bio: string;
  photoURL: string;
  published: boolean;
  links: any[];
}


const firebaseConfig = {
  apiKey: "AIzaSyAkTqY9d5oaE-5lJ9xioj0QhLwWKCzIAM0",
  authDomain: "bioshower-ec68d.firebaseapp.com",
  projectId: "bioshower-ec68d",
  storageBucket: "bioshower-ec68d.appspot.com",
  messagingSenderId: "326009198291",
  appId: "1:326009198291:web:832834e3a90225893de626"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
function userStore(): Readable<User | null> {

  if (!auth || globalThis.window === undefined) {
    console.warn("Firebase not initialized");
    const { subcribe } = writable<User | null>(null);
    return {
      subcribe
    };
  }


  const store = writable(auth?.currentUser ?? null);

  onAuthStateChanged(auth, (user) => {
    store.set(user);
  });

  return {
    subscribe: store.subscribe
  };
}

export const user = userStore(); // Export store để có thể sử dụng ở các thành phần khác
