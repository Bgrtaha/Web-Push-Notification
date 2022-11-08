self.addEventListener("push", (e) => {
  console.log('e:>> ', e.data.text())
  const config = {
    body: e.data.text() || "Datada text yoksa bu yazılacak.",
    data: {
      dateOfArrial: Date.now(),
      primaryKey: "3",
    },
    icon: "images/cbot-logo.png",
    vibrate: [100, 50, 100],
    actions: [
      {
        action: "explore",
        title: "Action1",
        // icon: "images/"
      },
      {
        action: "close",
        title: "Bildirimi kapat",
        // icon: "images/"
      },
    ]
  };
  e.waitUntil(
    self.registration.showNotification("Yeni Makale Eklendi !!", config)
  );
});
