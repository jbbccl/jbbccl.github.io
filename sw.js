/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/10/08/环境配置/hexo搭建/hexo-test/index.html","d6bac22023faafee15d7e27a3acf0b56"],["/2024/10/08/环境配置/vmware/index.html","245cac4b90aca09648fdff02570d14f7"],["/2024/10/13/环境配置/dabian/index.html","eda089cd84dc6f0bc9e52ceb5e4359f9"],["/2024/10/14/sqli-labs/sqli-labs-less_1,4,11/index.html","b002b01c1ee51ccffcb7964c12dd58c6"],["/2024/10/26/环境配置/vue/vue通过vite代理连接fastapi，从而解决没有Access-Control-Allow-Origin跨域问题/index.html","49bd406fffc8d3090a15113776dca293"],["/2024/10/28/py爆破zip脚本/index.html","72309a09119ac2229146be82ea4b1bce"],["/2024/10/30/sqli-labs/sqli-labs-less_7,8/index.html","9e75f7db36c7af4d634100dc816eb687"],["/2024/11/07/环境配置/cmke_vsc_ipv6联机工具，测试版/index.html","a2166fae771759da1419555b40516713"],["/2024/11/07/环境配置/vue/v-for中控制特定元素/index.html","17f6ecde39bddc4111316dbfe5322cdb"],["/2024/11/08/学/二叉数非递归遍历/index.html","e7b25c0cbc39eb9e9df23640fa7d4e35"],["/2024/11/08/进程使用端口记录/index.html","59a55086cfbbfcfe57b253e3029555c2"],["/2024/11/10/环境配置/hexo搭建/hexo-neat不能压缩部分js文件-解决/index.html","db8dcbfb12b7217b2daeca07f169bbad"],["/2024/11/11/环境配置/hexo搭建/Hexo的md解析器将半角单引号转换成全角/index.html","8ad7fb26722ef8c5f3ca8747e74591f0"],["/2024/11/20/sqli-labs/sqli-labs-less-1-10/index.html","af001a1addc36c372bc7266e64c9b119"],["/2024/11/22/sqli-labs/sqli-labs-less-11-22/index.html","1f24b6b2d9824b9d27cfe2a782c1e2db"],["/2024/11/24/sqli-labs/sqli-labs-less-23-27/index.html","327aecb2169cbd039c53e1a4d9cab1dd"],["/2024/11/28/sqli-labs/sqli-labs-less-28-37/index.html","f5605951ceeceb52631c31317f58954d"],["/2024/12/04/sqli-labs/sqli-labs-less-35-45/index.html","55d61d293cf235a83946d2d9c0cb2ace"],["/2024/12/07/upload-labs/upload-labs-1_5/index.html","bf592a25f771758c89d0a1ee657e0192"],["/archives/2024/10/index.html","7d5b16bf036edcfc8527088ce5f3faa9"],["/archives/2024/11/index.html","126413d9169c90a9c0e4d4e7c5bc7873"],["/archives/2024/12/index.html","18419a53157c78780d44ee08dcaa27e0"],["/archives/2024/index.html","fd7542a6e49e90e0abc1ad5f65457c35"],["/archives/2024/page/2/index.html","4a9837c70ee9bae050ec74e80401404b"],["/archives/index.html","5e6e03ef2849a5feac08c321f247f540"],["/archives/page/2/index.html","522ae55b5ce370738eea110e24ea647c"],["/categories/index.html","edf2f343b0cecb689b96cdf69e27be83"],["/categories/sqli/index.html","9d1b8df4ed28cacd0baa16cf5516721a"],["/categories/upload/index.html","774ef146c19336857b0aec284fe00a36"],["/categories/乱分的/index.html","755f49083eb34fcf3e579a6ae8636265"],["/categories/环境/index.html","69df5c9c09953531eae5d2f800820fe9"],["/css/main.css","3c253594c9918a5242ac12fc5ba46725"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.png","ec7a8c609cff0ea3c8f719ef379ed273"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/hexo-neat/1.jpg","e20f70d47b59e1ff149a26dc9fffe577"],["/img/hexo-neat/2.jpg","bf9bb7ce053f8fa2eb93506ba52c253b"],["/img/ipv6connecttool/1.jpg","7764cdef9499b85a89281d9f68200c60"],["/img/ipv6connecttool/2.jpg","b558fb722bd65f999f1baadf134896fc"],["/img/ipv6connecttool/3.jpg","9aef281ce55e85869733acf624d904d2"],["/img/ipv6connecttool/4.jpg","1c1be0ed45b13affbef1e7bea15807c4"],["/img/ipv6connecttool/5.jpg","1594bddd580cf6f10eb05f3e417e3e5b"],["/img/s1.png","5244113df53e42d393b5050e019559a1"],["/img/sqli-labs/20.jpg","1d1d981394f46d9e2d06086d4021b2b9"],["/img/upload-labs/1.1.png","2211acaf339e4e08d2a45a5e5514024d"],["/img/upload-labs/pass-2.1.png","3e19419a4ae632c7f2313cf86e4f2c8c"],["/index.html","228055044bdd7c933dc30b5da60d2a17"],["/js/algolia-search.js","4a62ead11973b0d2529897f2fe4e052b"],["/js/bookmark.js","c1b758ddba8859b02df17dc97f2e4e17"],["/js/local-search.js","40d5f44f5476dd99ff73a5462b1bca91"],["/js/motion.js","3b66b8d757d07f1a4292245564b10c9e"],["/js/next-boot.js","6f1adb0cfcfc79ae7e4c397000075377"],["/js/schemes/muse.js","198f345a8a2ceaf00c6376782ec3e75d"],["/js/schemes/pisces.js","4a67b67ebf4e61b760d60b41a2183bad"],["/js/utils.js","f515ce97773c40a4e977075cd46f358d"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","f7f0b71c8370e46de24b3ff771f9fd3c"],["/sw-register.js","848d115193e6970c544776cb93b5b23d"],["/tags/bash/index.html","67e3d66a3c36c2f2c0d7ed4c6094464c"],["/tags/c/index.html","6684b370a1a41bb1280923674dfa37c8"],["/tags/cmake/index.html","2fe5512f554f095823144ad35d7c3f8e"],["/tags/deb/index.html","649f348abeff938e8e2daafe32213e0a"],["/tags/hexo/index.html","13a6a641a2bbff5d77aff88ae5481871"],["/tags/index.html","b1c6b69704a7e4333d1e43ea344d1348"],["/tags/python/index.html","59544062849e79f13c4504b876237135"],["/tags/sqli/index.html","dd65ded5ad8dafb83ee8384d17edf4ba"],["/tags/upload/index.html","06b41d5337e77a5237e2a4dc593b280d"],["/tags/vite/index.html","fc3821bddbc27141bde8a563640767f7"],["/tags/vscode/index.html","f19a8a6f23967e6432bf3a6987d30566"],["/tags/vue3/index.html","cd9ee292a3594278953f587029f2e16b"],["/tags/zip/index.html","f62ef377f6ed1e440589e826c41e4313"],["/tags/初见/index.html","ec8fc2ff84103b81fa6dcee8c5291218"],["/tags/木大/index.html","516b6cc8a95cfec47a81de0bddd671ec"],["/tags/虚拟机/index.html","4946bec3e225579232742e1967d3e991"]];
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
