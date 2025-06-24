/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/10/08/环境配置/hexo搭建/hexo-test/index.html","b57a51120ea2d7e17cc271ed661058ae"],["/2024/10/08/环境配置/vmware/index.html","cd0d574550a060418b3929d84c82fed3"],["/2024/10/13/环境配置/dabian/index.html","210bd533a06f047680683859d2b44958"],["/2024/10/14/sqli-labs/sqli-labs-less_1,4,11/index.html","f6c18d3e77385327a366afca73f74fec"],["/2024/10/26/环境配置/vue/vue通过vite代理连接fastapi，从而解决没有Access-Control-Allow-Origin跨域问题/index.html","e084a0d6e56c6bbe0d64f5e45426b8d6"],["/2024/10/28/工具/py爆破zip脚本/index.html","1acd13286edb651cfeda6a8a0d5a302c"],["/2024/10/30/sqli-labs/sqli-labs-less_7,8/index.html","2b52ff555f0263276a42a547636d6bd5"],["/2024/11/07/环境配置/cmke_vsc_ipv6联机工具，测试版/index.html","ab0b70696ac58efa9e7f0c28c77220ae"],["/2024/11/07/环境配置/vue/v-for中控制特定元素/index.html","90fea83a0b6c624f0a5697be574cce19"],["/2024/11/08/学/bottle_反序列化/index.html","81b11988aff0cb098c165e26a2b6794e"],["/2024/11/08/学/二叉数非递归遍历/index.html","91886174565e3d770986a52be140a082"],["/2024/11/08/工具/进程使用端口记录/index.html","a3764f28436be3f9b4cc959e84b1f1a3"],["/2024/11/10/环境配置/hexo搭建/hexo-neat不能压缩部分js文件-解决/index.html","404a9482545d22b71a2c4575099b5915"],["/2024/11/11/环境配置/hexo搭建/Hexo的md解析器将半角单引号转换成全角/index.html","4ae505b03240611340b0640d2f1a38ed"],["/2024/11/12/学/php_rce/rce_me/index.html","f208c8c1ec1773cdc3e20901b7abcd5d"],["/2024/11/20/sqli-labs/sqli-labs-less-1-10/index.html","c870828547943e6245a70f83dc369d84"],["/2024/11/22/sqli-labs/sqli-labs-less-11-22/index.html","8cd3c0ae0c05cd9f070218affa1dc4d6"],["/2024/11/24/sqli-labs/sqli-labs-less-23-27/index.html","11e7fe03204d33507f171838f8cb23ba"],["/2024/11/28/sqli-labs/sqli-labs-less-28-37/index.html","bbbfdf726b35478778956a3e01b9ab21"],["/2024/12/04/sqli-labs/sqli-labs-less-35-45/index.html","349bad9a1b9d75d121ea29509aba9e01"],["/2024/12/07/upload-labs/upload-labs-1_5/index.html","c49ca66b8816737e1688572a0f5536ea"],["/2025/02/07/环境配置/qemu/kvm-win10/index.html","90499d9aa692131d50521ded6773352f"],["/2025/03/12/环境配置/配置php-debug/index.html","585418cfb3fb2fbfccf4b4074a92aa3b"],["/2025/03/15/学/crt/index.html","386b439ae18c0ce5c6d299636d0f27e4"],["/2025/04/20/sqli-labs/ezsql[xyctf2025]/index.html","89d8116cf9ee43ed8d7ee824e7f7494e"],["/2025/05/03/学/php_rce/php_无参rce/index.html","3426a714461594d564d88195f01fa02c"],["/2025/05/10/学/encode/index.html","3add57da8726aae61c87a165aaa5bf4f"],["/2025/05/10/环境配置/安卓调试环境/index.html","57bb81979f8233c63b3aee8087fae8ed"],["/archives/2024/10/index.html","72ba7eddfd1ee17f80c8b528bd3d0d6e"],["/archives/2024/11/index.html","0c2881dfc0a229ddb63f5872a7191f9d"],["/archives/2024/11/page/2/index.html","7bb6a3324a3340db2d0eb1fe7860b124"],["/archives/2024/12/index.html","8ca7c3bac1b8726a1a208614dbc13afd"],["/archives/2024/index.html","94d1f5213e3c576b95ec82d85c68c952"],["/archives/2024/page/2/index.html","1ed4abb59f2edb890fa6aaa9e806201c"],["/archives/2024/page/3/index.html","46a242a2cf7168119e1bec79025e47c5"],["/archives/2025/02/index.html","1840ac0fbe89576404dbc99ebb4377c8"],["/archives/2025/03/index.html","998b69a12db598fd2ecd83ae18b69a87"],["/archives/2025/04/index.html","847a039b7cb68024141faca2babaa89a"],["/archives/2025/05/index.html","968374bd96fadd4d3287165be50a7399"],["/archives/2025/index.html","f9e6d189d536ffacf8da7666f99fa517"],["/archives/index.html","bc4d6554b560d3cf134ec53801accfea"],["/archives/page/2/index.html","499a53302f31a8534f27d4eebd48aaf1"],["/archives/page/3/index.html","e03746ac9b84a53a3527de615f47c34f"],["/categories/RCE/index.html","d13f315a2964678088ec23f1f1246359"],["/categories/RCE/php/index.html","e769253785e2fd58a4f99f2e136a49a3"],["/categories/index.html","12d4452800577e3fb3debf20c41e9518"],["/categories/sqli/index.html","a322c70ede43062bb5c1bcc65503a016"],["/categories/upload/index.html","457cf28f0bf0a6cafa62e724a652d077"],["/categories/乱分的/index.html","d7b41a1f698b3fdf6243c67643cc2d31"],["/categories/环境/index.html","319afde234917003966ef7e3d78f4053"],["/categories/环境/mobile/index.html","c99d24e31ec56b6584372de65c7eafc4"],["/css/main.css","25ed3d8ad05bd475a05ff5e88240d7a1"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.png","ec7a8c609cff0ea3c8f719ef379ed273"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/sqli-labs/20.jpg","1d1d981394f46d9e2d06086d4021b2b9"],["/images/sqli-labs/sqli-labs-less_1,4,11.png","5244113df53e42d393b5050e019559a1"],["/images/upload-labs/1.1.png","2211acaf339e4e08d2a45a5e5514024d"],["/images/upload-labs/pass-2.1.png","3e19419a4ae632c7f2313cf86e4f2c8c"],["/images/学/php_rce/1.png","43301ac6d960666237380cd07c96a5e7"],["/images/学/php_rce/2.png","a717e7cb7944d91ae39b946d56f8d927"],["/images/环境配置/hexo-neat/1.jpg","e20f70d47b59e1ff149a26dc9fffe577"],["/images/环境配置/hexo-neat/2.jpg","bf9bb7ce053f8fa2eb93506ba52c253b"],["/images/环境配置/ipv6connecttool/1.jpg","7764cdef9499b85a89281d9f68200c60"],["/images/环境配置/ipv6connecttool/2.jpg","b558fb722bd65f999f1baadf134896fc"],["/images/环境配置/ipv6connecttool/3.jpg","9aef281ce55e85869733acf624d904d2"],["/images/环境配置/ipv6connecttool/4.jpg","1c1be0ed45b13affbef1e7bea15807c4"],["/images/环境配置/ipv6connecttool/5.jpg","1594bddd580cf6f10eb05f3e417e3e5b"],["/images/环境配置/安卓调试环境/Use_sorce.png","3351cfab8c5beecded4cc6a17ccf5fdd"],["/images/环境配置/安卓调试环境/ida_so.png","a62e89c26176c179114999dce68bb31b"],["/images/环境配置/安卓调试环境/jadx_dbg.png","ab3b090c7244c6bf48ca8a2eb516b784"],["/index.html","168dca83c357876810aff3b5c62eb659"],["/js/algolia-search.js","4a62ead11973b0d2529897f2fe4e052b"],["/js/bookmark.js","c1b758ddba8859b02df17dc97f2e4e17"],["/js/local-search.js","40d5f44f5476dd99ff73a5462b1bca91"],["/js/motion.js","3b66b8d757d07f1a4292245564b10c9e"],["/js/next-boot.js","6f1adb0cfcfc79ae7e4c397000075377"],["/js/schemes/muse.js","198f345a8a2ceaf00c6376782ec3e75d"],["/js/schemes/pisces.js","4a67b67ebf4e61b760d60b41a2183bad"],["/js/utils.js","f515ce97773c40a4e977075cd46f358d"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","fc7b000462a8298a5f0fe4ef173444f6"],["/page/3/index.html","1a5245d6a4dcf29bc27afd0bdb3cfe9d"],["/sw-register.js","59a54be5f96f1ad4964ec68fe0a6d61e"],["/tags/RCE/index.html","98acdf62fe178bae1b17b43f983702bd"],["/tags/bash/index.html","794ac827570206e71114af7a8cefae70"],["/tags/bottle/index.html","5ddafc2a1c5ed8e08cc7663bf3540858"],["/tags/c/index.html","9acd9a2c2d45071d0edb8d20b9d634bb"],["/tags/cmake/index.html","b76e53eab9f6348a2e86fbe4dd80e11a"],["/tags/deb/index.html","2e1e05f4240c9fb909a343bb43b2f3ae"],["/tags/hexo/index.html","8361d6c90867fc87307dbcc45b9508f5"],["/tags/index.html","ccaf407e71aacc70e1775af9ed228db7"],["/tags/mobile/index.html","544b7ec7e8b5ee487d5d37366e054a33"],["/tags/php/index.html","e1fb6cf8c67c04e4e51cc6d418e081fc"],["/tags/pickle/index.html","363d8aae933f9c8e6393b1680ebb621b"],["/tags/python/index.html","08f47098c636f9a9cd5000b8d1d49e87"],["/tags/qemu/index.html","000793118d434061d5f7fa5e2e03f9df"],["/tags/re/index.html","22a791d8a26d3b2e1967436efb6fe19a"],["/tags/sqli/index.html","9a280e2ae7a993e14611d437a6c27da6"],["/tags/upload/index.html","e39772299248c549eb2cd126fe036663"],["/tags/vite/index.html","14c1ea056593166bc3a78529f0cbc5ba"],["/tags/vscode/index.html","6b765a502eccff5a9add89e80e17022a"],["/tags/vue3/index.html","c78859f4d2dbb1519d11951771a84f9b"],["/tags/zip/index.html","4af2e1079f6088ffa5a2efb066ff7445"],["/tags/初见/index.html","504af4cf436c52e752fc37297ccbe409"],["/tags/木大/index.html","0e1a27d1f7d4d2c0c87b6224e26005a7"],["/tags/虚拟机/index.html","f20cdd5e5ca15914d7e560f2fa49b743"]];
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
