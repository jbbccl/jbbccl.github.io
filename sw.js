/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/10/08/环境配置/hexo搭建/hexo-test/index.html","58031b5d823bc554828b46e54464a2d1"],["/2024/10/08/环境配置/vmware/index.html","5fffa5d471be10612724fb4503e06b94"],["/2024/10/13/环境配置/dabian/index.html","2666b0e38e6c8c30519e8485889dbd66"],["/2024/10/14/学/sqli-labs/sqli-labs-less_1,4,11/index.html","936e9f176f323ccf6add2f74b4b18466"],["/2024/10/26/环境配置/vue/vue通过vite代理连接fastapi，从而解决没有Access-Control-Allow-Origin跨域问题/index.html","92ff3a8d87110d768987d5469d281999"],["/2024/10/28/工具/py爆破zip脚本/index.html","cc1fc25563959644a83351f3160e2298"],["/2024/10/30/学/sqli-labs/sqli-labs-less_7,8/index.html","2ea63e5fc5b09abd17422c77b7c41751"],["/2024/11/07/环境配置/cmke_vsc_ipv6联机工具，测试版/index.html","6270e433d35107c3f8f1c3e4b4e90e85"],["/2024/11/07/环境配置/vue/v-for中控制特定元素/index.html","0f4824324e5e89d2f0688a00ff985e3e"],["/2024/11/08/学/bottle_反序列化/index.html","cf14b5f59256949b9af176bf40081d5c"],["/2024/11/08/学/二叉数非递归遍历/index.html","0ef3c14d7bd82ab2ae48a487dfb0970a"],["/2024/11/08/工具/进程使用端口记录/index.html","231d37757f2cee4137fb7e6f1e8c340b"],["/2024/11/10/环境配置/hexo搭建/hexo-neat不能压缩部分js文件-解决/index.html","ca877d6c201331f36b9c449d200cedd0"],["/2024/11/11/环境配置/hexo搭建/Hexo的md解析器将半角单引号转换成全角/index.html","b4ea5ff012aaa8d7f3aefb7580a42e14"],["/2024/11/12/学/php_rce/rce_me/index.html","2974dde81d0c368748f16cd854329e3a"],["/2024/11/20/学/sqli-labs/sqli-labs-less-1-10/index.html","045885dcbfd471401e8da5c9f798ed5d"],["/2024/11/22/学/sqli-labs/sqli-labs-less-11-22/index.html","55d4132b7af205ce2525f164fd3e05b6"],["/2024/11/24/学/sqli-labs/sqli-labs-less-23-27/index.html","0ad285a7280d2fa211f34b3b1acbe06a"],["/2024/11/28/学/sqli-labs/sqli-labs-less-28-37/index.html","6ba66e47ae0dc6158135294db2aaa972"],["/2024/12/04/学/sqli-labs/sqli-labs-less-35-45/index.html","a92a31435a3d2f0fd45e6556897ec312"],["/2024/12/07/学/upload-labs/upload-labs-1_5/index.html","dbd20e52b9def1424fd9f9205c6eef6e"],["/2025/02/07/环境配置/qemu/kvm-win10/index.html","a6966fdefefab37d3c5b073111a68be4"],["/2025/04/20/学/sqli-labs/ezsql[xyctf2025]/index.html","462eac629bf4ece37da75df4973392f7"],["/2025/05/03/学/php_rce/php_无参rce/index.html","0f20b536e52f31db7dfcb6cdaa87fde6"],["/2025/05/10/学/encode/index.html","6aee02955ff9923521f64de16fda784f"],["/2025/05/10/环境配置/安卓调试环境/index.html","0f4f5a4274fa0ccf725a102fc8839d0c"],["/2025/05/12/环境配置/配置php-debug/index.html","c759525efb0f82055d36edb77157fc7e"],["/2025/08/16/学/SSTI/SSTI-flask-jinja/index.html","9b3e2939ce78496e8b4bfee8c6ac9abb"],["/2025/08/22/环境配置/intel单核显SR-IOV虚拟化直通/index.html","d2cfb3862b492d9b8d12c4fa50093bca"],["/archives/2024/10/index.html","1749df94edb5be4558e8785875766369"],["/archives/2024/11/index.html","fb77631a6becee44cee0257e4ab5b0d9"],["/archives/2024/11/page/2/index.html","a683d5a0205c2609089b199476baed76"],["/archives/2024/12/index.html","7714a4d18c39b8b90d8c1c9abf9be35f"],["/archives/2024/index.html","fcce8d2ca52ddc77071c64daa7ec3de0"],["/archives/2024/page/2/index.html","1e32f3cfd99e1939f93cec3caba4e391"],["/archives/2024/page/3/index.html","c13db3db8bb9a8a11cff559d4e0dd2e6"],["/archives/2025/02/index.html","9d477086a84b5c4d0122a6ff2ead03d3"],["/archives/2025/04/index.html","97d56d22ad7448793c7c57db2066b3e0"],["/archives/2025/05/index.html","7a0222824bc1b730595d5eaea1005a79"],["/archives/2025/08/index.html","f38f5f4dc34694e203c745ad95a3441a"],["/archives/2025/index.html","f5e1c55ec535c0e8b80939782a77477d"],["/archives/index.html","6470a9071f48f0efdd24a38d8020aa6d"],["/archives/page/2/index.html","932fbaa319bfbab651d03000fcda36b6"],["/archives/page/3/index.html","955f59852916618f489a81f42972c219"],["/categories/RCE/index.html","2c082a7dea6f7ca986c24da6d7848d3f"],["/categories/RCE/php/index.html","7114fde425755a260d431d73d44e0219"],["/categories/index.html","c5dd0fe05b4ccdce86a2e9d89391207f"],["/categories/sqli/index.html","20eb9ac3a3edd907185057a258b55622"],["/categories/upload/index.html","46ea320f866561c0510026f680468850"],["/categories/乱分的/index.html","cfc2c3e8ac80ab2612c176d9474cb3bf"],["/categories/环境/index.html","875c0b2c52d4647e34e3c4611402cad9"],["/categories/环境/mobile/index.html","6f1f9fc2bf95f770647294ffc2653235"],["/css/main.css","4bc578a7be86bb64d01863b06da88ab0"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.png","ec7a8c609cff0ea3c8f719ef379ed273"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/学/php_rce/1.png","43301ac6d960666237380cd07c96a5e7"],["/images/学/php_rce/2.png","a717e7cb7944d91ae39b946d56f8d927"],["/images/学/sqli-labs/20.jpg","1d1d981394f46d9e2d06086d4021b2b9"],["/images/学/sqli-labs/sqli-labs-less_1,4,11.png","5244113df53e42d393b5050e019559a1"],["/images/学/upload-labs/1.1.png","2211acaf339e4e08d2a45a5e5514024d"],["/images/学/upload-labs/pass-2.1.png","3e19419a4ae632c7f2313cf86e4f2c8c"],["/images/环境配置/hexo-neat/1.jpg","e20f70d47b59e1ff149a26dc9fffe577"],["/images/环境配置/hexo-neat/2.jpg","bf9bb7ce053f8fa2eb93506ba52c253b"],["/images/环境配置/ipv6connecttool/1.jpg","7764cdef9499b85a89281d9f68200c60"],["/images/环境配置/ipv6connecttool/2.jpg","b558fb722bd65f999f1baadf134896fc"],["/images/环境配置/ipv6connecttool/3.jpg","9aef281ce55e85869733acf624d904d2"],["/images/环境配置/ipv6connecttool/4.jpg","1c1be0ed45b13affbef1e7bea15807c4"],["/images/环境配置/ipv6connecttool/5.jpg","1594bddd580cf6f10eb05f3e417e3e5b"],["/images/环境配置/安卓调试环境/Use_sorce.png","3351cfab8c5beecded4cc6a17ccf5fdd"],["/images/环境配置/安卓调试环境/ida_so.png","a62e89c26176c179114999dce68bb31b"],["/images/环境配置/安卓调试环境/jadx_dbg.png","ab3b090c7244c6bf48ca8a2eb516b784"],["/index.html","478584b75fdbb9bc74f1c7fdb0a20ddc"],["/js/algolia-search.js","0342478e0ebf1a9d06be655e8e46ba7e"],["/js/bookmark.js","49246c1f08944a417dd56b0c3661c922"],["/js/local-search.js","cd2bf989de9141da679b394fcd03d9cb"],["/js/motion.js","c482685d7aad9a512211b6c742e11656"],["/js/next-boot.js","9a02fc326e1819f859b2f534bf69681b"],["/js/schemes/muse.js","d14857fd4f96706957365117236f2222"],["/js/schemes/pisces.js","538aa56c2b894a80e90019ea7711e9f8"],["/js/utils.js","5ac00d352b5700fefc8178f7ad656e84"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","24c81ae0485ef48c26951d28415e643a"],["/page/3/index.html","95701bc16a8424143c613b80502bd30f"],["/sw-register.js","7f989731d0164e9852dc6401b8a8ed5b"],["/tags/RCE/index.html","228e9fec767f394d0e89ff63beb93e2c"],["/tags/SSTI/index.html","dc49945b06c5298d2ab73c6b4c5936d9"],["/tags/bash/index.html","e8b3f9903d2868d2b3a6da16ffd8f2c4"],["/tags/bottle/index.html","dc0e2ae51eea4213e3c0054986b946a2"],["/tags/c/index.html","d2263102e79cb05a8b0e23b584e7c36c"],["/tags/cmake/index.html","2f507a54c7d7b3e6d9cdd67092fed651"],["/tags/deb/index.html","449c9f79391d16c941dea909aa940105"],["/tags/hexo/index.html","3a1f4538daee06db3a801f7f15e7f4e7"],["/tags/index.html","647a14d1005d6033f76cf8f60931abc6"],["/tags/mobile/index.html","5f0bc7c1380d15d8ae528e793259825d"],["/tags/php/index.html","a690f88572e09f33ed98a5988358d421"],["/tags/pickle/index.html","a0ee2420efa5083cb720d6d8f45cdc76"],["/tags/py/index.html","b753f83ebb242dd7d0f6ff2cb55c90f1"],["/tags/python/index.html","b9b3c4090f60f16cdc3e04e9732e06de"],["/tags/qemu/index.html","da40427b747d5b791d1321700861a749"],["/tags/re/index.html","42f54436e2ff95bb18807a4603eda749"],["/tags/sqli/index.html","59475265e4b491858ad12213766159f4"],["/tags/upload/index.html","0d8b8aa1ee9b37eb8a093fcead84c9d3"],["/tags/vite/index.html","6c9078e7cb5deb1228bd0a7d683f3645"],["/tags/vscode/index.html","2d60257a50ebd6224ca77df619e3b51b"],["/tags/vue3/index.html","541bb53faa750f851617bdffe1bb1d15"],["/tags/zip/index.html","386c4dc0e411cf76e8104a4fd2fa81fa"],["/tags/初见/index.html","ba1a8005995ecb09698f5e156976be17"],["/tags/木大/index.html","497afcd4741fabe14bb6e0027ca89fd3"],["/tags/虚拟机/index.html","a05c04426149d9733115165a7191e47d"]];
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
