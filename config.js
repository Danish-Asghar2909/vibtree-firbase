import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyBbWMYX8RhxUUtSCqa6_FB_srnoStk0qJk",
    authDomain: "vibtree-crm.firebaseapp.com",
    projectId: "vibtree-crm",
    storageBucket: "vibtree-crm.appspot.com",
    messagingSenderId: "381784307576",
    appId: "1:381784307576:web:c3d0ddb15e8b95f4227a8d"
  };

function requestPermission() {
  console.log("PUSH NOTIFICATION - Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("PUSH NOTIFICATION - Notification permission granted.");
      const app = initializeApp(firebaseConfig);
      
      const messaging = getMessaging(app);
      const x  = getToken(messaging, {
        vapidKey:
          "BKdCUHS8JRVyyXKi9MnpnSCnn5gU4cqMiqICKhOzWrySuZg450WyAEmnuztFGU3DLE770WLe2kpBrCQZHwZqMfc",
      }).then((currentToken) => {
        if (currentToken) {
          console.log("PUSH NOTIFICATION - currentToken: ", currentToken);
        } else {
          console.log("PUSH NOTIFICATION - Can not get token");
        }
      }).catch(err=>{
        console.log("PUSH NOTIFICATION - err ", err)
      });
    } else {
      console.log("PUSH NOTIFICATION - Do not have permission!");
    }
  });
}

requestPermission();
