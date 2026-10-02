self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    self.clients.claim()
  );
});

self.addEventListener(
  "notificationclick",
  event => {

    event.notification.close();

    event.waitUntil(

      clients.matchAll({
        type:"window",
        includeUncontrolled:true
      }).then(list => {

        if(list.length > 0){
          return list[0].focus();
        }

        if(clients.openWindow){
          return clients.openWindow("./");
        }

      })

    );

  }
);
