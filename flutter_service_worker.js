'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "96f6d5a50bc2c05ea009060b1bee96cd",
".git/config": "cbc38b6670b4bd150ad2816d36713f1e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ed905471efec82de159f36e6127216d1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6c07e5e61a7886a3a71b573efd9a1c5c",
".git/logs/refs/heads/master": "75855dd38965e4b3a73c1d2923a9f41f",
".git/logs/refs/remotes/origin/master": "d8b458172db998acc0bf0e45ee67b8cc",
".git/objects/00/adcd6ee7bc0f937911101e941d5b8019011001": "0c05979d9434896cec746bbc400e7666",
".git/objects/0b/bd4a5256b8617877844df3c2bea76b1ef43f98": "888bbca4dbe18e16577c843e01473325",
".git/objects/10/f12056cf4987bd825f99cd17e6375312104905": "ca48b4ff10a56bb2873b15f7e29ed14c",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/2c/3dfc856d7be41b1fc4ce4a14b2568a81dccd16": "1ad5caf3749fa2014d6fac92e363b3f0",
".git/objects/31/f82a4519375bf5fc432d8faf1c278e96ffa7f8": "53b8370c4da373931219ea927c355d67",
".git/objects/32/9a4c3ac04d56ac8546b3e16897713b613a96c3": "7043882af12c4c91a66d04820df39f8d",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3f/1c16781195cd6628ae35d89f71cf70c0d1a935": "585ca3e4009eebeab1233df99581fdcd",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/43/4348b480bc4605bfdf5d5869e4190f4468ef5d": "921038aa56b600f24c074390f0b28916",
".git/objects/44/2ea34674632edc58031f53a227346c3a5eed76": "8029f28bfb2a248cd8271416630af1a3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/55/27ee4aed5dde5f0fa78b0b53bf3d073dfeed67": "c6ad21b3388d032f9735ba35e670934b",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/59/bf9a2cf8a7c364ceabe061b2bc201ec4ab4510": "e5389652dd9c97774564a887f08a3ec3",
".git/objects/5c/10745d859e0a2df743490529b781f43cda4650": "1d66e85a20fb3516df127589ededb054",
".git/objects/65/a716bed4f991cf1db5bfdd6c4909d03ccbfb04": "954cd7dd84c38c5d74ec98c3bbff5c66",
".git/objects/67/fcf5383b2218dbdfb7d0bbabc112a2d954bc33": "b5c1f8256f27070b66144a1b6c1f7e2d",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6c/06f46341bfa66ec823f1b69079f24c42bea000": "73aa5bf3d4355b5623c29f0b72fef46b",
".git/objects/70/66116df7b485a824b2b126632547ff9aa9ba9b": "3e4bfd2af092062555ec6d063aaaae60",
".git/objects/73/753450179f32525570cae09bc57e379bead34d": "98bbd0f0696413c6e21a21024ced0553",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/78/12baa75367c9c1d6a465cc0400cff1ab9dc692": "fae7f52f7f4c4016853ad2e916d1ae2b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/9806a9f1c012e5576fc72d94c83540d8d9420c": "cd98d019d1affe9ec6ae49fdf4f2b105",
".git/objects/96/548dd811f6fd8c2b36bb5d6e81d2b6a19b870c": "f0826717e23b36d49ec89db351517979",
".git/objects/9c/5ee83d16e0ff8286d1a21375847a808e2059b6": "5f846fdb8652d1c9b0acd8932c483690",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a6/d2ccf64738d6dadfe53ab1ed6476553630393e": "9c220ec742f70350a71b80f40b81e626",
".git/objects/a7/91deefdf0c5c8d32c23bd3f798153daae7ceb3": "392a9d3c9f42ad5866c6119cf950ea97",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/67cad845710c6c17e1604bf8f018388266f11b": "5d6fe69a913a0a9b2a19fde140181c31",
".git/objects/ac/6a9aa65948b859c589a5bdfc6b3211d7cd1588": "e106aed0526f073af2e83e3ae962920b",
".git/objects/b2/05f4edef300b9c1702b577cfa738cfb3519ecc": "d8afc378e9e31f1c57e92858421e308c",
".git/objects/b3/79a292d56cba88bea48d5941f3250c618f5603": "6daf521172cf32f3cfa773cf5f4bd02c",
".git/objects/cf/3fb384f61c43fe58f46ed7ad384b13a817ea21": "e2844da483d1045632152fd628e1781f",
".git/objects/d0/1c5b11d625e3442af8bb49fc42ed37ce4ed9ab": "4aaf0b0b523b4bbc14934e397f629fb6",
".git/objects/de/12036fc80a7a2075bd82b3b7bb544671b22dc9": "ced1f35505d7b12ef9e309e9438d4e30",
".git/objects/e2/9260b89aa600d5881dc4fac7f9e87732b7b316": "72afd1d7ecec468c2c48c042d16c66c6",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/b0fdbef401a34a915c9baaecbaa16da1a47407": "e8efeb7e7921e2d911a0908f14caa373",
".git/objects/ed/e55a6718098d866bda21898fa0f5f28db5c65e": "630e3d64b0689a1a1c2c5c11cde8634c",
".git/objects/ee/ed19b2e8c388b71ca1ed2bab128c135322785e": "e5977d395d4d7e16e8dd39c378ef37b0",
".git/objects/fc/c58e15153127733de5ee27dfb55ae61c421320": "5cc7760cfb5862a381bd447aaba896ea",
".git/objects/fc/dd252dd60fee628ecaefe95f6abe0ca78c7727": "1ab6280ddf8fb9079b4a72767bd7831e",
".git/refs/heads/master": "61bb3130e9effffc93bb838ad25be62f",
".git/refs/remotes/origin/master": "61bb3130e9effffc93bb838ad25be62f",
"assets/AssetManifest.json": "3d25964e2d26328048868c909cbbd818",
"assets/assets/chs.png": "3a834582182081121b8a11cb5499b980",
"assets/assets/error.png": "7b90aaf67279e338713774cd69496773",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "5bef44d54539bd43f663b7a7f68f5b6b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5611e397e4a76796c8beab080a37e487",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "36822c092356f8548ae01654257bd577",
"icons/Icon-512.png": "c3e9601e92b5ce823a5fca71bff26290",
"icons/Icon-maskable-192.png": "36822c092356f8548ae01654257bd577",
"icons/Icon-maskable-512.png": "c3e9601e92b5ce823a5fca71bff26290",
"index.html": "660393a94148a72c21fb8fdbb76e098b",
"/": "660393a94148a72c21fb8fdbb76e098b",
"main.dart.js": "9aa6016a37efcfaa4df8944523c50a43",
"manifest.json": "5a11c90484751aa30f0ed4301529de85",
"version.json": "5f7392a87ac21ca0c166980a2d943984"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
