'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "b0c92f9c78bff2f46f89231426874d67",
"googlee33683c175b45bb3.html": "c9d5baad0d0cf7b7aaeb5c5713aea590",
"version.json": "79411809c5df49a19e073bb88fa6720c",
"index.html": "02bfa059b3564b8eaa4c5717dd28c65f",
"/": "02bfa059b3564b8eaa4c5717dd28c65f",
"main.dart.js": "65d39be921c96f4eba3b3722895ead96",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "435b451423e159381eb6a9e3433d6e79",
"icons/Icon-192.png": "17abc83ec4a5b69fc1a3bba02dc75468",
"icons/Icon-maskable-192.png": "17abc83ec4a5b69fc1a3bba02dc75468",
"icons/Icon-maskable-512.png": "a9e9e74d8451ee6e9291b0a2ba1f904c",
"icons/Icon-512.png": "a9e9e74d8451ee6e9291b0a2ba1f904c",
"manifest.json": "6aae1868ddcd7d582c39810d76d2afd6",
"assets/AssetManifest.json": "7a6c0c9412e4ed21dc19863242e3c15b",
"assets/NOTICES": "eeebe77bfb372fe2c964445123d3706e",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "b9b09fbf9102965e636ee997425a5d1f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9d4cfa1d1aa29faeb5a5c2455991911d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "6a32f46f25a33dabcc00fe23ffacb5fb",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "64ac9f87502b2e8c3cd7e662bab8abdb",
"assets/fonts/MaterialIcons-Regular.otf": "d373fe7085a16fdb1a11b7cf82c13a3f",
"assets/assets/ai_app_bg.gif": "e7e89f84eb6cf847aacff4676652af54",
"assets/assets/images/about_image.jpg": "1752f1429bed26d78f35e4c26e4266e2",
"assets/assets/images/web_development.png": "f7163605f9f036fb72cec61e672e857c",
"assets/assets/images/logo-dark.png": "89f017e56496eb54ec49de75dc998f6c",
"assets/assets/images/flutter_logo.png": "83e0b762778417141075bba73510d371",
"assets/assets/images/brand_two_image.png": "3c22f8c51b7070917efea551bbc75e53",
"assets/assets/images/portfolio_two_image.jpg": "c39171e2dacaaeb9e579c1537c00a149",
"assets/assets/images/logo-InvertedTechnology-white.jpg": "fc026fc6bf04c527f64e149e9283f6fa",
"assets/assets/images/secure_solutions.jpeg": "6f231ee1a1da22671b79372d876a1435",
"assets/assets/images/coffee.png": "0a3380640f0eb6e36b694dafb7fe8e97",
"assets/assets/images/portfolio_one.png": "6ea22756ec2563fe108f881fcacbc095",
"assets/assets/images/portfolio_three.png": "7d49e458c5d7a3d6b0e4b9e21a6b299f",
"assets/assets/images/bg-home-image.jpg": "9edf8dd98b98267235168c11d2276cc0",
"assets/assets/images/img_ai_blue.gif": "fc405f06817ae93c439a3e8e999c4d60",
"assets/assets/images/logo_symbol_dark.png": "0ec294d6d3d140e34ce12df0b2ce630d",
"assets/assets/images/client_centric_approach.jpeg": "8d01024668671a91acb396f9c261d4d6",
"assets/assets/images/android_icon.png": "b495669fd9df11bfa81a64f6971f2fb0",
"assets/assets/images/e-commerce.png": "ec3eb183037afc304254ea4a7e55525e",
"assets/assets/images/doctor.png": "b7a983fb5bf36114133c169f66bbfef7",
"assets/assets/images/real_estate.png": "42fd5be72186baa1eafa15cfb67b3358",
"assets/assets/images/cui.png": "287f9787968f5df14897e9066c22a388",
"assets/assets/images/proven_track_record.jpg": "51bd685a2c3f9936bf0558b9e068a09c",
"assets/assets/images/proven_track_record.png": "9488a99b4a092cece2bae65503bbfbd7",
"assets/assets/images/background.jpg": "06019ef738701c0e08dcd88980c4b07f",
"assets/assets/images/details_page.png": "2e4eaae31c8d8e39665adb262be77bda",
"assets/assets/images/task.png": "62d6be2ebaef80434b114eacd9102a52",
"assets/assets/images/alarm.jpg": "7f8f2e55f5f47deaf440b3be64ca15d7",
"assets/assets/images/automotive.png": "5736ff474f875bf37f702a76df72a1a1",
"assets/assets/images/img_youtube.png": "33f1434531a41b1664eb1759b80853ba",
"assets/assets/images/portfolio_four_image.jpg": "881aa581dd0bfe23278b1553353328fc",
"assets/assets/images/health_care.png": "945b8e02f9c07607a59913c113031eed",
"assets/assets/images/portfolio_one_image.jpg": "f7d7fd4da8d9f104b6898b1c7af32146",
"assets/assets/images/brand_one_image.png": "d97354a22974f9348d61838632bd4095",
"assets/assets/images/logo.png": "2dc3b4ec7ccc0d7ad37ffd7491c8a1ca",
"assets/assets/images/logo_white.png": "508bbb2849c64094900a975f6dc6ca14",
"assets/assets/images/apple_icon.png": "bd3192396a5c514c83027f4abe852907",
"assets/assets/images/ic_launcher.png": "1d01f1d5b9ccff0e16e58e340b382df3",
"assets/assets/images/portfolio_five_image.jpg": "5fb426e41cf43a46424e7f7695fe10cd",
"assets/assets/images/car.png": "ae3e0dda1da997a4e0ccd5cf1a25d2cd",
"assets/assets/images/profile.png": "1d35475ce4996f70c2bce6dc8607d077",
"assets/assets/images/project_image.jpg": "3ff1f98c0c45f5a077a80d942845b235",
"assets/assets/images/img_ai_new.PNG": "3f842333e9d6390f9c2552de9e5f9b63",
"assets/assets/images/about_image1.jpg": "620d164095684a93092c6b9e1c0b6299",
"assets/assets/images/img_facebook.png": "0ab203780109a1a9e84c0199dd19936b",
"assets/assets/images/logoInvertedTechnology.png": "5f6288fbb769113e9b2ee8386ae72d9e",
"assets/assets/images/img_x.png": "d6d29a913523f5159bae1e5bb4be72b4",
"assets/assets/images/education.png": "25182fdf6924706b3e7b6179aae30e0c",
"assets/assets/images/contact_us.jpg": "849de19aae16151b6a48267ad943b97e",
"assets/assets/images/quran_app.png": "69998ed9880dedea2fc8aea71a01ab42",
"assets/assets/images/artificial_intelligence.png": "6106d44c4eae605c36318c02ee66c054",
"assets/assets/images/triange_icon.png": "086ab5ca50d3e558e3307ff009975083",
"assets/assets/images/chat.png": "489b7f6246ce741be85ca0d551e9d07b",
"assets/assets/images/portfolio_two.jpg": "7517ae43d9ab8792f40f9a440338c090",
"assets/assets/images/customized_solutions.jpg": "3959d88af11e94e3969c6ffa01084be1",
"assets/assets/images/recipe.png": "47c72988f9bb6d301948ac38877b231c",
"assets/assets/images/customized_solutions.png": "bafe8847f8f7aabdcab49ee64931ecc2",
"assets/assets/images/brand_three_image.png": "b5cdc851b9fa8b1eb66421fd4facc1d2",
"assets/assets/images/image.png": "9fb5704e719f93940bba93d69ebbd5cb",
"assets/assets/images/player.png": "612730c3861b2af0a0ae161ac8a72345",
"assets/assets/images/finance.png": "a67515097e6ce844d0d78290688bf021",
"assets/assets/images/portfolio_three_image.jpg": "cbfdc8ab9fadf4d9d83b72f18ff165bb",
"assets/assets/ai.gif": "276970b4e2f70c9c35851f03dd28d913",
"assets/assets/svgs/details_page.svg": "a3133f6620166c106416104247aab836",
"assets/assets/svgs/ic_marketing_reporting.svg": "46d44d726f8ab77d7a107ac193fdbd96",
"assets/assets/svgs/ic_heart.svg": "24b8cc40033b20a2d5ba193bec5159bb",
"assets/assets/svgs/ic_mobile_app_development.svg": "34e28fd41b3d19f63f1471385892bb90",
"assets/assets/svgs/ic_business_stratagy.svg": "4d2114b023a7bf047858da6fe8fc473c",
"assets/assets/svgs/ic_website_development.svg": "140a4745cef45102f8df455a850975e1",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
