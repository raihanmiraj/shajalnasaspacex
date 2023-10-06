 importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
    importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

    // Initialize the Firebase app in the service worker by passing the generated config
    var firebaseConfig = {
     apiKey: "AIzaSyBiIS3bSmE_ELNVQiDTOOPCAdR1XZk4Yxc",
  authDomain: "mecstudent-26f67.firebaseapp.com",
  projectId: "mecstudent-26f67",
  storageBucket: "mecstudent-26f67.appspot.com",
  messagingSenderId: "729385708703",
  appId: "1:729385708703:web:3464b072d7b56d68d746aa",
  measurementId: "${config.measurementId}"
    };

   firebase.initializeApp(firebaseConfig);

   // Retrieve firebase messaging
   const messaging = firebase.messaging();

    messaging.setBackgroundMessageHandler(function (payload) {
       console.log('setBackgroundMessageHandler background message ', payload);

       const promiseChain = clients
          .matchAll({
              type: "window",
              includeUncontrolled: true
          })
         .then(windowClients => {
              for (let i = 0; i < windowClients.length; i++) {
                 const windowClient = windowClients[i];
                 windowClient.postMessage(payload);
              }
         })
         .then(() => {
              return self.registration.showNotification("my notification title");
          });
         return promiseChain;
     });