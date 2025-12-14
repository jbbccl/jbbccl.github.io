/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/10/08/enviroment/hexo搭建/hexo-test/index.html","772536ca8c7980ad59e86c1d4aba9781"],["/2024/10/08/enviroment/vmware/index.html","f1bfab67b37e68d363f5031af2a4f209"],["/2024/10/13/enviroment/dabian/index.html","4e0b1cf4546c3c1024fbc61fe3e0ce9d"],["/2024/10/14/web/sqli-labs/sqli-labs-less_1,4,11/index.html","954a260c2360f725b6933f70490dc82c"],["/2024/10/26/enviroment/vue/vue通过vite代理连接fastapi，从而解决没有Access-Control-Allow-Origin跨域问题/index.html","bd0dbf7e7c470d0772634f5b5c3646ae"],["/2024/10/28/misc/py爆破zip脚本/index.html","56a5bd8ba747d6fa15dd47f6a7663352"],["/2024/10/30/web/sqli-labs/sqli-labs-less_7,8/index.html","8dba000cf2685320e2fc1630904f6c00"],["/2024/11/07/enviroment/cmke_vsc_ipv6联机工具，测试版/index.html","673310a88210ff1a3bebf8c9deeb24f9"],["/2024/11/07/enviroment/vue/v-for中控制特定元素/index.html","fb6506b696aa72aa0e763ad4f1c81cc8"],["/2024/11/08/misc/二叉数非递归遍历/index.html","cc4a38dfef0635118b25877b55d654ae"],["/2024/11/08/misc/进程使用端口记录/index.html","bbc44ca0e735ebf010fdcb12cd868f35"],["/2024/11/08/web/python/unser_bottle_反序列化/index.html","f3d740c3d1265179ee0e04e55757e4f9"],["/2024/11/10/enviroment/hexo搭建/hexo-neat不能压缩部分js文件-解决/index.html","45e8fc35775725a316447e3f6ba1ce99"],["/2024/11/11/enviroment/hexo搭建/Hexo的md解析器将半角单引号转换成全角/index.html","01c36115515a3448f582d183b5787163"],["/2024/11/12/web/php/rce_me/index.html","524b470a719ec1e76cd4466b8862d0c8"],["/2024/11/20/web/sqli-labs/sqli-labs-less-1-10/index.html","85478e7d1022625622484b13f2b34634"],["/2024/11/22/web/sqli-labs/sqli-labs-less-11-22/index.html","ab2fbcc4bb0ff6ece11dabcbc3fbd78d"],["/2024/11/24/web/sqli-labs/sqli-labs-less-23-27/index.html","2436321ad25ce7d20240454d745f48c5"],["/2024/11/28/web/sqli-labs/sqli-labs-less-28-37/index.html","9580c84e8b4af2cde82b5e1c36709aef"],["/2024/12/04/web/sqli-labs/sqli-labs-less-35-45/index.html","d5f15426769102e93460cb190c52021f"],["/2024/12/07/web/upload-labs/upload-labs/index.html","fb5a42cdd5d832e28063f5adbcebc6a7"],["/2025/02/07/enviroment/qemu/kvm-win10/index.html","ed950a530a60afa2f4ef7d85cd7d2538"],["/2025/04/20/web/sqli-labs/ezsql[xyctf2025]/index.html","c9b973b25d5f10aa62ca90d4c518fb92"],["/2025/05/03/web/php/rce_php_无参rce/index.html","cc1a6d6688e8bbadd59b10006bcc2929"],["/2025/05/10/enviroment/安卓调试环境/index.html","6fedc28b81bc2f0a24dffdb5d9976a5b"],["/2025/05/10/misc/encode/index.html","689277d996a4fc29434258317efe0604"],["/2025/05/12/enviroment/配置php-debug/index.html","9eef87bc293cb960023ccacdc13d6021"],["/2025/08/16/web/python/SSTI-flask-jinja/index.html","ab85f98f4fdcbf88898d3dea04121f9d"],["/2025/08/22/enviroment/intel单核显SR-IOV虚拟化直通/index.html","d02984f548ddcaa7b6f27af939705886"],["/2025/10/23/web/php/rce_php长度限制_字符限制/index.html","71cd20d9b43a397e2d7aa3b768f55397"],["/2025/10/29/web/php/pop_self/index.html","25363ab95f79a76774633d2ea7a797fb"],["/2025/12/12/enviroment/e/index.html","219c8d6de1ca3cd316fbbf42fffb5a19"],["/archives/2024/10/index.html","bbc7918b4f7dc357514d663eae5f8cb7"],["/archives/2024/11/index.html","019a966ebf349c52e812a44e5d2f0e49"],["/archives/2024/11/page/2/index.html","a48791e12e453ccdac3db6230b1ad3c8"],["/archives/2024/12/index.html","3cb69bbb1f1dbccf5f38ec8345f231bd"],["/archives/2024/index.html","f14302c8404d8185e6d6382cc0658aa1"],["/archives/2024/page/2/index.html","12b83e67d3d7e56816746e08f5acf59c"],["/archives/2024/page/3/index.html","9971a7717e7d3ec1164574963e448c42"],["/archives/2025/02/index.html","f8c19f50796b7290c23be9c7444cfb29"],["/archives/2025/04/index.html","3411a5c96f52930e6fa47d4922e493ed"],["/archives/2025/05/index.html","0dc6b6855d18801a9ec038caa09d3da4"],["/archives/2025/08/index.html","57602bc59c0428d356aa8b3c3a3537ec"],["/archives/2025/10/index.html","2ea4bb65f3f947357808911523f5efc3"],["/archives/2025/12/index.html","85c7c75cfac60235cf0e97ee55b52826"],["/archives/2025/index.html","79e62890872390cd4b6d1f602eed1d2d"],["/archives/2025/page/2/index.html","a19d6c031ca1046a0d822683373603cc"],["/archives/index.html","9ea3d2d7aa8a0acf0c50ec63a58daff1"],["/archives/page/2/index.html","0be902c63bddd847b4e3e878af06ff7a"],["/archives/page/3/index.html","1a45f33cc4875c56cc39ec9a4b312553"],["/archives/page/4/index.html","f95559fc8416409af92a4944538c0072"],["/categories/algo/index.html","d045cb98baa94e7d5428aa90e23e1f15"],["/categories/index.html","729942342ce6bf98743d7421265dfb1b"],["/categories/misc/index.html","3aca4cd67b52dd3875f025ecc7bd23b8"],["/categories/web/index.html","65be0a1b4b0214ee13d5bf5f5737e6e6"],["/categories/web/page/2/index.html","44ecae5fa2407daff2d5e04ef43663a6"],["/categories/web/php/RCE/index.html","f7422950c1027c96fba08e8052af051e"],["/categories/web/php/index.html","442edcef7eaec5c38b914d9a50138b11"],["/categories/web/php/unserialize/index.html","ab180ac1aae156418cb163548a52196d"],["/categories/web/python/SSTI/index.html","421f706eb9dcd69131d924da0583610e"],["/categories/web/python/index.html","34c1d3f5f3149e633ae07fad4913bc4d"],["/categories/web/python/unserialize/index.html","86b0bfb99af1eb06f78bfddbfbc3c729"],["/categories/web/python/unserialize/pickle/index.html","9e83e3ab79d1de625fad06f8f4c7d8b2"],["/categories/web/sqli/index.html","a910c07e3364e95b6dc6e9dff900f154"],["/categories/web/upload/index.html","1c701099846f0e47cd2d7d3cb35adb0a"],["/categories/环境/cmake/index.html","4ce6265dc8a551e87ee802231b05c543"],["/categories/环境/dotfile/index.html","2ec41e44b11141d6cae8c60bff6b3e16"],["/categories/环境/hexo/index.html","bac165defbdd91eca60c790daf665989"],["/categories/环境/index.html","e268fe65f5d05cda03ffb1ef17b07fc6"],["/categories/环境/mobile/index.html","78acd266e726b8c52c6478ebe1c0e027"],["/categories/环境/page/2/index.html","4daf119d94f0f42bb5c7b9fd4be71b85"],["/categories/环境/php/index.html","0e6ae7dd8717f45767753f1e1814aadd"],["/categories/环境/vue3/index.html","eff0155f58c40f35678e5f3dfd502fa2"],["/categories/环境/虚拟化/index.html","61a4efdca27a5d5d03acbbe5f74befd1"],["/css/main.css","2f6140ed2d5f39674c82ce444ce7a255"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.png","ec7a8c609cff0ea3c8f719ef379ed273"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/学/php_rce/1.png","43301ac6d960666237380cd07c96a5e7"],["/images/学/php_rce/2.png","a717e7cb7944d91ae39b946d56f8d927"],["/images/学/sqli-labs/20.jpg","1d1d981394f46d9e2d06086d4021b2b9"],["/images/学/sqli-labs/sqli-labs-less_1,4,11.png","5244113df53e42d393b5050e019559a1"],["/images/学/upload-labs/1.1.png","2211acaf339e4e08d2a45a5e5514024d"],["/images/学/upload-labs/pass-2.1.png","3e19419a4ae632c7f2313cf86e4f2c8c"],["/images/环境配置/hexo-neat/1.jpg","e20f70d47b59e1ff149a26dc9fffe577"],["/images/环境配置/hexo-neat/2.jpg","bf9bb7ce053f8fa2eb93506ba52c253b"],["/images/环境配置/ipv6connecttool/1.jpg","7764cdef9499b85a89281d9f68200c60"],["/images/环境配置/ipv6connecttool/2.jpg","b558fb722bd65f999f1baadf134896fc"],["/images/环境配置/ipv6connecttool/3.jpg","9aef281ce55e85869733acf624d904d2"],["/images/环境配置/ipv6connecttool/4.jpg","1c1be0ed45b13affbef1e7bea15807c4"],["/images/环境配置/ipv6connecttool/5.jpg","1594bddd580cf6f10eb05f3e417e3e5b"],["/images/环境配置/安卓调试环境/Use_sorce.png","3351cfab8c5beecded4cc6a17ccf5fdd"],["/images/环境配置/安卓调试环境/ida_so.png","a62e89c26176c179114999dce68bb31b"],["/images/环境配置/安卓调试环境/jadx_dbg.png","ab3b090c7244c6bf48ca8a2eb516b784"],["/index.html","351cd491fe83eae46d6130d8f4747d31"],["/js/algolia-search.js","0342478e0ebf1a9d06be655e8e46ba7e"],["/js/bookmark.js","49246c1f08944a417dd56b0c3661c922"],["/js/local-search.js","cd2bf989de9141da679b394fcd03d9cb"],["/js/motion.js","c482685d7aad9a512211b6c742e11656"],["/js/next-boot.js","9a02fc326e1819f859b2f534bf69681b"],["/js/schemes/muse.js","d14857fd4f96706957365117236f2222"],["/js/schemes/pisces.js","538aa56c2b894a80e90019ea7711e9f8"],["/js/utils.js","5ac00d352b5700fefc8178f7ad656e84"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","b1e2a3a3fcb73ce4491722e6d399048f"],["/page/3/index.html","bf3467f52477925550ada30657137a0d"],["/page/4/index.html","18551f7c43472868d86b1d49fa9cd25c"],["/sw-register.js","96a1ad1696441f40e2954aea3201fe9f"],["/tags/RCE/index.html","0d3e494b7727d6fb4cb3b3efb8cb353a"],["/tags/SSTI/index.html","fec8c91049032024783449083bd8eabb"],["/tags/bash/index.html","90a4f5d2eafe64bcdd506ab451de32d7"],["/tags/bottle/index.html","3db20c8ebee37a3275840eed7c42abf8"],["/tags/c/index.html","b22d37a3d115cf594aaecaafccd878ba"],["/tags/cmake/index.html","79e71b9d42b053c4b7c73865f43b6ed1"],["/tags/deb/index.html","81cb790c9284d0c70bb15202f1f91239"],["/tags/dotfile/index.html","d77a7ff62f8e370f32c01add01a62f46"],["/tags/hexo/index.html","d752a5315abfdf379596bf645f46543a"],["/tags/index.html","bd9ead4b08007aaabfabf20537c2288a"],["/tags/mobile/index.html","dfe59ad9d15528b556fba4044bb6d35b"],["/tags/php/index.html","c61333e0f2c6e1fafe11bf58521b92fa"],["/tags/pickle/index.html","4f1b4c83c258d61dfe4a4143c4b17478"],["/tags/pop/index.html","3a2a292d2df7555035afc69f59add7c1"],["/tags/python/index.html","aef1961b16cb131cc8e00e3f3dfd12cf"],["/tags/qemu/index.html","b8f05e8cdbb53128390048c4d8a6c7e4"],["/tags/rce/index.html","99c0cdbb582f366e5eac860a4dda5175"],["/tags/re/index.html","715cbca1402838bce147abc7e25eaa17"],["/tags/sqli/index.html","ee325c71fc825586934ece94277a6523"],["/tags/unserialize/index.html","c1d71616eb4af55c01fadcee496880a9"],["/tags/upload/index.html","255019dbef20f072d02eba3c7ab77454"],["/tags/vite/index.html","02d39a5723fbd5447f218a90f9d8633d"],["/tags/vscode/index.html","a805d13bbb3cae2ff0b45bc24c56b8bd"],["/tags/vue3/index.html","52308c04b5c5a374a940221a272f5ff1"],["/tags/zip/index.html","0d0c575b02357fc7e553f3bc472d971d"],["/tags/乱七八糟/index.html","dcd8b347c9d7d8517d3114f0dfbbd9b7"],["/tags/初见/index.html","e4d5a21eb5d6dc75ea20b2ee1c14cf63"],["/tags/虚拟化/index.html","4e1668b4adb50cd8685a69c5f6be6f78"]];
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
