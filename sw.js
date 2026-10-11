self.addEventListener('push',e=>{let d={};try{d=e.data.json()}catch(x){}
e.waitUntil(self.registration.showNotification(d.title||'Seniors 29',{body:d.body||'',icon:'/icon-192.png',badge:'/icon-192.png',tag:d.tag,data:{url:d.url||'/'}}))});
self.addEventListener('notificationclick',e=>{e.notification.close();
e.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(l=>{for(const c of l){if('focus' in c)return c.focus()}return clients.openWindow(e.notification.data.url||'/')}))});
