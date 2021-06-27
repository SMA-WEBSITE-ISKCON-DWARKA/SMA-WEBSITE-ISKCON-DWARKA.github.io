// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  backendUl : 'http://localhost:8080/smy',
  firebaseConfig: {
    apiKey: 'AIzaSyBV4Kbet5OfrZtLWF2h6wsPqEhrt3Rwz94',
    authDomain: 'smy-website.firebaseapp.com',
    projectId: 'smy-website',
    storageBucket: 'smy-website.appspot.com',
    messagingSenderId: '427193380526',
    appId: '1:427193380526:web:d31389d1d3599188c8473f',
    measurementId: 'G-WJ079Y99GW'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
