const webPush = require("web-push");
// const vapidKeys = webPush.generateVAPIDKeys();
const vapidKeys = {
  publicKey:
    "BLrjhl3UcSCWWfFslmK5Tb395BK7JvMDQyk-Hmz0_r1utHuZZ3wk1xy-jWU6dQlOccZzVyC_MYFEjxZXnaubUGo",
  privateKey: "FZaoTLnCeUL3elCxii_XqygYrcO1mUnGnnZYcHin_7E",
};

webPush.setVapidDetails(
  "mailto:info@bugraavci.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);
console.log(vapidKeys);

const subscriberChrome = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/dmXfhSZ1Agw:APA91bGLnvxlBMV4_KRRDF_Jjs5dK6s-fnlsWayaPONqQpXJDwKrEHp70Eo3spFJsJyXzUZ375IWfWQEp9ORv_0DYPXT-4vGJAyLA28rgwh20jg_RKSeqqz5zvU3_bFxLAKwr5ph0hG5",
  expirationTime: null,
  keys: {
    p256dh:
      "BAAQzoa9lPg_VUxV9mxy8SxrOLHATPHbQi789WuVBtfSO8E9RC4Tojh_LBgKbWD10a9PtYVLFxpnX_55CU2xbg8",
    auth: "noYfKu65NfQIW4k7U7CkPg",
  },
};

webPush.sendNotification(subscriberChrome, "Web push notification kullanımı.");
