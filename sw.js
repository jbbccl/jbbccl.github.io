/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/10/08/环境配置/hexo搭建/hexo-test/index.html","22da59d0eea83d37e24bcd2b76cdcf0e"],["/2024/10/08/环境配置/vmware/index.html","e26ace2c7f080bcc871a4f1b7eb155cf"],["/2024/10/13/环境配置/dabian/index.html","242535b334fde6a5273d15a3b7ce9bf3"],["/2024/10/14/sqli-labs/sqli-labs-less_1,4,11/index.html","a72e4f7cc4e43387b5de4dbded3e8a4d"],["/2024/10/26/环境配置/vue/vue通过vite代理连接fastapi，从而解决没有Access-Control-Allow-Origin跨域问题/index.html","af6148c7465f3f63d610c5310ee60ac5"],["/2024/10/28/py爆破zip脚本/index.html","0564a8993a5896ff52e16a2ff37b5b0a"],["/2024/10/30/sqli-labs/sqli-labs-less_7,8/index.html","047406f5be5c7cca5dce3522241222c3"],["/2024/11/07/环境配置/cmke_vsc_ipv6联机工具，测试版/index.html","87ab23d5e338efa5d380cb4e48ab9b1a"],["/2024/11/07/环境配置/vue/v-for中控制特定元素/index.html","7e3ccb5c9071e74ab6c0fbb6ae0e2fd1"],["/2024/11/08/学/二叉数非递归遍历/index.html","262f3a16accc256932684cf15ca69741"],["/2024/11/08/进程使用端口记录/index.html","0278fc9f91ffbc910e7d2a9dc6eb1572"],["/2024/11/10/环境配置/hexo搭建/hexo-neat不能压缩部分js文件-解决/index.html","cfa38cd326ba5d528a9130acfa18b393"],["/2024/11/11/环境配置/hexo搭建/Hexo的md解析器将半角单引号转换成全角/index.html","91c695ca2d42d32662c8c378e0588572"],["/2024/11/20/sqli-labs/sqli-labs-less-1-10/index.html","b2f24a9b13037df66715e2cf947a01e6"],["/2024/11/22/sqli-labs/sqli-labs-less-11-22/index.html","a3f34ad79e53dc09dd552eb2550b9e49"],["/2024/11/24/sqli-labs/sqli-labs-less-23-27/index.html","ca7c75acff11921b9fa9d66ad7cab57a"],["/2024/11/28/sqli-labs/sqli-labs-less-28-37/index.html","87f9e23a46ec5efc015125bbbb5ad726"],["/2024/12/04/sqli-labs/sqli-labs-less-35-45/index.html","8ada36c469635d1b42496e0700ce8583"],["/2024/12/07/upload-labs/upload-labs-1_5/index.html","6f2e863d25e80176e8cd88b4b8e2ea93"],["/archives/2024/10/index.html","3314f43c44bf061648b9f97a0b4f2cc0"],["/archives/2024/11/index.html","fd64ae34bb300f9906faf8d509daa3e7"],["/archives/2024/12/index.html","9bae3cb4b4d53be32443b142872ea5ab"],["/archives/2024/index.html","05b5126ac7371143f83de35a864bd377"],["/archives/2024/page/2/index.html","25b87dd85249b27480b1001d9507cbf4"],["/archives/index.html","5a3c2ad6426bd8906eb69bebff957e46"],["/archives/page/2/index.html","f1d6ab9a1a0ef2d1dafe8b3a3afbe4e8"],["/categories/index.html","cdf2a1e579b5001a94e73a600016ae3e"],["/categories/sqli/index.html","a3735d9ad88a7cef9a4abcf752201c85"],["/categories/upload/index.html","3cf1d119b4d466bc8d10caacc90df4ad"],["/categories/乱分的/index.html","92765f00e2490dab6435875c85a893fa"],["/categories/环境/index.html","19eda21ad5de88aacfd8cfb53956ab9f"],["/css/main.css","9b6c1d8a38a1b8f13c1442ebf79292c2"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.png","ec7a8c609cff0ea3c8f719ef379ed273"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/hexo-neat/1.jpg","e20f70d47b59e1ff149a26dc9fffe577"],["/img/hexo-neat/2.jpg","bf9bb7ce053f8fa2eb93506ba52c253b"],["/img/ipv6connecttool/1.jpg","7764cdef9499b85a89281d9f68200c60"],["/img/ipv6connecttool/2.jpg","b558fb722bd65f999f1baadf134896fc"],["/img/ipv6connecttool/3.jpg","9aef281ce55e85869733acf624d904d2"],["/img/ipv6connecttool/4.jpg","1c1be0ed45b13affbef1e7bea15807c4"],["/img/ipv6connecttool/5.jpg","1594bddd580cf6f10eb05f3e417e3e5b"],["/img/s1.png","5244113df53e42d393b5050e019559a1"],["/img/sqli-labs/20.jpg","1d1d981394f46d9e2d06086d4021b2b9"],["/img/upload-labs/1.1.png","2211acaf339e4e08d2a45a5e5514024d"],["/img/upload-labs/pass-2.1.png","3e19419a4ae632c7f2313cf86e4f2c8c"],["/index.html","d38213f2a44a3155702929b6ee05f38d"],["/js/algolia-search.js","4a62ead11973b0d2529897f2fe4e052b"],["/js/bookmark.js","c1b758ddba8859b02df17dc97f2e4e17"],["/js/local-search.js","40d5f44f5476dd99ff73a5462b1bca91"],["/js/motion.js","3b66b8d757d07f1a4292245564b10c9e"],["/js/next-boot.js","6f1adb0cfcfc79ae7e4c397000075377"],["/js/schemes/muse.js","198f345a8a2ceaf00c6376782ec3e75d"],["/js/schemes/pisces.js","4a67b67ebf4e61b760d60b41a2183bad"],["/js/utils.js","f515ce97773c40a4e977075cd46f358d"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","9af42389220a66fe2da30896a68d298d"],["/sw-register.js","88e75e23bffe6661d4915771cf17a643"],["/tags/bash/index.html","113e9401053d47c77c8cad4645797ffe"],["/tags/c/index.html","d69dd9d32700f17b0210695a4ce0ea17"],["/tags/cmake/index.html","2d26519c7fd4bd85290aad1e1edab6bc"],["/tags/deb/index.html","59369234d8eb5d06eb76d2d877bd9559"],["/tags/hexo/index.html","36df2da1cd027fe211289d9721a05ee0"],["/tags/index.html","02c1e0d644585c2d7886b1aef4e2af00"],["/tags/python/index.html","80ba41e89715a1a476ec1fe5feeb7d7b"],["/tags/sqli/index.html","2c0403e962a4e901e0855f29a765a0ae"],["/tags/upload/index.html","d36621eba7d5ff902e71c3926c543658"],["/tags/vite/index.html","580c368bf3c4a67f3c6ec6acd955d10d"],["/tags/vscode/index.html","6b7e40cc6fd5554cf44ee956a08e7033"],["/tags/vue3/index.html","461214e18f8fda015d5c98e23caa61bd"],["/tags/zip/index.html","310b8d5a1ffb49eca82a4d6bb2110bf6"],["/tags/初见/index.html","afa39dc8ea22636e2f70e33dfb86cdac"],["/tags/木大/index.html","3d1704205fa9293181d383de61750dcf"],["/tags/虚拟机/index.html","7fea06bd82e576cd9df51e1167330000"]];
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
