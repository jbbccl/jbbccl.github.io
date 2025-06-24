/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/10/08/环境配置/hexo搭建/hexo-test/index.html","6ea0b16ae8a210d7828d3f0c8f5503ef"],["/2024/10/08/环境配置/vmware/index.html","20fa7215e905e3d5ec6053ad5637d960"],["/2024/10/13/环境配置/dabian/index.html","aabad459ee4c8fd36c5feee436f19d62"],["/2024/10/14/sqli-labs/sqli-labs-less_1,4,11/index.html","72cbefdca2e92529646d7e0442be64e7"],["/2024/10/26/环境配置/vue/vue通过vite代理连接fastapi，从而解决没有Access-Control-Allow-Origin跨域问题/index.html","18404a310073fd8ba2bd2f81eeacfee8"],["/2024/10/28/工具/py爆破zip脚本/index.html","b01ed58478174e86763533df3ea4c284"],["/2024/10/30/sqli-labs/sqli-labs-less_7,8/index.html","f4a53c77c3c395ac1b87302816ec3384"],["/2024/11/07/环境配置/cmke_vsc_ipv6联机工具，测试版/index.html","be20ebc09e415a802f5acaf46d5aadc8"],["/2024/11/07/环境配置/vue/v-for中控制特定元素/index.html","df08d1724d3007a45b8ca4afceb6d31f"],["/2024/11/08/学/bottle_反序列化/index.html","e037850310de44b3c8654963eeb082d8"],["/2024/11/08/学/二叉数非递归遍历/index.html","24802c9800a1a17c91e907e736bc2438"],["/2024/11/08/工具/进程使用端口记录/index.html","2649ff694e8b0c648e183b869bb337b3"],["/2024/11/10/环境配置/hexo搭建/hexo-neat不能压缩部分js文件-解决/index.html","276ddeac6eda6b9560c76c3176a32d49"],["/2024/11/11/环境配置/hexo搭建/Hexo的md解析器将半角单引号转换成全角/index.html","4f02c03ecd470a75814e4f2028d777bd"],["/2024/11/12/学/php_rce/rce_me/index.html","833e00e9442e2f67911ad5e8a76edce8"],["/2024/11/20/sqli-labs/sqli-labs-less-1-10/index.html","e8e3b02c8958051c522849502558f9d3"],["/2024/11/22/sqli-labs/sqli-labs-less-11-22/index.html","db2b54a859f245a6dc630732a594bc2f"],["/2024/11/24/sqli-labs/sqli-labs-less-23-27/index.html","fa35d99b7713a53d827679b67cff8c91"],["/2024/11/28/sqli-labs/sqli-labs-less-28-37/index.html","819c14e750eae5dcbb9ddabe18f8d67e"],["/2024/12/04/sqli-labs/sqli-labs-less-35-45/index.html","5e617f5aeee5057d71ec4ba5bb8fd8a3"],["/2024/12/07/upload-labs/upload-labs-1_5/index.html","e8d558afa954cc58f4b861223f614f86"],["/2025/02/07/环境配置/qemu/kvm-win10/index.html","26c7bbb331de9bc7c09b7f7bd8916328"],["/2025/03/15/学/crt/index.html","557261958bb32593e9835de8787142f2"],["/2025/04/20/sqli-labs/ezsql[xyctf2025]/index.html","f2bcef251c90b55ad617d4b7196eb80e"],["/2025/05/03/学/php_rce/php_无参rce/index.html","d02d387da889fd00c0b274b94e5172fa"],["/2025/05/10/学/encode/index.html","1359d1b8bab8d52cedbc280841603e6e"],["/2025/05/10/环境配置/安卓调试环境/index.html","a12096258e8bae2dddb82182b6febb57"],["/2025/05/12/环境配置/配置php-debug/index.html","a92ded82e91a8ecbd2c58547f701e698"],["/archives/2024/10/index.html","2d8e8715aebb6429b19e7a3781fa74bc"],["/archives/2024/11/index.html","41a1fc50cdcc0db739dd5451ba78fb27"],["/archives/2024/11/page/2/index.html","83f495173fe87d94d1956b46e52962c5"],["/archives/2024/12/index.html","56958df2ad54c8a475f55b6f4455f4d2"],["/archives/2024/index.html","786d3b6999be4e08b4334c8e9bfb2d76"],["/archives/2024/page/2/index.html","57af634a6a112d6d238070e4dc33065c"],["/archives/2024/page/3/index.html","af5599757e646f01a6ec150a120c7179"],["/archives/2025/02/index.html","2e0a7aa886067e8749a8575a9485fad8"],["/archives/2025/03/index.html","ae9514a787d6fa5f66c415c04e65d4f3"],["/archives/2025/04/index.html","06188f76f7b7ec336db2479c8beeabf4"],["/archives/2025/05/index.html","c2c8dc0bc85b272fd18e9ad5fdc8ad32"],["/archives/2025/index.html","7cf277637d5e08d1531ec57ab87630b0"],["/archives/index.html","519704dd5e8afda225d4a0c81a3b42a9"],["/archives/page/2/index.html","c4467bbd87168887007a099ab0d141cf"],["/archives/page/3/index.html","aa0cf3554732ff6bcb423b3621001013"],["/categories/RCE/index.html","1e7e8ed19549425bbfdcbf0945e53b97"],["/categories/RCE/php/index.html","0b9157d67f031f76f93b848d5aaae2d5"],["/categories/index.html","115303dfd3fda8f7e19e10ff84d9be85"],["/categories/sqli/index.html","fbebf21edbea4a5f17b7262867ab81cf"],["/categories/upload/index.html","ad1ada1b4ae58a7bfdc053e5f54fcb0a"],["/categories/乱分的/index.html","ef47a20c76b76549630443d8d720b18d"],["/categories/环境/index.html","718a3fc5fec4d0fadb1d4626463b0bdc"],["/categories/环境/mobile/index.html","e637faae697b3fb3af6c7692956c9b8c"],["/css/main.css","e4e994f21424fdcb28d536f2134be5ea"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.png","ec7a8c609cff0ea3c8f719ef379ed273"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/sqli-labs/20.jpg","1d1d981394f46d9e2d06086d4021b2b9"],["/images/sqli-labs/sqli-labs-less_1,4,11.png","5244113df53e42d393b5050e019559a1"],["/images/upload-labs/1.1.png","2211acaf339e4e08d2a45a5e5514024d"],["/images/upload-labs/pass-2.1.png","3e19419a4ae632c7f2313cf86e4f2c8c"],["/images/学/php_rce/1.png","43301ac6d960666237380cd07c96a5e7"],["/images/学/php_rce/2.png","a717e7cb7944d91ae39b946d56f8d927"],["/images/环境配置/hexo-neat/1.jpg","e20f70d47b59e1ff149a26dc9fffe577"],["/images/环境配置/hexo-neat/2.jpg","bf9bb7ce053f8fa2eb93506ba52c253b"],["/images/环境配置/ipv6connecttool/1.jpg","7764cdef9499b85a89281d9f68200c60"],["/images/环境配置/ipv6connecttool/2.jpg","b558fb722bd65f999f1baadf134896fc"],["/images/环境配置/ipv6connecttool/3.jpg","9aef281ce55e85869733acf624d904d2"],["/images/环境配置/ipv6connecttool/4.jpg","1c1be0ed45b13affbef1e7bea15807c4"],["/images/环境配置/ipv6connecttool/5.jpg","1594bddd580cf6f10eb05f3e417e3e5b"],["/images/环境配置/安卓调试环境/Use_sorce.png","3351cfab8c5beecded4cc6a17ccf5fdd"],["/images/环境配置/安卓调试环境/ida_so.png","a62e89c26176c179114999dce68bb31b"],["/images/环境配置/安卓调试环境/jadx_dbg.png","ab3b090c7244c6bf48ca8a2eb516b784"],["/index.html","5d1c2ea50c2fdf8b9545e5daa034fd50"],["/js/algolia-search.js","4a62ead11973b0d2529897f2fe4e052b"],["/js/bookmark.js","c1b758ddba8859b02df17dc97f2e4e17"],["/js/local-search.js","40d5f44f5476dd99ff73a5462b1bca91"],["/js/motion.js","3b66b8d757d07f1a4292245564b10c9e"],["/js/next-boot.js","6f1adb0cfcfc79ae7e4c397000075377"],["/js/schemes/muse.js","198f345a8a2ceaf00c6376782ec3e75d"],["/js/schemes/pisces.js","4a67b67ebf4e61b760d60b41a2183bad"],["/js/utils.js","f515ce97773c40a4e977075cd46f358d"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","3983f38ed608aa02f2c37c790b14522f"],["/page/3/index.html","572aa267a917e764510ff4a49301e926"],["/sw-register.js","1d5ae5037514d6fa2ce4ffc5c82cd27f"],["/tags/RCE/index.html","846926ca3d0aed6a560479156d87b9ff"],["/tags/bash/index.html","680bf2d540e49a883e09cb1ac5620a7d"],["/tags/bottle/index.html","1f3b9718aece1bc1d72b8f1d28d5746f"],["/tags/c/index.html","a21b79c4d276102bc6766367be5ed21b"],["/tags/cmake/index.html","48d3066bd82595bba4c12c2ef0dc8583"],["/tags/deb/index.html","f1c95047c63e28a6226e9bf34056f05b"],["/tags/hexo/index.html","f3723534bcd4d05a12d5267ca30a383f"],["/tags/index.html","5080378f7d61685229c7859774141275"],["/tags/mobile/index.html","a7b041c1981a728e18b7870fb1d9df5b"],["/tags/php/index.html","840e6e82f4decc6a97567fa31afd574a"],["/tags/pickle/index.html","24f63e6bdfd64aa72d781ba51c02d05a"],["/tags/python/index.html","c0ade521ed0af30e9c957e4112665b8a"],["/tags/qemu/index.html","550cd049b73cdb777b542308c9b2c34d"],["/tags/re/index.html","d3720e26b199683d2abc59546d252cfb"],["/tags/sqli/index.html","20eb9ab5b43016759e4cd597e6908188"],["/tags/upload/index.html","6f4b324af3c138b90c681f502e8b989c"],["/tags/vite/index.html","40bfaa8b70f0ffb5c92d725d50895591"],["/tags/vscode/index.html","9d431660684e35e8b8ccdf853e391257"],["/tags/vue3/index.html","66859ad01f60410dc71bbf8ae03fc7f1"],["/tags/zip/index.html","8916e2b4d0f3abf4601e6de857d8c4e7"],["/tags/初见/index.html","728d5a367c5b50b7bb0f04a55e2109c6"],["/tags/木大/index.html","72b6e30f277e481f33e6c791af1e58f3"],["/tags/虚拟机/index.html","96bd6c9965faaae3785d525d9804ec01"]];
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
