// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import * as firebase from 'firebase'
import 'firebase/firestore';
export const environment = {
  production: false
};
export const firebaseConfig = {
  apiKey: "AIzaSyDxzwLIX6U_bMGPGPBO04r5ExjpteInWMU",
  authDomain: "laboratorio-36df6.firebaseapp.com",
  databaseURL: "https://laboratorio-36df6.firebaseio.com",
  projectId: "laboratorio-36df6",
  storageBucket: "laboratorio-36df6.appspot.com",
  messagingSenderId: "873076147726",
  appId: "1:873076147726:web:3ed7b4bd7d254ca07f5e5f",
  measurementId: "G-PCR7QN794F"
};

export default !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig).firestore()
  : firebase.app().firestore();
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
