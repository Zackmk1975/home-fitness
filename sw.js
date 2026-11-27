// Generated from the actual build; scope includes the GitHub repository path.
const PREFIX='hf5kg:'+self.registration.scope+':';
const CACHE=PREFIX+'db46b7867265cb3b';
const ASSETS=["./.nojekyll","./THIRD-PARTY-NOTICES.txt","./assets/index-BaPXxjgv.js","./assets/index-Es-8aJUS.css","./assets/model-BVr9X51V.js","./icon-192.png","./icon-512.png","./icon.svg","./index.html","./manifest.webmanifest","./models/Trainer.glb"];
const urls=new Set(ASSETS.map(p=>new URL(p,self.registration.scope).href));
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS))));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
  const keys=await caches.keys();await Promise.all(keys.filter(k=>k.startsWith(PREFIX)&&k!==CACHE).map(k=>caches.delete(k)));await self.clients.claim();
})()));
self.addEventListener('fetch',event=>{
  const request=event.request,url=new URL(request.url);
  if(request.method!=='GET'||url.origin!==self.location.origin||!url.href.startsWith(self.registration.scope))return;
  if(request.mode==='navigate'){
    event.respondWith(caches.open(CACHE).then(async cache=>{
      const shell=await cache.match(new URL('./index.html',self.registration.scope).href);
      return shell||fetch(request);
    }));return;
  }
  if(urls.has(url.href))event.respondWith(caches.open(CACHE).then(async cache=>(await cache.match(request))||fetch(request)));
});
