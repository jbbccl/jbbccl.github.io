/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/10/08/test/index.html","f9b41f55385547eb80751d5008aad042"],["/2024/10/08/vm/index.html","c4925ca607fe7152bf272406a0aae72a"],["/2024/10/13/db/index.html","552b06f18bcb828fa8162d72da6b3042"],["/2024/10/14/less1,4,11/index.html","dbd485eef3917c9a2bc9fc06240175b6"],["/2024/10/26/vue通过vite代理连接fastapi，从而解决没有Access-Control-Allow-Origin跨域问题/index.html","952c6319e3dc7053b1592455e7f77dae"],["/2024/10/28/py爆破zip脚本/index.html","ecbb3769463d49204255551983583e6f"],["/2024/10/30/less7,8/index.html","f5e2430d366376aa28b7ab30a3d80092"],["/2024/11/07/ipv6联机工具，测试版/index.html","4e5bcd16422a28e3b46c6f6283f27e8d"],["/2024/11/07/v-for中控制特定元素/index.html","a6d0e4ac1fd1bc711106bdf65bd9ccc1"],["/2024/11/08/二叉数非递归遍历的心得/index.html","86e87947ec114152b564a4507236b1e3"],["/2024/11/08/进程使用端口记录/index.html","d6a3c7fbe0d2802b02d0f32426277554"],["/2024/11/10/hexo-neat不能压缩部分js文件-解决/index.html","39009c5596bebf0a5df0ac1decc88d13"],["/2024/11/20/sqli-labs-less-1-10/index.html","694856dd5854bed715afc559b3a1a0c8"],["/2024/11/21/sqli-labs-less-11-20/index.html","3343f1fbf537f1008b2caa6cde623d34"],["/archives/2024/10/index.html","8d37750102a4ce3c505f4ba85b18fa60"],["/archives/2024/11/index.html","0f288abd0cacf16a7abf66066620ec9d"],["/archives/2024/index.html","5a06d1b28863cfa941e3d9b72b8f7549"],["/archives/2024/page/2/index.html","2aa6cf20fbadca45f818245e38057322"],["/archives/index.html","a2e516edee3896445e83fe8a5bcfffc9"],["/archives/page/2/index.html","51e0d83ce0790e03acd1297f218d3815"],["/categories/index.html","f805bd055631c2ad6d7ae6576f37f3d6"],["/categories/sqli/index.html","b0caf97e0f7909d700b3d0fd155ddaf5"],["/categories/乱分的/index.html","b0e681e1a47735881b2bbea5619f5a2b"],["/categories/环境/index.html","02b0a755daefb5f4f056baa724592083"],["/css/main.css","775770d7857c08408a91d81facfbedb4"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.png","ec7a8c609cff0ea3c8f719ef379ed273"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/hexo-neat/1.jpg","e20f70d47b59e1ff149a26dc9fffe577"],["/img/hexo-neat/2.jpg","bf9bb7ce053f8fa2eb93506ba52c253b"],["/img/ipv6connecttool/1.jpg","7764cdef9499b85a89281d9f68200c60"],["/img/ipv6connecttool/2.jpg","b558fb722bd65f999f1baadf134896fc"],["/img/ipv6connecttool/3.jpg","9aef281ce55e85869733acf624d904d2"],["/img/ipv6connecttool/4.jpg","1c1be0ed45b13affbef1e7bea15807c4"],["/img/ipv6connecttool/5.jpg","1594bddd580cf6f10eb05f3e417e3e5b"],["/img/s1.png","5244113df53e42d393b5050e019559a1"],["/index.html","8712db666950e24c5947be05924e658e"],["/js/algolia-search.js","4a62ead11973b0d2529897f2fe4e052b"],["/js/bookmark.js","c1b758ddba8859b02df17dc97f2e4e17"],["/js/local-search.js","40d5f44f5476dd99ff73a5462b1bca91"],["/js/motion.js","3b66b8d757d07f1a4292245564b10c9e"],["/js/next-boot.js","6f1adb0cfcfc79ae7e4c397000075377"],["/js/schemes/muse.js","198f345a8a2ceaf00c6376782ec3e75d"],["/js/schemes/pisces.js","4a67b67ebf4e61b760d60b41a2183bad"],["/js/utils.js","937b73d373bfd72ae9bd324c2b4d0b56"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","972ec8ad9b06cd52806d39748a925d3d"],["/sw-register.js","1f89b96b21ce321e471bb89df725fd0a"],["/tags/bash/index.html","482b287df54ac9e3e9298acd85ed2a95"],["/tags/c/index.html","c175df6e37cfe7d757b700c66054a06c"],["/tags/deb/index.html","063a6deb2f5ca509dc6a36d6047b5e1a"],["/tags/hexo/index.html","9b3a87510527aa92ea8f210f8b930fb3"],["/tags/index.html","90400690e7524d114c08bb55908489c3"],["/tags/python/index.html","66cf5463910b9b9b94e166de4462444e"],["/tags/sqli/index.html","a54c355f00dbf9b611c4dbde367eaf9d"],["/tags/vite/index.html","c45a044c6bb06fca7417ee5e9b3f7bb7"],["/tags/vue3/index.html","eba9838d1c9fee4d375ab53e78011d05"],["/tags/zip/index.html","cc3cfd36a5caef72f372be1b9bf0cb72"],["/tags/初见/index.html","a9e61ab0dcf5af320ef03f3f0f27135b"],["/tags/木大/index.html","2a43774313f6b72b41f3aa6e8a6bbf6d"],["/tags/虚拟机/index.html","15904e5285368a774f60c6b984bf3738"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
