'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "25015906c511e5feec08a1ffbf32c2de",
".git/config": "3df4fc5a879b86b3720b071a34b8fe1f",
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
".git/index": "d1f26a0f5eb5d20f407197df7ab19057",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "727475a043b3c8a1de6534363b3c6417",
".git/logs/refs/heads/master": "727475a043b3c8a1de6534363b3c6417",
".git/logs/refs/remotes/origin/master": "355da90540f9e25a5e350f37b9ca5791",
".git/objects/08/043c3fcc9aa83b64636af686e61c05447cc505": "69d602e2e588aae4b026ae89215faef4",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/1f/9b22ec8cba81e8038d42a28bddd8f1b99dc53c": "2944e16a8c86cc094f1c66e4ea0118ad",
".git/objects/1f/e3d25e629068b3921662e2c22afa4b129cba11": "80e9ee9ac79a1ac792b74e8156b086e4",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3f/0cdfb64313d21121eba6ba54c224722a94f5bd": "62303edf59041de351cb7767f0550a75",
".git/objects/46/0bbd7060de1fbd07a942ea06257aec6ecf82b9": "3ee3ddb160da66e3b177259e66b94799",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/e6dff816d3cc451bb997ce4bbe9613f039581d": "25fd6051a2b611caa570a25cf42bf015",
".git/objects/51/4dae3a0469e526cf109f312c2b636daf9b7062": "aedd04db658afe737d6e5897bbe67e80",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/6e/39dd4a7491811b746a3b566b4d7924892cf1ca": "66c3a0262eb0251739f51e8b0ce4802b",
".git/objects/6e/8f90310b0fc75778ee082946f47a507e332e6e": "d97f1323c0dd4b54c9edc549c7f21aa8",
".git/objects/76/9a1df702bdb77ff0a2763d6ea196b9315aadc2": "3e3a8f90e5b9e9a1da4fc77e680395ce",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/ef3bedc218a319ed7ae61f7c9d124bc00e9e6c": "1b9daf10052d9ba15730aba284db1a96",
".git/objects/90/76283be4eb58b834644198938cd35cb1e98891": "2ed20ee5a18eddcc11a0444d5b5d785f",
".git/objects/94/8037e484086718429e169dd78fc7e36eed7471": "acbf21c7f6f65c5fe2ba59eb32f7ac7f",
".git/objects/97/99b274c17c84e99733e6ee7b5e88bb6972773b": "b92fa0800477a618abedc05cdaea9083",
".git/objects/a0/872ce17618e8f2f62b94bd30f1379a279e2888": "453fa9f08332db2b37688b43697eb4ab",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/a9719b46a9be93c0f60e3a9081b4b26a0d32e7": "1aab07e426bf04cb7b999e685947975a",
".git/objects/a2/156e9e7fcee435a6820d922641759c1f67534d": "2c7c7f3d26e7062d2744674dc124e703",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ac/8bfab399699c5394313d5452bf36cad66ff613": "2f21b6f72bfaae0fb410179bba461846",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/4f01c31a3d8275df479ed3b3e19be456f74953": "de73ddeaed9fbf895e28e9169e22b1c6",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/0ee08bc20ea0a747c918d54cbcce2fc0fe3e23": "f466a8cee56176e531b9ddc0a37a7b6c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/518083bfe555699676548d1018a95eb383d834": "1438d9da67905784310a7aa4519cbf71",
".git/objects/e0/7a5dd00c2e9cb1820f2b3c55b79a8f390e35ee": "e8f8d7d5d1b4e587008e353ab7bc040b",
".git/objects/e0/9dfdbbb9bd25121c97516af51fd3e7af62008c": "f5635daca5b87e0abb2ff95e93415536",
".git/objects/e5/19bc74e4b27f5049c364de485b3071cd7e3f76": "31418481ee0594ec048cf99655e84a90",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/ec73787d69cc0da3c2cf08242830658b190b96": "1d70b27e2888f4d38fa3d7722f6179ef",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/e454924adde57c93aa7105d827c1fa84d3e4fe": "d40b94065b16bf7ad71375572f76de1b",
".git/objects/fc/a21614387d4902d447460f89e8b1d581ac996e": "bb9f357dd2bc5ab294d11e762020945c",
".git/refs/heads/master": "14b41c19fe84ef844aa3ba04c0cb86cf",
".git/refs/remotes/origin/master": "14b41c19fe84ef844aa3ba04c0cb86cf",
"assets/AssetManifest.json": "5804a5e435bee035bec2dc8c53caed2e",
"assets/assets/images/forums.png": "c66cb65ebdc08cdd67727b4cfc4bf42f",
"assets/assets/images/ic_ccs-logo.png": "19bf3b15c86decdf06d163e7700b04f6",
"assets/assets/images/ic_coa-logo.png": "9ddc9a194b217d3e1d1d9743392225d2",
"assets/assets/images/ic_cob-logo.png": "bb3247d61024f8acb27572c69791d1a3",
"assets/assets/images/ic_exit-24.png": "33544122dceb09748ed494937708faa3",
"assets/assets/images/ic_import-csv-24.png": "0e189184743d5a9aaa90732de554fc5b",
"assets/assets/images/ic_import-csv-60.png": "aba3f704d904a9f16174532cae362326",
"assets/assets/images/ic_speech-box-24.png": "80a5c67a0f6ab818f3635265f17f9e0d",
"assets/assets/images/ic_speech-round-24.png": "007f5fe05e764fcb95b71a505b6b1c6e",
"assets/assets/images/ic_urs-24.png": "9b757208a5822475066849e47166532d",
"assets/assets/images/urs_logo-2.png": "159983219ba83b6b9db3d58cca1e7e14",
"assets/assets/images/UsAppLogoNew1.png": "ac8c5506acb1d8b69a57e9ecbe146e3c",
"assets/assets/images/UsAppLogoWelcome2.png": "70eabe6bacb245ac915218f7096615f6",
"assets/assets/images/user-no-image.png": "21e9633ccbde3bd62dbcde8ee9c43b57",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "3acebb0a49ca0f9c5937ddd6c58a30f2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8d9e6e32fc6e0bdf9bc06b6932346a3a",
"/": "8d9e6e32fc6e0bdf9bc06b6932346a3a",
"main.dart.js": "71d252a0900a8e253269b4740229badf",
"manifest.json": "28850437d243f21338cc6e74bdaa3660",
"version.json": "243a49d9af7ed81eef30d483b3dbe4f7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
