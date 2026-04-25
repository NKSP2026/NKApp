self.addEventListener("push", function(event) {
  let data = {
    title: "NKSP Sicherheitsdienst",
    body: "Neue Benachrichtigung",
    icon: "bilder/app-icon.png"
  };

  if (event.data) {
    data = event.data.json();
  }

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: data.icon || "bilder/app-icon.png",
      badge: data.icon || "bilder/app-icon.png",
      vibrate: [200, 100, 200]
    })
  );
});

self.addEventListener("notificationclick", function(event) {
  event.notification.close();

  event.waitUntil(
    clients.openWindow("https://nksp2026.github.io/NKApp/")
  );
});
