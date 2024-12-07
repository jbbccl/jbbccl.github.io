/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/10/08/环境配置/hexo搭建/hexo-test/index.html","a08c66ebaa9e8b36202bcf3d9bfab3b1"],["/2024/10/08/环境配置/vm/index.html","df36bc1da079a1879a730bec372e6b3d"],["/2024/10/13/环境配置/db/index.html","ada7a406fcaf480819c3f820c6798881"],["/2024/10/14/sqli-labs/sqli-labs-less_1,4,11/index.html","bbb1aef014109d7d2ea87be72e1159f2"],["/2024/10/26/环境配置/vue/vue通过vite代理连接fastapi，从而解决没有Access-Control-Allow-Origin跨域问题/index.html","aa0e0633d371b321aaf9081bbd7a99d1"],["/2024/10/28/py爆破zip脚本/index.html","310165699bd6fa86b75ee2f834d7d058"],["/2024/10/30/sqli-labs/sqli-labs-less_7,8/index.html","04acdbf4e38fdfb74dd5baddfa081363"],["/2024/11/07/环境配置/cmke_vsc_ipv6联机工具，测试版/index.html","46ba03f8b83938e1229f83edb0108a24"],["/2024/11/07/环境配置/vue/v-for中控制特定元素/index.html","767c11ae47db2b917a63334144f2112d"],["/2024/11/08/学/二叉数非递归遍历/index.html","635c1b994d75b821f89cefa3252f77b9"],["/2024/11/08/进程使用端口记录/index.html","28898d376ea17416a88efada7f189451"],["/2024/11/10/环境配置/hexo搭建/hexo-neat不能压缩部分js文件-解决/index.html","900d543402edbfa03c49b5369982e07a"],["/2024/11/11/环境配置/hexo搭建/Hexo的md解析器将半角单引号转换成全角/index.html","5bd198b7ff7f8b932145fe2c102bbab5"],["/2024/11/20/sqli-labs/sqli-labs-less-1-10/index.html","d728e41d1575bc6abc350587719c563a"],["/2024/11/22/sqli-labs/sqli-labs-less-11-22/index.html","d473a2ab21c1922a51054bd99828349b"],["/2024/11/24/sqli-labs/sqli-labs-less-23-27/index.html","c050ae72e76959882bf317f2e1ef6be9"],["/2024/11/28/sqli-labs/sqli-labs-less-28-37/index.html","b3fd3f8de34633bfb712be7b6e01783c"],["/2024/12/04/sqli-labs/sqli-labs-less-35-45/index.html","c87e15a22bb21375557aa8b4f2391205"],["/archives/2024/10/index.html","b7900775917b40e600f2543bee94a7f2"],["/archives/2024/11/index.html","409452d23e61c9140a10f1e1864e1559"],["/archives/2024/12/index.html","e79e199aea3aa175f1856623a423cebb"],["/archives/2024/index.html","1b6fb04586d7545041956caa3a7b17d2"],["/archives/2024/page/2/index.html","bf9c3140bfd143cc5d5fc582cfa165d5"],["/archives/index.html","a2b3230527deea128e2beb9ed41cc7f5"],["/archives/page/2/index.html","6fbcca1e65a4a234f346ea1ca5b8511d"],["/categories/index.html","8f59c6d65a3bfec1b779c43a009ecb9a"],["/categories/sqli/index.html","76c336f7488c24c2277d2db0a5b42557"],["/categories/乱分的/index.html","8eba1002cb202ff0c2334b8856302676"],["/categories/环境/index.html","e600dd4a824335544f448fd017d0f7f8"],["/css/main.css","46e50f79455e856de0a9c217030cdcf9"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.png","ec7a8c609cff0ea3c8f719ef379ed273"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/hexo-neat/1.jpg","e20f70d47b59e1ff149a26dc9fffe577"],["/img/hexo-neat/2.jpg","bf9bb7ce053f8fa2eb93506ba52c253b"],["/img/ipv6connecttool/1.jpg","7764cdef9499b85a89281d9f68200c60"],["/img/ipv6connecttool/2.jpg","b558fb722bd65f999f1baadf134896fc"],["/img/ipv6connecttool/3.jpg","9aef281ce55e85869733acf624d904d2"],["/img/ipv6connecttool/4.jpg","1c1be0ed45b13affbef1e7bea15807c4"],["/img/ipv6connecttool/5.jpg","1594bddd580cf6f10eb05f3e417e3e5b"],["/img/s1.png","5244113df53e42d393b5050e019559a1"],["/img/sqli-labs/20.jpg","1d1d981394f46d9e2d06086d4021b2b9"],["/index.html","59a7d2e1ead2d20c1ff431080dcb0b40"],["/js/algolia-search.js","4a62ead11973b0d2529897f2fe4e052b"],["/js/bookmark.js","c1b758ddba8859b02df17dc97f2e4e17"],["/js/local-search.js","40d5f44f5476dd99ff73a5462b1bca91"],["/js/motion.js","3b66b8d757d07f1a4292245564b10c9e"],["/js/next-boot.js","6f1adb0cfcfc79ae7e4c397000075377"],["/js/schemes/muse.js","198f345a8a2ceaf00c6376782ec3e75d"],["/js/schemes/pisces.js","4a67b67ebf4e61b760d60b41a2183bad"],["/js/utils.js","f515ce97773c40a4e977075cd46f358d"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","a93dd3816bed7eef6fcde81c38dde474"],["/sw-register.js","d9daa3ee179157c7ff05af15efe98dc8"],["/tags/bash/index.html","a4867c1dc2af96d80e449eaaab723804"],["/tags/c/index.html","06fb704324eb46bfd4e51d57d93f89c9"],["/tags/cmake/index.html","4cf16bda83158169ec0d512f6f03d652"],["/tags/deb/index.html","714913550ce5c072078320f0157cd9d4"],["/tags/hexo/index.html","808cfb4c156e345384779d0eb193483c"],["/tags/index.html","64587ab142a598bceccf1dc4b08c50ab"],["/tags/python/index.html","b190638feeb98a955410e5d6e4ab6668"],["/tags/sqli/index.html","90f91efbeef8e8387f4be9ac56aca50a"],["/tags/vite/index.html","2803417adfe5c34c2e0247dc128edfd7"],["/tags/vscode/index.html","4285d7c783cbea997b1e71ab0030ced4"],["/tags/vue3/index.html","77d38a6eb628c41b2511198de29b8ccd"],["/tags/zip/index.html","c235e7b9e577156aed64b596e23db846"],["/tags/初见/index.html","d24ebcdc5fb9809d98d212785cd25e7a"],["/tags/木大/index.html","253e7b4d6778d514d52337d4b1ab4b55"],["/tags/虚拟机/index.html","376aada8204d6a9e66ae99eb6e907267"]];
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
