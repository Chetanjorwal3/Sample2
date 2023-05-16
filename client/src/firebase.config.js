import { initializeApp, getApp, getApps, } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAupDzfOTesnQse-elKE6v5H_3NH8V7gcg",
    authDomain: "udaipurcity-b2e38.firebaseapp.com",
    databaseURL: "https://udaipurcity-b2e38-default-rtdb.firebaseio.com",
    projectId: "udaipurcity-b2e38",
    storageBucket: "udaipurcity-b2e38.appspot.com",
    messagingSenderId: "268788688720",
    appId: "1:268788688720:web:dc562914e998e86bbfee55",
    measurementId: "G-DZS1WBY449"
  };

const app = getApps.length > 0 ? getApp() :  initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)

export {app,firestore,storage}

