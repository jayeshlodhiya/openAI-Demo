var admin = require('firebase-admin');
let defaultAppConfig = {
    credential: admin.credential.cert({
    "type": "service_account",
  "project_id": "quesewise",
  "private_key_id": "4eb988d9fd2235b8ef11c07c7f1c016124e6130d",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCb3YkTZ34Tn/Xp\nZzIzO7LAEpAHs5wNOj6cGjkBjigPoqNLcF9wWe93v4jMMzbxBwhTg/kdqTbA+YgY\nFTe/BWVgl5Q72KubaUUHD+IrtjzCwhAyINaVXpxLS/oceNNmv86dUqO5zEBtyWiJ\nE+lUR2tqkaubN5A4Z9YgQ9euzzMbYFGjhE8WxdSf6/FPjVKdyi8TRs78J4fFz+xR\n4mLbNKjtCWwketae8Zl7rW+oGe7aBpZsjNL3FI7o2Ot/35BSLeGn3lsIJ9zrtv5g\n92jGaBuxgcdk0uYCgAI/nT9D7fKy3TghZoJG8ytb/kjRcQBJeIm3XXL4A4aG8am2\nBjL6HbFNAgMBAAECggEAAy9jg/c/MxD3gkHG25eqdzTZ5yJjO7z3NxLtG8xHIsyo\nyBufg6j+1QRfvAaG5qWFZMmDX3kMAqUGxDE4zqlCUVc/ovpyRU6BJ9wJ++kxNCyp\njpCvueUxTfObRJYugcDFLN9Zs6wKHAQ74+M5hyyfdBHOfzFDO/fZPxcL0wluaq6E\nw2WpfzwTc6mH2EZIL3AEdBE/fZ4pjUARP4e0s0GzAw1525rN8V9OC4itoOz1HPbU\nn0K+XzdP/+bpR6S8f3OdryyI1HA9zsxLOHwEQJpbPMTGqstdeZgISPm+u/e30/Rh\nK6LBdvyyEAMKBPzgtp07bgPzm7TnA6hK97OTmnwm2QKBgQDZAGsgY2G+scagIFHM\nQ7M9e016+oevZ9KZphEqGbhRc4/Hl1EjXgJd0BwTWnV0DC7/vcyCwXonVBq/CfMh\n5lpYD25HM4fqqoCjz1X3wBus/Yzu5PXyT/7+PNVIsh6Hj8s8zM3lqcFYCYpI5Rv/\nJFnTAO7WMBLlVxq8X6elaWDC2QKBgQC34GywLZIeGq//EwNt8Ccd7LYUVKaNBbPT\nTDPP3lIwbnA+5BsdpMOSGgLHL2BToggHcdjmFH+mYZQ6mGxhYw8y2kupjiv3N5Zn\nax2xUwZ0IHrzcDrydm7hH8haZ9yNLUHXZBfyicMXYVfxMwexY3IkoBcKkUS98ZvW\nWjtSoY7xlQKBgEgQP4Mt/dPaLeAXW5K+GNQeEoj4kf7KN8IWyDR2/iLugZ0Cv0tD\neP22ktxKeh7jvOfpG/WAUxSkdY1jvH5RhUchOLokfsqLfNTpkd8IySgVu6vKFXM2\n5bOAeEQAAut58UBrsyTFzxNxd57llvqQE9Rixu4SYPQQjSxph78C08NhAoGAZM2L\nyCmzaP2IbnWl86csSqNyTkL562Ws57Fm1hYzSInCzzeOBfpFnNrVmwzF6hNyA2LO\nXZPvRu9Hq7fT8q+zrVUvFYzzXVwEAD4g0Q2LBC6qOLrWFgYHUzNxSt6Vcm/VIJem\n6TfM1AxxgbFQDldOQ/Xfq9NntBm4LRLaYrpe+uECgYEAiSQwgMaNNtEK2JVruEG4\njhrmOnZYOysrqkZvrdydYVH2JuK83edgM1be/V4D9l0oKt5uWbK2Gkc4XAITJupO\nxvSmYgLYNcy2nmUVQxLbalXaiWSThW61u3xAYyYi15GkMxXsMHB8lQ4mpSFrXExQ\njLqxMjf6EyLzzaePPr0qr34=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-d6go2@quesewise.iam.gserviceaccount.com",
  "client_id": "113769670202487396497",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-d6go2%40quesewise.iam.gserviceaccount.com"
    }),
    databaseURL: "https://quesewise.firebaseio.com"
 }
 const firebaseapp = admin.initializeApp(defaultAppConfig);
 const db = admin.firestore();
 var result=[];

alert("test");

function ClientAlertData(){
    alert("in ClientAlertData");
    const docRef = db.collection('FirstAlert').doc('Alerts').collection('AlertLists');

    docRef.get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                result.push(doc.data());
               
            });
    });

}