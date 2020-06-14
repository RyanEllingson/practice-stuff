import React, { useState } from "react";
import * as firebase from "firebase/app";

import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBZRrgmZRQ_FxVo86zqmtZmV3Yf9PWcHYE",
    authDomain: "practice-stuff-85121.firebaseapp.com",
    databaseURL: "https://practice-stuff-85121.firebaseio.com",
    projectId: "practice-stuff-85121",
    storageBucket: "practice-stuff-85121.appspot.com",
    messagingSenderId: "471936830253",
    appId: "1:471936830253:web:c05d81c35bf3a43e0861a4"
};

firebase.initializeApp(firebaseConfig);

export const FirebaseContext = React.createContext("firebase");

const provider = new firebase.auth.GoogleAuthProvider();

export function Firebase({ children }) {
    const [user, setUser] = useState(null);

    const googleSignIn = function() {
        firebase.auth().signInWithPopup(provider).then(function(result) {
            console.log(result.user);
            setUser(result.user);
        }).catch(function(error) {
            console.error(error);
        });
    };

    const signOut = function() {
        firebase.auth().signOut().then(function() {
            setUser(null);
        }).catch(function(error) {
            console.error(error);
        });
    };

    return (
        <FirebaseContext.Provider
            value={{ user, googleSignIn, signOut }}>
            {children}
        </FirebaseContext.Provider>
    );
};