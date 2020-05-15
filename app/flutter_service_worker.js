'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "a0d5ef3c12dcf140e26ea08acae138e1",
"/": "a0d5ef3c12dcf140e26ea08acae138e1",
"main.dart.js": "7cf7a1a46620789313369b766d8607d3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3cf2e2f0bf7298ba91614c9869a097c6",
"assets/LICENSE": "7a491c96d27781b6ada8fc74af382384",
"assets/AssetManifest.json": "58e31f17ae9b495e23fdd2f9f21353d0",
"assets/FontManifest.json": "33364d76cea1a76ff23916e0491ae741",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "fe1545ef4dd1eef2f1e25528898fc0b3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/open_iconic_flutter/assets/open-iconic.woff": "3cf97837524dd7445e9d1462e3c4afe2",
"assets/packages/flutter_boxicons/fonts/Boxicons.ttf": "138f7e93ae19c885698c72f740717280",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/images/applogo_ios.png": "ea4f81e1bc7a641d4e1e7bde875a8d78",
"assets/assets/images/stores.png": "a7fffe4f7e8e3f532ba743fe3c15088d",
"assets/assets/images/defaultprofile.png": "9b3a8d3b5f6dffe143379d35ab9139f1",
"assets/assets/images/applogo.png": "ed84d66811bca930ce9641ea7ff210d3",
"assets/assets/images/illustrations/students.svg": "88abb5dfa59572b4b7ec2db8f6f9156e",
"assets/assets/images/illustrations/login.svg": "e51234c20ed0691084bb9ae537130b0d",
"assets/assets/images/illustrations/teacher.svg": "f6ae13f77f42eace5346dc879c0ff853",
"assets/assets/images/illustrations/class.svg": "7a55d2bf0348fd08f4d7fb286f34036a",
"assets/assets/images/illustrations/record.svg": "4f46ed4f9ea81a6edced7cb94683d51b",
"assets/assets/images/illustrations/reading.svg": "2258c4b380d93cb61146428e9ddb8873",
"assets/assets/images/illustrations/profile.svg": "827cdefc3025ebe864ce959ed727a618",
"assets/assets/images/illustrations/undraw_MobileApp.svg": "03a42ff7f2b474f360d582e56fbc3461",
"assets/assets/images/features/timetable.svg": "6e192b750577e908cb971a3a318cf69f",
"assets/assets/images/features/alerts.svg": "3f48e9dfdcb6cb35f194a430341b7950",
"assets/assets/images/features/events.svg": "7e0ef10baf57710023388ff49d5eb26e",
"assets/assets/images/features/downloads.svg": "f9f41c6b7a1461d9e63deff3b7c42044",
"assets/assets/images/features/holidays.svg": "9dd638b20d236846372f252d75100d92",
"assets/assets/images/features/fee.svg": "2cfb2a1cb1f8c9bec851e4a6c957936f",
"assets/assets/images/features/website.svg": "2103c378a44070360ff6ac619210d87a",
"assets/assets/images/features/gallery.svg": "0c0efcca6dd756c5fa97d5e56b81b2dd",
"assets/assets/images/features/ask.svg": "2060ea7d90136d62e12d722c412caf1d",
"assets/assets/images/features/homework.svg": "501d8a5cb4d9a895fe162c2067a6135d",
"assets/assets/images/features/fees.svg": "d9465658275476229994ab9f368310cd",
"assets/assets/images/features/live.svg": "0bf81f7e448b42fea9ae1c32e8455217",
"assets/assets/images/features/feedback.svg": "a0530ac22afb4e0cf9ba26aa25e95c54",
"assets/assets/images/features/admin.svg": "4361702c4a2d1562caf722529230768b",
"assets/assets/images/features/notice.svg": "eddc03021541dbe327a720e12abc9aa1",
"assets/assets/images/features/bus.svg": "62997929e9729c707a305f0bc196c1b5",
"assets/assets/images/features/bus_location_pin.svg": "ae636d83d2128e9393c3d3475b07e743",
"assets/assets/images/features/magazine.svg": "e01f7da5bc524981dd6189c72b1c46b1",
"assets/assets/images/features/exams.svg": "490a258c0fb26b7d49adce8f7e72b413",
"assets/assets/images/avatar.jpg": "6553a6f588db697bce5d12aa137215b6",
"assets/assets/images/logo.png": "83ed0c70d07356baa5f07de9b395b320",
"assets/assets/images/institution_code_bg.jpg": "2b737183a3f9efe234b3ff060ffad0ad",
"assets/assets/images/LogoIcon.png": "af771f5c636365446dfa6d5b907ca210",
"assets/assets/images/default.png": "a12eecc5fe4194350295aa2a37a391a6",
"assets/assets/images/default.jpg": "d4b454201d8e5d578fc43e61426e1fab",
"assets/assets/images/icon_svgs/image_or_video.svg": "362165ab136ab90c24b0aac157215bc1",
"assets/assets/images/icon_svgs/document.svg": "6f1889d07edda28287af44233c840f67",
"assets/assets/languages/language_translations.json": "dd5115d59230985e8610edb0a6779a24",
"assets/assets/fonts/Nunito_Bold.ttf": "974bca2bf26dc2fae8d67248d9df5e34",
"assets/assets/fonts/NunitoSans_ExtraBold.ttf": "6c3877898e39f3cf9044e80df76e7c0d",
"assets/assets/fonts/Nunito_ExtraBold.ttf": "feb8359d760b2d69e911f7c8136b6c2d",
"assets/assets/fonts/Nunito_Regular.ttf": "dba92cb9dc60f9f35cbf62428afd3ac1",
"assets/assets/fonts/IntractIcons.ttf": "a41aa1494fd123ba0df72e0511879566",
"assets/assets/fonts/NunitoSans_Black.ttf": "cea08aabf611ab93a3ddc3925b5614a8"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
