/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/10/08/环境配置/hexo搭建/hexo-test/index.html","c09acf02cd9fa357563977aebe084ecf"],["/2024/10/08/环境配置/vmware/index.html","c61c29176920abfa29555c46ea315587"],["/2024/10/13/环境配置/dabian/index.html","0289767cbb67d62373d87db5828cb728"],["/2024/10/14/学/sqli-labs/sqli-labs-less_1,4,11/index.html","02c9c7ef97ecea956ae25081685358b4"],["/2024/10/26/环境配置/vue/vue通过vite代理连接fastapi，从而解决没有Access-Control-Allow-Origin跨域问题/index.html","51b94385af4e7aef2cc28af4d32093be"],["/2024/10/28/工具/py爆破zip脚本/index.html","fb4382a2081816fc8d210a43b649b3f1"],["/2024/10/30/学/sqli-labs/sqli-labs-less_7,8/index.html","f4b67a9b2e50089e78caba44e8e731b1"],["/2024/11/07/环境配置/cmke_vsc_ipv6联机工具，测试版/index.html","0b1c4dba5e8092750df3eb17cacc8028"],["/2024/11/07/环境配置/vue/v-for中控制特定元素/index.html","dad38af16d8f2980a6f167d3c7f4b976"],["/2024/11/08/学/bottle_反序列化/index.html","0ef98eaf1661dead24da88ad3c9963c2"],["/2024/11/08/学/二叉数非递归遍历/index.html","3944ddbb295783261b65866355ec67bc"],["/2024/11/08/工具/进程使用端口记录/index.html","aed76fc61cc966378bea4f1a5ac6c505"],["/2024/11/10/环境配置/hexo搭建/hexo-neat不能压缩部分js文件-解决/index.html","435145d1b2ae38a67f9686a74405a44f"],["/2024/11/11/环境配置/hexo搭建/Hexo的md解析器将半角单引号转换成全角/index.html","e594e38ff8b5b45d7cb537c67f6d0ffc"],["/2024/11/12/学/php_rce/rce_me/index.html","6a434bed2de5e17662ca822632d0cb65"],["/2024/11/20/学/sqli-labs/sqli-labs-less-1-10/index.html","6ce1b8cb9892fdcd78e18169d5fdc8be"],["/2024/11/22/学/sqli-labs/sqli-labs-less-11-22/index.html","e36c12eebc4733454e1ba0f55f32407f"],["/2024/11/24/学/sqli-labs/sqli-labs-less-23-27/index.html","52137515a2bac894b70940a4f43a9255"],["/2024/11/28/学/sqli-labs/sqli-labs-less-28-37/index.html","af8ddfa0c2b19c14209dc855e3339fa9"],["/2024/12/04/学/sqli-labs/sqli-labs-less-35-45/index.html","f733e9b74a9181e88fcde8aaaa817e93"],["/2024/12/07/学/upload-labs/upload-labs-1_5/index.html","a292c1c302a1811da3fb8a6de9fe3b70"],["/2025/02/07/环境配置/qemu/kvm-win10/index.html","92bbb57ece8b5cc794138b6454a5ad7e"],["/2025/04/20/学/sqli-labs/ezsql[xyctf2025]/index.html","2901ff63b00006ebfa46e17c4afc5df6"],["/2025/05/03/学/php_rce/php_无参rce/index.html","b278bae1172b2ae65a9e090922df1605"],["/2025/05/10/学/encode/index.html","2968c6afa31b32d9ea03bb6e64671457"],["/2025/05/10/环境配置/安卓调试环境/index.html","bce68e8bc20737d5fafdc1efdbf48666"],["/2025/05/12/环境配置/配置php-debug/index.html","c8bd7dd46194e79474276a73fd3b139e"],["/2025/08/16/学/SSTI/SSTI-flask-jinja/index.html","dd8da0f63b32af1572c8a34f7fb71c34"],["/2025/08/22/环境配置/intel单核显SR-IOV虚拟化直通/index.html","9fb9012055573d26dc29a0be8cbe1d6a"],["/archives/2024/10/index.html","0cbbdb2d71811a005b238d5c1c35ee11"],["/archives/2024/11/index.html","f2500c9436d63bbd61f2541105899c43"],["/archives/2024/11/page/2/index.html","1eceadeb554a41fc15a47179d0261fa9"],["/archives/2024/12/index.html","66efbe688f738d2082a0db2249154749"],["/archives/2024/index.html","a971056b1582982281a6a92dad4617d2"],["/archives/2024/page/2/index.html","0593f7c7b1393f277991db7357c093ad"],["/archives/2024/page/3/index.html","a7afb6ccf99ffbccaf113c24746ce90f"],["/archives/2025/02/index.html","3da6cbc3fac0054e00af7693ec3b45f7"],["/archives/2025/04/index.html","aaf6dc09da513e3d1ab9f3ab5f5bb313"],["/archives/2025/05/index.html","db7b832795ac925cdf8d33489aba2491"],["/archives/2025/08/index.html","6daaedb7cfeaf49c357942ce5bdaa484"],["/archives/2025/index.html","944358aa8645835b9ac44d4998ad3afe"],["/archives/index.html","ca6a34f2a227fbceebbb07e73f4c7b57"],["/archives/page/2/index.html","9669026f32e21de269ce870c5d91b88c"],["/archives/page/3/index.html","44e08076bb8fc4f030d6070b6866f7af"],["/categories/RCE/index.html","72148cec1762fce04470bd5bf48b3aad"],["/categories/RCE/php/index.html","cd6ba57d437497028090736dbfa411bf"],["/categories/index.html","de05f533f4e4f8cd6bbeaa5f766580fa"],["/categories/sqli/index.html","204d6e0eed8bfc505e48c0374f80e86f"],["/categories/upload/index.html","7f0ac55d65d166c2f273e38736d98aa0"],["/categories/乱分的/index.html","859689b6de5dde65ed94ad4e9a4f3732"],["/categories/环境/index.html","f56dc596fd38a65acfc4b3e7c5c6e32f"],["/categories/环境/mobile/index.html","88b3f1e0f2df342cffb31a81e911e6f9"],["/css/main.css","c02462ca721bcfe816977e55f4989dcf"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.png","ec7a8c609cff0ea3c8f719ef379ed273"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/学/php_rce/1.png","43301ac6d960666237380cd07c96a5e7"],["/images/学/php_rce/2.png","a717e7cb7944d91ae39b946d56f8d927"],["/images/学/sqli-labs/20.jpg","1d1d981394f46d9e2d06086d4021b2b9"],["/images/学/sqli-labs/sqli-labs-less_1,4,11.png","5244113df53e42d393b5050e019559a1"],["/images/学/upload-labs/1.1.png","2211acaf339e4e08d2a45a5e5514024d"],["/images/学/upload-labs/pass-2.1.png","3e19419a4ae632c7f2313cf86e4f2c8c"],["/images/环境配置/hexo-neat/1.jpg","e20f70d47b59e1ff149a26dc9fffe577"],["/images/环境配置/hexo-neat/2.jpg","bf9bb7ce053f8fa2eb93506ba52c253b"],["/images/环境配置/ipv6connecttool/1.jpg","7764cdef9499b85a89281d9f68200c60"],["/images/环境配置/ipv6connecttool/2.jpg","b558fb722bd65f999f1baadf134896fc"],["/images/环境配置/ipv6connecttool/3.jpg","9aef281ce55e85869733acf624d904d2"],["/images/环境配置/ipv6connecttool/4.jpg","1c1be0ed45b13affbef1e7bea15807c4"],["/images/环境配置/ipv6connecttool/5.jpg","1594bddd580cf6f10eb05f3e417e3e5b"],["/images/环境配置/安卓调试环境/Use_sorce.png","3351cfab8c5beecded4cc6a17ccf5fdd"],["/images/环境配置/安卓调试环境/ida_so.png","a62e89c26176c179114999dce68bb31b"],["/images/环境配置/安卓调试环境/jadx_dbg.png","ab3b090c7244c6bf48ca8a2eb516b784"],["/index.html","3c54448a94444b0413ed21b0b91f0bae"],["/js/algolia-search.js","0342478e0ebf1a9d06be655e8e46ba7e"],["/js/bookmark.js","49246c1f08944a417dd56b0c3661c922"],["/js/local-search.js","cd2bf989de9141da679b394fcd03d9cb"],["/js/motion.js","c482685d7aad9a512211b6c742e11656"],["/js/next-boot.js","9a02fc326e1819f859b2f534bf69681b"],["/js/schemes/muse.js","d14857fd4f96706957365117236f2222"],["/js/schemes/pisces.js","538aa56c2b894a80e90019ea7711e9f8"],["/js/utils.js","5ac00d352b5700fefc8178f7ad656e84"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","27bf71e9c644c2c983320fe598a25956"],["/page/3/index.html","55475a80a2f08fa5bbefd4c3248a32c8"],["/sw-register.js","4fb894371c038a23e1d7efc54a089694"],["/tags/RCE/index.html","a928ce97f2ab165a545aabe9d147b521"],["/tags/SSTI/index.html","ebe515c4fdd7de40f63a441bde461128"],["/tags/bash/index.html","7a51b7a4e9b05e9519d190c33b383cce"],["/tags/bottle/index.html","1e1ab01b085efa4dd12ca11e113f883a"],["/tags/c/index.html","7cb5a538f072653d42fdcf7e984165e6"],["/tags/cmake/index.html","e37c4eae211fc34e93922f08aff4f95d"],["/tags/deb/index.html","fec363da947053f08c63e4238ff5f404"],["/tags/hexo/index.html","020f446f1e3f1008b7ba874e6209c601"],["/tags/index.html","b257aba691c916ee1a5edf1834ea7b2b"],["/tags/mobile/index.html","80f196e9539e21ee53c025b7d3d7ecb3"],["/tags/php/index.html","72e0b4de380188d16fd43c0d6e3127dc"],["/tags/pickle/index.html","07b92693bd87a4117f2f2e68420faaae"],["/tags/py/index.html","93236a5c2619114f219c11dc9a6cd1b7"],["/tags/python/index.html","ac2fd949f53e0dbbbc6f297023bfa28a"],["/tags/qemu/index.html","5f8bec1ab83a5e3f86b8cfe1500baf55"],["/tags/re/index.html","1f1c0cccefe49bcde6b2e9747f717465"],["/tags/sqli/index.html","a8782b087a30bf4eda994de457fd9a13"],["/tags/upload/index.html","5f0ab6ce405fa489d93fe618515d9c00"],["/tags/vite/index.html","89b2a40db76affc84870dd8e32a72e71"],["/tags/vscode/index.html","c8770ac82f2ea1018b651706e8e1a701"],["/tags/vue3/index.html","579629dcb9ae5517ff5cac241177a91a"],["/tags/zip/index.html","aed0f26ef14eea32ec705deb52d110a3"],["/tags/初见/index.html","44304168b38277e3c3ea5a24febdf757"],["/tags/木大/index.html","fda8609fbeeb7ecf22b8fd66eb3242b9"],["/tags/虚拟机/index.html","98f07ebd79815fe34debcd17b71cbfc6"]];
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
