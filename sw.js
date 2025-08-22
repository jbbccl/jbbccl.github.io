/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/10/08/环境配置/hexo搭建/hexo-test/index.html","77bca8a22ee3c2870510e9057df12332"],["/2024/10/08/环境配置/vmware/index.html","a449a6992b5c29f527e5d386b492ce2c"],["/2024/10/13/环境配置/dabian/index.html","c7ea528e32af20f4e27ba89534ee36ba"],["/2024/10/14/学/sqli-labs/sqli-labs-less_1,4,11/index.html","fad488e744d832bdf0378fe9c0e1d4e4"],["/2024/10/26/环境配置/vue/vue通过vite代理连接fastapi，从而解决没有Access-Control-Allow-Origin跨域问题/index.html","9db5a677dfdb11672c2760a47a960747"],["/2024/10/28/工具/py爆破zip脚本/index.html","260cbeb081b133e34ee5bcf161d93cdb"],["/2024/10/30/学/sqli-labs/sqli-labs-less_7,8/index.html","03a0894d72febac8776b9b7a8bc0de41"],["/2024/11/07/环境配置/cmke_vsc_ipv6联机工具，测试版/index.html","2c9ce54e1c26583c123c4eabb3c0ede3"],["/2024/11/07/环境配置/vue/v-for中控制特定元素/index.html","b68980a349b1165052fc90951be9b169"],["/2024/11/08/学/bottle_反序列化/index.html","5ea457d5765e28318a945a825561ef57"],["/2024/11/08/学/二叉数非递归遍历/index.html","b4baf18c0ebd85780d34d7e25fc947ea"],["/2024/11/08/工具/进程使用端口记录/index.html","188a69f3113c67ab69167ff346220bb3"],["/2024/11/10/环境配置/hexo搭建/hexo-neat不能压缩部分js文件-解决/index.html","028aae7cc6f2bb4e6f3bbd0ea8c8e783"],["/2024/11/11/环境配置/hexo搭建/Hexo的md解析器将半角单引号转换成全角/index.html","99f9c5521c0438ecdddd1e2ea0b1a4e9"],["/2024/11/12/学/php_rce/rce_me/index.html","164c91f100ecb24f88832c5180fb3aba"],["/2024/11/20/学/sqli-labs/sqli-labs-less-1-10/index.html","7ca0eed664f803b2b797462dd9b7fa43"],["/2024/11/22/学/sqli-labs/sqli-labs-less-11-22/index.html","2bf2c1dc02c1db0a7ffecfb7190ce100"],["/2024/11/24/学/sqli-labs/sqli-labs-less-23-27/index.html","8722329e46f8c499cd654306b2c69a54"],["/2024/11/28/学/sqli-labs/sqli-labs-less-28-37/index.html","1bdbe759a33cabdd887938fc6316d23f"],["/2024/12/04/学/sqli-labs/sqli-labs-less-35-45/index.html","45a3adf875b74785d0d362d6701580b7"],["/2024/12/07/学/upload-labs/upload-labs-1_5/index.html","073aa074d36ffeb40be2f0323d0cddd1"],["/2025/04/20/学/sqli-labs/ezsql[xyctf2025]/index.html","d4f7063e1538f8137c61f75f9512325b"],["/2025/05/03/学/php_rce/php_无参rce/index.html","704cbeb0937e7eed96df6ed750c8e9e7"],["/2025/05/10/学/encode/index.html","86c08ac3961f1a06f804323f238debe0"],["/2025/05/10/环境配置/安卓调试环境/index.html","cac6f4c68afb0af9c66bb65c158916fa"],["/2025/05/12/环境配置/配置php-debug/index.html","fa3ca115b3e4ad56e393556a5fb74153"],["/2025/08/16/学/SSTI/SSTI-flask-jinja/index.html","6ec4811123d4abb952dbcd9cb0542669"],["/archives/2024/10/index.html","e0d0688563eff3cdc5de245e3ac59cb1"],["/archives/2024/11/index.html","dc9c2080e8748fc9eeedc1018b2961ec"],["/archives/2024/11/page/2/index.html","2f663056df40c4e8e0646c6e5eeaa0e1"],["/archives/2024/12/index.html","e6a67251ea5a480f2eea9f598b14864f"],["/archives/2024/index.html","8a5cd2e704cfafc2ac82bc0df030edf7"],["/archives/2024/page/2/index.html","4607383118ee2fd8dae943cd9601665e"],["/archives/2024/page/3/index.html","cc86e7f4bf0ded32141bed22df8eab97"],["/archives/2025/04/index.html","599f7fe228468295f9326194fa8ff7ab"],["/archives/2025/05/index.html","1aee0e0c57a0000ffb476df500256142"],["/archives/2025/08/index.html","c9ef8e02b9c4fdae3d484a7881061dd2"],["/archives/2025/index.html","76e4250bcbddb70af8fa38309bf52401"],["/archives/index.html","eea278558be59d036043ef886f2b97b1"],["/archives/page/2/index.html","070f3aace640cef3a73dd1f18a3499fb"],["/archives/page/3/index.html","bdfc2a7f673c709fefe51bdf5bce1c88"],["/categories/RCE/index.html","6b7a61e6daa5be4c2b64b837f20f0b74"],["/categories/RCE/php/index.html","e585f38dbccb554a36147ebd3ae42b95"],["/categories/index.html","3bb443633af79749c2abcdfc8108ebb2"],["/categories/sqli/index.html","ee315f172b17711ab5cfefedbe4a734a"],["/categories/upload/index.html","3321ab4c4066e063925a1cf73b12ae12"],["/categories/乱分的/index.html","7b367ed6f2226bf48996287eb2ffb3fb"],["/categories/环境/index.html","273975e621af52c36d464c6625b60032"],["/categories/环境/mobile/index.html","827a9b2be50ab47c26342835109f2147"],["/css/main.css","2ae4e3630cba4189baf7d4504fbf90ed"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.png","ec7a8c609cff0ea3c8f719ef379ed273"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/学/php_rce/1.png","43301ac6d960666237380cd07c96a5e7"],["/images/学/php_rce/2.png","a717e7cb7944d91ae39b946d56f8d927"],["/images/学/sqli-labs/20.jpg","1d1d981394f46d9e2d06086d4021b2b9"],["/images/学/sqli-labs/sqli-labs-less_1,4,11.png","5244113df53e42d393b5050e019559a1"],["/images/学/upload-labs/1.1.png","2211acaf339e4e08d2a45a5e5514024d"],["/images/学/upload-labs/pass-2.1.png","3e19419a4ae632c7f2313cf86e4f2c8c"],["/images/环境配置/hexo-neat/1.jpg","e20f70d47b59e1ff149a26dc9fffe577"],["/images/环境配置/hexo-neat/2.jpg","bf9bb7ce053f8fa2eb93506ba52c253b"],["/images/环境配置/ipv6connecttool/1.jpg","7764cdef9499b85a89281d9f68200c60"],["/images/环境配置/ipv6connecttool/2.jpg","b558fb722bd65f999f1baadf134896fc"],["/images/环境配置/ipv6connecttool/3.jpg","9aef281ce55e85869733acf624d904d2"],["/images/环境配置/ipv6connecttool/4.jpg","1c1be0ed45b13affbef1e7bea15807c4"],["/images/环境配置/ipv6connecttool/5.jpg","1594bddd580cf6f10eb05f3e417e3e5b"],["/images/环境配置/安卓调试环境/Use_sorce.png","3351cfab8c5beecded4cc6a17ccf5fdd"],["/images/环境配置/安卓调试环境/ida_so.png","a62e89c26176c179114999dce68bb31b"],["/images/环境配置/安卓调试环境/jadx_dbg.png","ab3b090c7244c6bf48ca8a2eb516b784"],["/index.html","e2a018fd31a4b308aeda8bb62ff0ac1c"],["/js/algolia-search.js","0342478e0ebf1a9d06be655e8e46ba7e"],["/js/bookmark.js","49246c1f08944a417dd56b0c3661c922"],["/js/local-search.js","cd2bf989de9141da679b394fcd03d9cb"],["/js/motion.js","c482685d7aad9a512211b6c742e11656"],["/js/next-boot.js","9a02fc326e1819f859b2f534bf69681b"],["/js/schemes/muse.js","d14857fd4f96706957365117236f2222"],["/js/schemes/pisces.js","538aa56c2b894a80e90019ea7711e9f8"],["/js/utils.js","5ac00d352b5700fefc8178f7ad656e84"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","12b8501ccf2e6b3bd39b1a91f4695a9c"],["/page/3/index.html","0af53fa759ae87e9b78a540debd9c0cb"],["/sw-register.js","1bf57e6ea1f73d60bf028c1dc6b648e5"],["/tags/RCE/index.html","325eb7fff9574987b1a919d646255bf7"],["/tags/SSTI/index.html","91311b336716579d648442caad414fb2"],["/tags/bash/index.html","9a627b99828af228b175240419987d2b"],["/tags/bottle/index.html","a259a9130807ce9ef5286b7b67b19286"],["/tags/c/index.html","7230fa4347191c8e7d90248b7e38a3e3"],["/tags/cmake/index.html","00b0493b6e45302eddc81c70836540cd"],["/tags/deb/index.html","e62701a06dc7aeba87d1dfad0151fc69"],["/tags/hexo/index.html","33a2ba2cf0d94b3f2ea69321f6c7b4df"],["/tags/index.html","7911c5d5d986311565d334c3435aa09a"],["/tags/mobile/index.html","569d1041c072134dc435f734ae60a82b"],["/tags/php/index.html","bad9995c11358ea87ceca74ed13fd116"],["/tags/pickle/index.html","07214709506a7a467ff0ccdef50e2173"],["/tags/py/index.html","19661c5199f55ee14387372c1d8805de"],["/tags/python/index.html","bf894eeecc7b8a6b63e422e4d1715c93"],["/tags/re/index.html","252448bffb591b88d85a68334e79da2c"],["/tags/sqli/index.html","51c78138deccedbd51a036211f26d0e2"],["/tags/upload/index.html","e9b2e48fd9447de2188bcbe594901a54"],["/tags/vite/index.html","fb1e9b0f8a8bfba6e34cf97a7c676d74"],["/tags/vscode/index.html","763570ead769b65ca355243b13ce504a"],["/tags/vue3/index.html","3b4548d4ca28187ecd18af3bca26cf19"],["/tags/zip/index.html","2f5d6f0d39153fd5af2517f9d798e64c"],["/tags/初见/index.html","0f5703487113f87c145a9db8e72131dc"],["/tags/木大/index.html","bfea9fbdd8fd388bd230832b1865a209"],["/tags/虚拟机/index.html","ba1e0322dc70969ce8167b0eb61864d6"]];
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
