"use strict";var precacheConfig=[["./index.html","56b3d9443dc98c574ebd47a7c9528249"],["./static/css/main.139fb428.css","8f1b1679173601f92de1d341cd5173d7"],["./static/js/0.07110e38.chunk.js","e1434c8d9a2bcf490daa3e83182a76cf"],["./static/media/AI.9d26a478.jpg","9d26a4782679f5538b3ef94f6f1aa0fc"],["./static/media/BigDta.66a6e13f.png","66a6e13f1c6b8f33393c99b506033ff5"],["./static/media/CCF龙星计划——集成电路设计自动化技术基础.87349558.md","87349558bc52f7bd82ef75cec3795f07"],["./static/media/Embeddes.335958ab.jpg","335958abc3e777de1000168d1cd6197e"],["./static/media/MoveAI实验室三名研究生获国家奖学金.dfbac417.md","dfbac4174741773668201b99e57a67c6"],["./static/media/MoveAI实验室两名研究生获校优秀毕业生.72adedea.md","72adedea2f5c58e4a127e701ca2ef88c"],["./static/media/MoveAI实验室成员到寒武纪学习.322f4adf.md","322f4adfae560edec1f44d8a68d23627"],["./static/media/MoveAI实验室成员参加CNCC大会.225dd4b2.md","225dd4b202fd898e9b1bb6cc31dae5fc"],["./static/media/MoveAI实验室邀请北航龙星计划主办老师到我校宣传.ee264f54.md","ee264f54225e292cbdcc03e2a8b626d6"],["./static/media/banner2.bb7164bb.jpg","bb7164bb14bee6daf9edb3e918ace86b"],["./static/media/cover.2a8fbfa1.png","2a8fbfa1ab82068935695ed4911d0e39"],["./static/media/defaultAvatar.14c4a495.svg","14c4a495abdbacf90a90f51e63eb4502"],["./static/media/login_bg.96975afb.jpg","96975afbf7a6976d181f47bba65d2734"],["./static/media/realtime.0acb3c71.jpg","0acb3c713f2025e69704760a50ccbe35"],["./static/media/专利.d8d55460.md","d8d5546083fc88f587d3b7e36fe158e9"],["./static/media/会议论文.ec38a5d9.md","ec38a5d97642f92dc27171d56ddeb160"],["./static/media/期刊论文.7679a45d.md","7679a45d0ee8c0dfb679618f65259639"],["./static/media/横向项目.7a6aab23.md","7a6aab234aa64f694a3e9a7838fa8ff8"],["./static/media/碧峰峡团建.a1dbaf2a.md","a1dbaf2a97b66a880db6800ee52325ff"],["./static/media/纵向项目.7e3db45b.md","7e3db45b8c05f7a67c35964e1efb80fe"],["./static/media/美国匹兹堡大学胡京通助理教授来访我院.2867cdcd.md","2867cdcd4109aef4ba01d8f2c4e64b69"],["./static/media/美国圣母大学Danny Ziyi Chen做客信软讲坛.09629af9.md","09629af94184d2f5805faa2cfe131502"],["./static/media/美国圣母大学X.Sharon Hu做客信软讲坛.50a9d2c5.md","50a9d2c595aac0b75392784457a19829"],["./static/media/美国圣母大学尹勋钊博士来访学院.9f404553.md","9f404553b3a8530f818fed8a7ae04dcf"],["./static/media/美国明尼苏达大学Sachin Sapatnekar教授来我校讲授龙星计划课程.4490aec9.md","4490aec987ae0809e06a9b8bb82ffb85"],["./static/media/美国西北大学黄超博士后来访我院.0ec979e2.md","0ec979e21b8a68c7d0ccb296d70afee4"],["./static/media/软著.7489bf15.md","7489bf158f84f45febfa7da0ad1872f6"],["./static/media/香港城市大学Phd到MoveAI开展讲座.7f707819.md","7f7078195bed1e08c9310bbb42365f88"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="./index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});