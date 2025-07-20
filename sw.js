/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/10/08/环境配置/hexo搭建/hexo-test/index.html","7595ee15ad2b10a176c224c8a21e5ff7"],["/2024/10/08/环境配置/vmware/index.html","382baafc37ade369ad9b35b7c3c48683"],["/2024/10/13/环境配置/dabian/index.html","720af456be982cd2574ed4c23d4b937c"],["/2024/10/14/sqli-labs/sqli-labs-less_1,4,11/index.html","181f55c1a52af692457264bf04b1c432"],["/2024/10/26/环境配置/vue/vue通过vite代理连接fastapi，从而解决没有Access-Control-Allow-Origin跨域问题/index.html","4027fe3e332506dbca89f8951c1d8601"],["/2024/10/28/工具/py爆破zip脚本/index.html","cad5587cf8cd617943f1ff0f2f7dad06"],["/2024/10/30/sqli-labs/sqli-labs-less_7,8/index.html","e1a073d0ebfffa6ff395c6b521d558ef"],["/2024/11/07/环境配置/cmke_vsc_ipv6联机工具，测试版/index.html","86bbea63d5220881397eac65c7bffbc7"],["/2024/11/07/环境配置/vue/v-for中控制特定元素/index.html","f3b32184278eef94ecfa25839eabb574"],["/2024/11/08/学/二叉数非递归遍历/index.html","d2b650f7f9b5bcaec0b7543867685922"],["/2024/11/08/工具/进程使用端口记录/index.html","0bedeb6a20cb237f1ef7d1c4c60017a5"],["/2024/11/10/环境配置/hexo搭建/hexo-neat不能压缩部分js文件-解决/index.html","19392796f40657cc386ae7c0cec10e8c"],["/2024/11/11/环境配置/hexo搭建/Hexo的md解析器将半角单引号转换成全角/index.html","489c8e9cc73761b9042047271b60f8ba"],["/2024/11/12/学/php_rce/rce_me/index.html","c1cdfaeb1e2b614b8ac46f5051157f43"],["/2024/11/20/sqli-labs/sqli-labs-less-1-10/index.html","2960a5682990d6aba9df6215342046b8"],["/2024/11/22/sqli-labs/sqli-labs-less-11-22/index.html","b2b74416101f24b914eb871957f05db9"],["/2024/11/24/sqli-labs/sqli-labs-less-23-27/index.html","27e78716d4630bd8d0c863f5c118bce1"],["/2024/11/28/sqli-labs/sqli-labs-less-28-37/index.html","1f23f1a0aedfb1eb898fb5e2b71f55cf"],["/2024/12/04/sqli-labs/sqli-labs-less-35-45/index.html","99f30a6a8e1787834b9e1cc7dc23382c"],["/2024/12/07/upload-labs/upload-labs-1_5/index.html","cdccbccf2d2f262fcb5a3434fb1d9e7a"],["/2025/03/12/环境配置/配置php-debug/index.html","66e37a55b13280b676c6d55e0135fe0c"],["/2025/03/15/学/crt/index.html","47fb0359792518f2e36b66de31fe3e2a"],["/2025/04/20/sqli-labs/ezsql[xyctf2025]/index.html","c70c081d1c30a1d2b6872fb30a04e4df"],["/2025/05/02/学/bottle_反序列化/index.html","9772b1e4e2e0bb8611031739b72d25df"],["/2025/05/03/学/php_rce/php_无参rce/index.html","46bb69b1df3f7273d43f3d94fdd235b3"],["/2025/05/10/学/encode/index.html","667a74b4eed07398f71205068f8c535b"],["/2025/05/10/环境配置/安卓调试环境/index.html","90cf4e1807ad1a32c2e5784c238582d4"],["/2025/07/20/学/SSTI_jinja2/index.html","7edf2ce23dff8a886b314a6aeb20b566"],["/archives/2024/10/index.html","ac3eb5556a6eed91da50d3e71a0cdcef"],["/archives/2024/11/index.html","10fcffb81b30dcd8f9c5c6e12b1fc873"],["/archives/2024/11/page/2/index.html","bbf71fb239afa9985d3c3a105f37a8b4"],["/archives/2024/12/index.html","01496616225924bf28670279bf6e3436"],["/archives/2024/index.html","24326e835439271051cc99d1c9e01cda"],["/archives/2024/page/2/index.html","b51a88fa3c0a56df1bd212ac7b85d453"],["/archives/2025/03/index.html","cc0cb32808956df9064e91b9f1fd6438"],["/archives/2025/04/index.html","ef082bdc629633de61352ed4617f4e43"],["/archives/2025/05/index.html","196a48835386528713cc5c95c2504d3c"],["/archives/2025/07/index.html","b192ad35ab81c60b99a701348e56c4dd"],["/archives/2025/index.html","503bba1205702ed6cc11d760fbeaca43"],["/archives/index.html","ce554b05da14f7d4f356a394d29bbbdc"],["/archives/page/2/index.html","961a53c2d9308277bcc71314e79b5178"],["/archives/page/3/index.html","7e487507b0d40f3065c32914b57bb14e"],["/categories/RCE/index.html","1d4276fc9f336bdd2a1efd668eb11237"],["/categories/RCE/php/index.html","d05ee25d048db1e93117ae114472efa6"],["/categories/index.html","8b85046276f00282e3c1b935cfce2f9a"],["/categories/sqli/index.html","287e4f9c4e315b9a6b3866dc7d7dc1dd"],["/categories/upload/index.html","613a39b150dcf4b93879495400e5c590"],["/categories/乱分的/index.html","064aa07a27a13ce80b3a2b719270e474"],["/categories/环境/index.html","149e52ca09fbf6443d2ac74842b27b7f"],["/categories/环境/mobile/index.html","ea03a44bb9fa207bfa7f551f6a03af50"],["/css/main.css","3870e253d0ec8f97e5bd33a90e0a20d4"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.png","ec7a8c609cff0ea3c8f719ef379ed273"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/sqli-labs/20.jpg","1d1d981394f46d9e2d06086d4021b2b9"],["/images/sqli-labs/sqli-labs-less_1,4,11.png","5244113df53e42d393b5050e019559a1"],["/images/upload-labs/1.1.png","2211acaf339e4e08d2a45a5e5514024d"],["/images/upload-labs/pass-2.1.png","3e19419a4ae632c7f2313cf86e4f2c8c"],["/images/学/php_rce/1.png","43301ac6d960666237380cd07c96a5e7"],["/images/学/php_rce/2.png","a717e7cb7944d91ae39b946d56f8d927"],["/images/环境配置/hexo-neat/1.jpg","e20f70d47b59e1ff149a26dc9fffe577"],["/images/环境配置/hexo-neat/2.jpg","bf9bb7ce053f8fa2eb93506ba52c253b"],["/images/环境配置/ipv6connecttool/1.jpg","7764cdef9499b85a89281d9f68200c60"],["/images/环境配置/ipv6connecttool/2.jpg","b558fb722bd65f999f1baadf134896fc"],["/images/环境配置/ipv6connecttool/3.jpg","9aef281ce55e85869733acf624d904d2"],["/images/环境配置/ipv6connecttool/4.jpg","1c1be0ed45b13affbef1e7bea15807c4"],["/images/环境配置/ipv6connecttool/5.jpg","1594bddd580cf6f10eb05f3e417e3e5b"],["/images/环境配置/安卓调试环境/Use_sorce.png","3351cfab8c5beecded4cc6a17ccf5fdd"],["/images/环境配置/安卓调试环境/ida_so.png","a62e89c26176c179114999dce68bb31b"],["/images/环境配置/安卓调试环境/jadx_dbg.png","ab3b090c7244c6bf48ca8a2eb516b784"],["/index.html","62b6676783a509c1e1d6bbf39594a494"],["/js/algolia-search.js","4a62ead11973b0d2529897f2fe4e052b"],["/js/bookmark.js","c1b758ddba8859b02df17dc97f2e4e17"],["/js/local-search.js","40d5f44f5476dd99ff73a5462b1bca91"],["/js/motion.js","3b66b8d757d07f1a4292245564b10c9e"],["/js/next-boot.js","6f1adb0cfcfc79ae7e4c397000075377"],["/js/schemes/muse.js","198f345a8a2ceaf00c6376782ec3e75d"],["/js/schemes/pisces.js","4a67b67ebf4e61b760d60b41a2183bad"],["/js/utils.js","f515ce97773c40a4e977075cd46f358d"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","da2d09cdc1fbe3d9b313ec6a63197c25"],["/page/3/index.html","cf90971a75422fdeb1e7b9d34e1cffc7"],["/sw-register.js","a6660234802b1315ed6c8bdebb3ae023"],["/tags/RCE/index.html","71b5780dfda01936584a603a4b6a0b74"],["/tags/bash/index.html","987715a8207dd9eacd462fa29dd0e3b1"],["/tags/bottle/index.html","3e34ce581fb08cc828f4790fa8c7493d"],["/tags/c/index.html","502400333409afcbcf696155f5b0dd15"],["/tags/cmake/index.html","f494d41f8db701269b64329eefc3fcff"],["/tags/deb/index.html","edd8b0e7c964f7255bd2dc3564ad1e4c"],["/tags/hexo/index.html","2595d874edf309143b2d8ee5f8874cb4"],["/tags/index.html","06bd00d9aa54155ac599bcb763197846"],["/tags/mobile/index.html","cddcda424618c2e34b2a1db94979863c"],["/tags/php/index.html","7cc177c6cd6980689b8a78dc2b6460d3"],["/tags/pickle/index.html","549406427d1ad1e4d099d4a7539c6277"],["/tags/python/index.html","9511618966b9e72980f1d2b03ac9dd0a"],["/tags/r/index.html","1ed84b9059757e3e5cf6b3cbb7f3a935"],["/tags/re/index.html","c1d81fe889f5f85c7c358b3659c4d796"],["/tags/sqli/index.html","eb851c4a180ded381ce9c491737adcbd"],["/tags/upload/index.html","0686f566b0dbe05d2c46f8879a38b273"],["/tags/vite/index.html","5168ae9eece5d95b84cd2019294b18c6"],["/tags/vscode/index.html","62fff0eff4e3365b0ed885b666e71a55"],["/tags/vue3/index.html","e420824a6355b853002332b5ab0d10cf"],["/tags/zip/index.html","e68801436138506e4dce4822658fdbde"],["/tags/初见/index.html","b4c22c82730b12525e95789f8277a717"],["/tags/木大/index.html","9ab7ab5843f24b87179ccb86330b8ffc"],["/tags/虚拟机/index.html","322eaad7bcbcab80f218583e4cca8b65"]];
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
