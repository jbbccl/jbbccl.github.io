/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/10/08/环境配置/hexo搭建/hexo-test/index.html","5b7953a83600ccedce93d44bee8730aa"],["/2024/10/08/环境配置/vmware/index.html","f0aaa0cdaa1d0954c7081c57fe9b0ab3"],["/2024/10/13/环境配置/dabian/index.html","771bf53980288aa763b0fbd1951ffedd"],["/2024/10/14/学/sqli-labs/sqli-labs-less_1,4,11/index.html","1154983bc9db3d4a3454186d16252445"],["/2024/10/26/环境配置/vue/vue通过vite代理连接fastapi，从而解决没有Access-Control-Allow-Origin跨域问题/index.html","32a5c5f844e9301c21d35c125527899c"],["/2024/10/28/工具/py爆破zip脚本/index.html","3cbb6287e9f4a86bd767a5eee0236f2f"],["/2024/10/30/学/sqli-labs/sqli-labs-less_7,8/index.html","8644e8fcd6955ef08db07331d7517af0"],["/2024/11/07/环境配置/cmke_vsc_ipv6联机工具，测试版/index.html","989d8c74fe4ed58f5d31b9a23f24b84b"],["/2024/11/07/环境配置/vue/v-for中控制特定元素/index.html","d438dc43a1d090ba9e914f32f62d177d"],["/2024/11/08/学/bottle_反序列化/index.html","689941d6f2df39a561411eabe30affeb"],["/2024/11/08/学/二叉数非递归遍历/index.html","e98a9bea173b60230f484a416f92eded"],["/2024/11/08/工具/进程使用端口记录/index.html","ce3fd1daf75ab30e1bd99157f68cf8db"],["/2024/11/10/环境配置/hexo搭建/hexo-neat不能压缩部分js文件-解决/index.html","d5871fd1708cfa74e22179fa571a21fa"],["/2024/11/11/环境配置/hexo搭建/Hexo的md解析器将半角单引号转换成全角/index.html","ff1745885fb010756e19078d55d2bb42"],["/2024/11/12/学/php_rce/rce_me/index.html","d44d54f36f90d715d6ace220bd85d85e"],["/2024/11/20/学/sqli-labs/sqli-labs-less-1-10/index.html","271d2b884892b846048a94271c26b23d"],["/2024/11/22/学/sqli-labs/sqli-labs-less-11-22/index.html","ec4ef49e1f70bc78dcf8683960460835"],["/2024/11/24/学/sqli-labs/sqli-labs-less-23-27/index.html","af60dde6aa943e219027492731d683ff"],["/2024/11/28/学/sqli-labs/sqli-labs-less-28-37/index.html","08147a2954191e5981ccd38db91ee59a"],["/2024/12/04/学/sqli-labs/sqli-labs-less-35-45/index.html","a7584a47bbfe0f434e19ed234e235b1f"],["/2024/12/07/学/upload-labs/upload-labs-1_5/index.html","66d90cc08a05c63c5eeecf424c4d21fe"],["/2025/04/20/学/sqli-labs/ezsql[xyctf2025]/index.html","a9823ead46cc131fab739a38d6e92dde"],["/2025/05/03/学/php_rce/php_无参rce/index.html","cf59d9e32eee60edf8cefb7a9c929e03"],["/2025/05/10/学/encode/index.html","1a6a05d7366f2a46e6afc5abe4a675f9"],["/2025/05/10/环境配置/安卓调试环境/index.html","ba09cd9204b6fab55792b88e74f58b9b"],["/2025/05/12/环境配置/配置php-debug/index.html","7fffbe3ba0f84e2d353b72fc43667562"],["/2025/08/16/学/SSTI/SSTI-flask-jinja/index.html","8112b3d9f79bc4631fd1972eb9aa100b"],["/archives/2024/10/index.html","d5f960b9fc9b58ed2afebd8e25c29e78"],["/archives/2024/11/index.html","9f9e1ceb6a861e0031012f0f0bd62677"],["/archives/2024/11/page/2/index.html","190597f32c0c1a400d83b691695ccc25"],["/archives/2024/12/index.html","c533a6318253b659d5a09a3c3a0ff33d"],["/archives/2024/index.html","ed9ff5ef9a0f11f2642acbbe0769cfb9"],["/archives/2024/page/2/index.html","67205485e871ca5630b4737b9f188e9b"],["/archives/2024/page/3/index.html","f295d460e0ae6772f4430c323c69e5af"],["/archives/2025/04/index.html","8cf8bf2f0d0931b15cf1bcf2f9c9554a"],["/archives/2025/05/index.html","038a1e167300473ed4fca9e269f13f12"],["/archives/2025/08/index.html","82830190a7ea3a74b3dffee67f657919"],["/archives/2025/index.html","842c904641896663d861c26e97963e29"],["/archives/index.html","669e2c79fae72c02199f3d262c1d1166"],["/archives/page/2/index.html","d508b86117a1ac235f03ebd5ee0b0f85"],["/archives/page/3/index.html","34ba25c371892b430f2b404bdff45c02"],["/categories/RCE/index.html","210788312242c884b149fea5250e13a0"],["/categories/RCE/php/index.html","15f4ded7ee28260b61a45117da89fb99"],["/categories/index.html","e177f815a57438a41187daf4c8e8f2c7"],["/categories/sqli/index.html","db1c00ed6079b1fdd594477681bbc5ee"],["/categories/upload/index.html","55877ec2fab61ac0e514409fef079cab"],["/categories/乱分的/index.html","3158d87749d1f9f05f096469d751af0b"],["/categories/环境/index.html","063cb3b222abd3364fc00485f9f822ac"],["/categories/环境/mobile/index.html","4c4473fde10e218a7940d7f491f6a445"],["/css/main.css","2ae4e3630cba4189baf7d4504fbf90ed"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.png","ec7a8c609cff0ea3c8f719ef379ed273"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/学/php_rce/1.png","43301ac6d960666237380cd07c96a5e7"],["/images/学/php_rce/2.png","a717e7cb7944d91ae39b946d56f8d927"],["/images/学/sqli-labs/20.jpg","1d1d981394f46d9e2d06086d4021b2b9"],["/images/学/sqli-labs/sqli-labs-less_1,4,11.png","5244113df53e42d393b5050e019559a1"],["/images/学/upload-labs/1.1.png","2211acaf339e4e08d2a45a5e5514024d"],["/images/学/upload-labs/pass-2.1.png","3e19419a4ae632c7f2313cf86e4f2c8c"],["/images/环境配置/hexo-neat/1.jpg","e20f70d47b59e1ff149a26dc9fffe577"],["/images/环境配置/hexo-neat/2.jpg","bf9bb7ce053f8fa2eb93506ba52c253b"],["/images/环境配置/ipv6connecttool/1.jpg","7764cdef9499b85a89281d9f68200c60"],["/images/环境配置/ipv6connecttool/2.jpg","b558fb722bd65f999f1baadf134896fc"],["/images/环境配置/ipv6connecttool/3.jpg","9aef281ce55e85869733acf624d904d2"],["/images/环境配置/ipv6connecttool/4.jpg","1c1be0ed45b13affbef1e7bea15807c4"],["/images/环境配置/ipv6connecttool/5.jpg","1594bddd580cf6f10eb05f3e417e3e5b"],["/images/环境配置/安卓调试环境/Use_sorce.png","3351cfab8c5beecded4cc6a17ccf5fdd"],["/images/环境配置/安卓调试环境/ida_so.png","a62e89c26176c179114999dce68bb31b"],["/images/环境配置/安卓调试环境/jadx_dbg.png","ab3b090c7244c6bf48ca8a2eb516b784"],["/index.html","90e6713e692695ca5f63e1e46c5600af"],["/js/algolia-search.js","0342478e0ebf1a9d06be655e8e46ba7e"],["/js/bookmark.js","49246c1f08944a417dd56b0c3661c922"],["/js/local-search.js","cd2bf989de9141da679b394fcd03d9cb"],["/js/motion.js","c482685d7aad9a512211b6c742e11656"],["/js/next-boot.js","9a02fc326e1819f859b2f534bf69681b"],["/js/schemes/muse.js","d14857fd4f96706957365117236f2222"],["/js/schemes/pisces.js","538aa56c2b894a80e90019ea7711e9f8"],["/js/utils.js","5ac00d352b5700fefc8178f7ad656e84"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","6add42904d70a656d4820541172b5255"],["/page/3/index.html","5077d1a3be978d7dd9d73f0fd27bdd7d"],["/sw-register.js","e2f6ec7a870e3e627d46098787296784"],["/tags/RCE/index.html","e004b58289cfd6491d81ef21906d1b8d"],["/tags/SSTI/index.html","6fa952f8eb28e8ab73e81c8f8d8004a8"],["/tags/bash/index.html","7450b6034f7bfceae1284b81bc029d9a"],["/tags/bottle/index.html","90826a2c5c0d3b12555c69116f260184"],["/tags/c/index.html","14e3dc56cb622765953360b876f33e77"],["/tags/cmake/index.html","b9d976ae43aebdab478caa44878e58fa"],["/tags/deb/index.html","a0af8f93314295e4896be280ed5a6c4e"],["/tags/hexo/index.html","df5ccdee015fc32a92491d9c916f5188"],["/tags/index.html","56fc701c1b2112ca25c382a8b5ed2b0b"],["/tags/mobile/index.html","b76b6b8866ba304caa089565baf3443b"],["/tags/php/index.html","c37113c12131f1f6cf515583a28f43dd"],["/tags/pickle/index.html","f038e8aca395116c4bf212c33a2f085a"],["/tags/py/index.html","df6a518b3730083d182d39fb0465654a"],["/tags/python/index.html","a53713a2365ed500251d5dc7c191bf1f"],["/tags/re/index.html","213805aab516719dab71d8e367d2e965"],["/tags/sqli/index.html","500c7e550c05d2292ca792d9265ff58f"],["/tags/upload/index.html","a519ac4b433aa2e9dad6711a4af5e32b"],["/tags/vite/index.html","19c1d5a6cedd7494bc7b8003c767c9c1"],["/tags/vscode/index.html","18fa8f90b35cd617aca4d1c66741f721"],["/tags/vue3/index.html","44c2c2a10f65afec4919ca940b4aab89"],["/tags/zip/index.html","8ffe660c345e3f3b66f3c578382becd1"],["/tags/初见/index.html","8ad438bf769c6723cb93997759f9c0be"],["/tags/木大/index.html","db28fb5ea340cb44a1805cff2df1a9dc"],["/tags/虚拟机/index.html","4191e2590788783582cf73b5d1b17ea0"]];
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
