window.addEventListener("load", async () => {
  const subscribeButton = document.querySelector("#subscribeButton");

  //Register Service Worker

  const sW = await navigator.serviceWorker.register("./sw.js");
  console.log("Service Worker => ", sW);

  subscribeButton.addEventListener("click", async () => {
    const serviceWorker = await navigator.serviceWorker.ready;
    const clientID = await serviceWorker.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey:
        "BLrjhl3UcSCWWfFslmK5Tb395BK7JvMDQyk-Hmz0_r1utHuZZ3wk1xy-jWU6dQlOccZzVyC_MYFEjxZXnaubUGo",
    });
    console.log(clientID);
    console.log(JSON.stringify(clientID));
  });
});
