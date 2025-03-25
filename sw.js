/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/10/08/环境配置/hexo搭建/hexo-test/index.html","eb7100cad7349a980e4f416ac0ea84f0"],["/2024/10/08/环境配置/vmware/index.html","31bf630930ec0891a5e65edbbc22624b"],["/2024/10/13/环境配置/dabian/index.html","4c572aa0d4025c758ed3d683b5678002"],["/2024/10/14/sqli-labs/sqli-labs-less_1,4,11/index.html","93a9a06390c0a71a2f972eb88e76ada1"],["/2024/10/26/环境配置/vue/vue通过vite代理连接fastapi，从而解决没有Access-Control-Allow-Origin跨域问题/index.html","595b8b8514eedcf7d378676aa393ef3c"],["/2024/10/28/工具/py爆破zip脚本/index.html","b2f17ea8837fc3a5eedc8cf5da8137c0"],["/2024/10/30/sqli-labs/sqli-labs-less_7,8/index.html","f864c9f758a454c4d3050e9c121f68f4"],["/2024/11/07/环境配置/cmke_vsc_ipv6联机工具，测试版/index.html","11ff6e52627b2753ddcad6d85c0d7cec"],["/2024/11/07/环境配置/vue/v-for中控制特定元素/index.html","fdb022fc444556c7d2af4fda36a5df8a"],["/2024/11/08/学/二叉数非递归遍历/index.html","00cfcbf7232068062395566906d6cc8a"],["/2024/11/08/工具/进程使用端口记录/index.html","0b541d254e04666a05f0fbd6617d7814"],["/2024/11/10/环境配置/hexo搭建/hexo-neat不能压缩部分js文件-解决/index.html","47990be45f6b7e0c8904cd339f56d3e1"],["/2024/11/11/环境配置/hexo搭建/Hexo的md解析器将半角单引号转换成全角/index.html","bbb19527c1848650ef6f6e64b71bf92b"],["/2024/11/20/sqli-labs/sqli-labs-less-1-10/index.html","ae7c75555e9bf6b18886a533d516f82f"],["/2024/11/22/sqli-labs/sqli-labs-less-11-22/index.html","c15d18899f97503b4dfe88e18380a738"],["/2024/11/24/sqli-labs/sqli-labs-less-23-27/index.html","09ef04813bfa47d31f3d3705294e3ac8"],["/2024/11/28/sqli-labs/sqli-labs-less-28-37/index.html","25e1e31c60ddbfb6f4dcbdb0b2f8b86b"],["/2024/12/04/sqli-labs/sqli-labs-less-35-45/index.html","3667b52f4d28093ecafd4e33cbe78ab1"],["/2024/12/07/upload-labs/upload-labs-1_5/index.html","b3ac9922dbfdd77357d266b34ffd3e0b"],["/2025/03/15/学/crt/index.html","bb7edf4b6c93a13f4abddcb3bc328b1f"],["/archives/2024/10/index.html","2c4d2d7b5dae33ceba3411402695fd6f"],["/archives/2024/11/index.html","70c07fe96adf39153270a6c582299fd9"],["/archives/2024/12/index.html","ed49dfdade2ee17ef1b86e17012f6fcd"],["/archives/2024/index.html","748cd9d77b90a4ca590e8eaea11361be"],["/archives/2024/page/2/index.html","e923d4d4b85e9cd0a1f0139605a4f75a"],["/archives/2025/03/index.html","281430d24532259094732355170fb0cc"],["/archives/2025/index.html","bfa8af3a9b5a2359f0d75aefeff55a66"],["/archives/index.html","35dc99d2a73908e595958bb534ae043a"],["/archives/page/2/index.html","58606071036bc5188cb87c7adc8fc2be"],["/categories/index.html","54a7ce4d72014793c7b3a97089b9ce43"],["/categories/sqli/index.html","89e870b08ac633258f9f0bb71ddd310b"],["/categories/upload/index.html","960000d71be75c93f24d52e7bdb732c3"],["/categories/乱分的/index.html","53aa86fcbdcee8ccf7e16927a1df372c"],["/categories/环境/index.html","2e5256169df6ab3224453d6d11b26130"],["/css/main.css","499792fc491aaa6f56f206f492d37ec7"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.png","ec7a8c609cff0ea3c8f719ef379ed273"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/hexo-neat/1.jpg","e20f70d47b59e1ff149a26dc9fffe577"],["/img/hexo-neat/2.jpg","bf9bb7ce053f8fa2eb93506ba52c253b"],["/img/ipv6connecttool/1.jpg","7764cdef9499b85a89281d9f68200c60"],["/img/ipv6connecttool/2.jpg","b558fb722bd65f999f1baadf134896fc"],["/img/ipv6connecttool/3.jpg","9aef281ce55e85869733acf624d904d2"],["/img/ipv6connecttool/4.jpg","1c1be0ed45b13affbef1e7bea15807c4"],["/img/ipv6connecttool/5.jpg","1594bddd580cf6f10eb05f3e417e3e5b"],["/img/s1.png","5244113df53e42d393b5050e019559a1"],["/img/sqli-labs/20.jpg","1d1d981394f46d9e2d06086d4021b2b9"],["/img/upload-labs/1.1.png","2211acaf339e4e08d2a45a5e5514024d"],["/img/upload-labs/pass-2.1.png","3e19419a4ae632c7f2313cf86e4f2c8c"],["/index.html","9f40f51a4bd4d8f251c8c7076d7f7943"],["/js/algolia-search.js","4a62ead11973b0d2529897f2fe4e052b"],["/js/bookmark.js","c1b758ddba8859b02df17dc97f2e4e17"],["/js/local-search.js","40d5f44f5476dd99ff73a5462b1bca91"],["/js/motion.js","3b66b8d757d07f1a4292245564b10c9e"],["/js/next-boot.js","6f1adb0cfcfc79ae7e4c397000075377"],["/js/schemes/muse.js","198f345a8a2ceaf00c6376782ec3e75d"],["/js/schemes/pisces.js","4a67b67ebf4e61b760d60b41a2183bad"],["/js/utils.js","f515ce97773c40a4e977075cd46f358d"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","cd75bfbc4b45c186743a5cfd9c3bc378"],["/sw-register.js","496f69e854b398de1a3ebddb1c5c4ee8"],["/tags/bash/index.html","40d8cee9a46c1882acd1842f7317c16f"],["/tags/c/index.html","38209aeb4a3b2868fa6aad9c7cae028a"],["/tags/cmake/index.html","7a3125db7ca1d9c37df755f62eaa8b5a"],["/tags/deb/index.html","0144733d840a68644cd086a3b228c867"],["/tags/hexo/index.html","51aa56ab51ef42b8b3b7516ade8f85f5"],["/tags/index.html","45c46df627be1861719a2c1802a41fd3"],["/tags/python/index.html","af695b457952cd4aed4bc775c5583792"],["/tags/sqli/index.html","a95dccce2d9cf61fba1ff3adadf2e070"],["/tags/upload/index.html","34585e78aecceb680c084d49faa32934"],["/tags/vite/index.html","563e9fb227c0a9aa409d13d986d1e806"],["/tags/vscode/index.html","72596b3303d04312ed958c406abaf706"],["/tags/vue3/index.html","ad1f1e66ebaef158562a7a6c21ede079"],["/tags/zip/index.html","8c6dd2e5689b6418ec5ce5a20deaf47b"],["/tags/初见/index.html","45e2e05db170c2b0fc8f676027fc9cbe"],["/tags/木大/index.html","c2760044de5c9f621a55723314dbaa1c"],["/tags/虚拟机/index.html","2f6ef99c9fca6069454e4d7e33462955"]];
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
