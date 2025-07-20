/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/10/08/环境配置/hexo搭建/hexo-test/index.html","d24dc43d71f3426589c0e2da4edcd00a"],["/2024/10/08/环境配置/vmware/index.html","468f82d649ae98d6894979059a1cc0f3"],["/2024/10/13/环境配置/dabian/index.html","9cd3bd1ad59a5480e9cdaff4b6db1a8a"],["/2024/10/14/sqli-labs/sqli-labs-less_1,4,11/index.html","a3d0a0b7edbb38c7932278086534b1a9"],["/2024/10/26/环境配置/vue/vue通过vite代理连接fastapi，从而解决没有Access-Control-Allow-Origin跨域问题/index.html","73a580956108741604a7524691a3df3c"],["/2024/10/28/工具/py爆破zip脚本/index.html","82af66a3ab1abd1535b189d336f95f90"],["/2024/10/30/sqli-labs/sqli-labs-less_7,8/index.html","ed7f616607089bae16fe8f5d2abd14de"],["/2024/11/07/环境配置/cmke_vsc_ipv6联机工具，测试版/index.html","f8e143888fb6c3d51490106f8392d25b"],["/2024/11/07/环境配置/vue/v-for中控制特定元素/index.html","e4b8afc9875e6ad64d3a24c2fd8f26e4"],["/2024/11/08/学/二叉数非递归遍历/index.html","b287758e63016789b0f2fb27cb10e9f2"],["/2024/11/08/工具/进程使用端口记录/index.html","e844f4893c1f296a2ca6559b25e80a8d"],["/2024/11/10/环境配置/hexo搭建/hexo-neat不能压缩部分js文件-解决/index.html","b439d2e706a47f2fbcd3d3c6f0522aeb"],["/2024/11/11/环境配置/hexo搭建/Hexo的md解析器将半角单引号转换成全角/index.html","bea4d855717a6a3dae1db5118c50545d"],["/2024/11/12/学/php_rce/rce_me/index.html","a51f5d1a2eaa373299451d8ec98b57f0"],["/2024/11/20/sqli-labs/sqli-labs-less-1-10/index.html","e9a42c3e029899fbe25abcc5f83948ce"],["/2024/11/22/sqli-labs/sqli-labs-less-11-22/index.html","01823f79bd362d98dafd190b627b27c4"],["/2024/11/24/sqli-labs/sqli-labs-less-23-27/index.html","230cee2d7f1a9cf5823d5830b170e814"],["/2024/11/28/sqli-labs/sqli-labs-less-28-37/index.html","3837de984d4ac7a9be07fe7d18d1ba2b"],["/2024/12/04/sqli-labs/sqli-labs-less-35-45/index.html","71f6cc72667a865691cac487b3ea6f90"],["/2024/12/07/upload-labs/upload-labs-1_5/index.html","99dcd82b52c74cb69375ca725c571eff"],["/2025/03/12/环境配置/配置php-debug/index.html","1a93d5d65983311b79e4e6d7c48bca96"],["/2025/03/15/学/crt/index.html","7f890cb99d8e0a2ceff9d3f7ff88341a"],["/2025/04/20/sqli-labs/ezsql[xyctf2025]/index.html","0607179d272bb8204cd4ca9d52b85b87"],["/2025/05/02/学/bottle_反序列化/index.html","8aa56db7ae2db13b370244667412e4ff"],["/2025/05/03/学/php_rce/php_无参rce/index.html","ba144308975c673e43c08bff94163c0c"],["/2025/05/10/学/encode/index.html","1749b5e9b65f014c6d8cfd3c9d4c6927"],["/2025/05/10/环境配置/安卓调试环境/index.html","45617ddfeb4c728b8a78e31dc632e25b"],["/2025/07/20/学/SSTI_jinja2/index.html","a6c0577c3e2ca2d81f30a577875535e6"],["/archives/2024/10/index.html","495902ba90d53e1497b6c0ffff662f3f"],["/archives/2024/11/index.html","991bdde8e149d61707259e6dc2f784e5"],["/archives/2024/11/page/2/index.html","adac1ca34582a9e1c715557a4f98a281"],["/archives/2024/12/index.html","b3381bb505b9f8f8ac436c8c530df045"],["/archives/2024/index.html","fb9e1b1a7938fb1dc2aa777036941bd1"],["/archives/2024/page/2/index.html","77e1593413295111968d09d2b616c58b"],["/archives/2025/03/index.html","1520a19a78f1ba55d0828f616d0d69a5"],["/archives/2025/04/index.html","5da6f5f144b625610be8a75618e9f9db"],["/archives/2025/05/index.html","561ce3d32e596914b2fb6a07898b8470"],["/archives/2025/07/index.html","1f843f4e439954c1600259fddd2aaecc"],["/archives/2025/index.html","903cb713520c8409a67e11e7970d913a"],["/archives/index.html","959e80448b5fe2dd68c593fc103e6917"],["/archives/page/2/index.html","7163e8e299d612fbf30e59b4ba0d1dc4"],["/archives/page/3/index.html","dcd1e3f3090b02d78a65a60b766eaab9"],["/categories/RCE/index.html","5a4d2aa11cf51d1f7264a8ccb01c4b40"],["/categories/RCE/php/index.html","7097c02fe2204556feec68a9bd7eae5c"],["/categories/index.html","4ccd460609c6d093cd195a18d1a81399"],["/categories/sqli/index.html","d20f8a1932ecf9b08944c697280a26c6"],["/categories/upload/index.html","6f89a066f18f2f4b0c81477c59c41024"],["/categories/乱分的/index.html","eaecea08a6b2cc956c50ae227c5259db"],["/categories/环境/index.html","8a3c465c428520f3d18bc45e21309e12"],["/categories/环境/mobile/index.html","22987bfa96910aa0924bd9f23a58eb46"],["/css/main.css","3870e253d0ec8f97e5bd33a90e0a20d4"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.png","ec7a8c609cff0ea3c8f719ef379ed273"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/sqli-labs/20.jpg","1d1d981394f46d9e2d06086d4021b2b9"],["/images/sqli-labs/sqli-labs-less_1,4,11.png","5244113df53e42d393b5050e019559a1"],["/images/upload-labs/1.1.png","2211acaf339e4e08d2a45a5e5514024d"],["/images/upload-labs/pass-2.1.png","3e19419a4ae632c7f2313cf86e4f2c8c"],["/images/学/php_rce/1.png","43301ac6d960666237380cd07c96a5e7"],["/images/学/php_rce/2.png","a717e7cb7944d91ae39b946d56f8d927"],["/images/环境配置/hexo-neat/1.jpg","e20f70d47b59e1ff149a26dc9fffe577"],["/images/环境配置/hexo-neat/2.jpg","bf9bb7ce053f8fa2eb93506ba52c253b"],["/images/环境配置/ipv6connecttool/1.jpg","7764cdef9499b85a89281d9f68200c60"],["/images/环境配置/ipv6connecttool/2.jpg","b558fb722bd65f999f1baadf134896fc"],["/images/环境配置/ipv6connecttool/3.jpg","9aef281ce55e85869733acf624d904d2"],["/images/环境配置/ipv6connecttool/4.jpg","1c1be0ed45b13affbef1e7bea15807c4"],["/images/环境配置/ipv6connecttool/5.jpg","1594bddd580cf6f10eb05f3e417e3e5b"],["/images/环境配置/安卓调试环境/Use_sorce.png","3351cfab8c5beecded4cc6a17ccf5fdd"],["/images/环境配置/安卓调试环境/ida_so.png","a62e89c26176c179114999dce68bb31b"],["/images/环境配置/安卓调试环境/jadx_dbg.png","ab3b090c7244c6bf48ca8a2eb516b784"],["/index.html","aaf27ecf588f06d8bf869dc260bad775"],["/js/algolia-search.js","4a62ead11973b0d2529897f2fe4e052b"],["/js/bookmark.js","c1b758ddba8859b02df17dc97f2e4e17"],["/js/local-search.js","40d5f44f5476dd99ff73a5462b1bca91"],["/js/motion.js","3b66b8d757d07f1a4292245564b10c9e"],["/js/next-boot.js","6f1adb0cfcfc79ae7e4c397000075377"],["/js/schemes/muse.js","198f345a8a2ceaf00c6376782ec3e75d"],["/js/schemes/pisces.js","4a67b67ebf4e61b760d60b41a2183bad"],["/js/utils.js","f515ce97773c40a4e977075cd46f358d"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","9857da77088d6b4187d230598ff00fbe"],["/page/3/index.html","c68b669ac7faf081420b016a7f8725e4"],["/sw-register.js","1dbe42b2e9e90411350bcb34dd09db04"],["/tags/RCE/index.html","b8fbb58c12583e6139cd43282634d7e9"],["/tags/bash/index.html","0c98941cadaf5099850c289059850fef"],["/tags/bottle/index.html","bcba867b30f0323756b52ca6c10709a5"],["/tags/c/index.html","ed258b9a9860f8abca0279bb32b2eacc"],["/tags/cmake/index.html","ced51165dc81aaf608e4f7537c4e8cce"],["/tags/deb/index.html","da1aabd8b12d94dd02cf98c90ae550b9"],["/tags/hexo/index.html","7327b9cc0458a34f4614ed3b3b45d0cc"],["/tags/index.html","8b42bef9f5a9f1d79dccee71d9a90513"],["/tags/mobile/index.html","03309d4a85b21ce2ce9aedb30508063d"],["/tags/php/index.html","f4319c4695ab476c7aec5f46bfbb309a"],["/tags/pickle/index.html","8d842987264566e41a09e550e83672d1"],["/tags/python/index.html","a14ddf2d6279df9d02e1283c10c33d19"],["/tags/r/index.html","f3ef53e26a9473cf7f9215806d2a4d44"],["/tags/re/index.html","5be5c84e1002e79c7a7cb12d31126b4b"],["/tags/sqli/index.html","5ed240b7fbed51852b18b49391f2d3f5"],["/tags/upload/index.html","221d4256a64bc7b1ab07910fb7b10f95"],["/tags/vite/index.html","228bfbb7650b25841f63c594da399f37"],["/tags/vscode/index.html","2fcb6bd4ee031a84e0598439ee2f9c41"],["/tags/vue3/index.html","e6fc7bde95ed16464358c2533253a2dc"],["/tags/zip/index.html","968f83997ecd10810e612cb2c1a767ee"],["/tags/初见/index.html","eb9c72a7ac0486a0a0970bdca35e69cc"],["/tags/木大/index.html","993dbc1d0bd4b71835c6d036b9f3aa1b"],["/tags/虚拟机/index.html","24eccc4959ca150b3f9fa1af02656efd"]];
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
