importScripts("https://www.gstatic.com/firebasejs/12.11.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.11.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBiKHmV0HEBB2Gr74VOgbosxRGs9MDa7uQ",
  authDomain: "nksp-app.firebaseapp.com",
  databaseURL: "https://nksp-app-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nksp-app",
  storageBucket: "nksp-app.firebasestorage.app",
  messagingSenderId: "328702502215",
  appId: "1:328702502215:web:080148f3e768bfafc29862"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Push im Hintergrund:", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "bilder/app-icon.png"
  };

  self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
