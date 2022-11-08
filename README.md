# Web-Push-Notification
cd web_push_notification/server

npm install

// const vapidKeys = webPush.generateVAPIDKeys(); remove the "//" in the code.(server.js)

and Log vapidKeys

change privateKey, publicKey and "mailto:info@bugraavci.com"

and go to client file( cd web_push_notification/server )

after you must to use "Go live" extension. Click Go Live and open localhost on your Chrome(its works only Chrome).

Click "Abone ol"

Accept required permissions

check logs and take endpoint, expirationTime, keys, p256dh, auth 

change endpoint, expirationTime, keys, p256dh, auth

Type the same as publicKey in applicationServerKey(client/app.js)

and go server.js 

npm start
