/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/10/08/enviroment/hexo搭建/hexo-test/index.html","c4addcaa0551d95e8438e74a33f1cd3e"],["/2024/10/08/enviroment/vmware/index.html","ce805593f40e0d0435d199dd42fd37b5"],["/2024/10/13/enviroment/dabian/index.html","0180d8d67a289222ecb9d0adc3a333bb"],["/2024/10/14/web/sqli-labs/sqli-labs-less_1,4,11/index.html","202c2e3748efd90e8e38ef64e46a000e"],["/2024/10/26/enviroment/vue/vue通过vite代理连接fastapi，从而解决没有Access-Control-Allow-Origin跨域问题/index.html","cc2d84467d4cd14dcaee96109bdec8f2"],["/2024/10/28/misc/py爆破zip脚本/index.html","731aa68934c8bc3f1da74312f5a5e127"],["/2024/10/30/web/sqli-labs/sqli-labs-less_7,8/index.html","481a857bae9a59fdfc1a403722e3202b"],["/2024/11/07/enviroment/cmke_vsc_ipv6联机工具，测试版/index.html","58655f5a2d939784796b721aecdcdaa0"],["/2024/11/07/enviroment/vue/v-for中控制特定元素/index.html","02c060ec15522332edb2e5261459af1e"],["/2024/11/08/misc/二叉数非递归遍历/index.html","ebd7d5d5116bcfea565cd8e125bbad62"],["/2024/11/08/misc/进程使用端口记录/index.html","0e1719927b61ef5b87fa263b886d78a8"],["/2024/11/08/web/python/unser_bottle_反序列化/index.html","238bccba6833c7936939da624a3375d6"],["/2024/11/10/enviroment/hexo搭建/hexo-neat不能压缩部分js文件-解决/index.html","e834df470ef970359702ac19266a5c48"],["/2024/11/11/enviroment/hexo搭建/Hexo的md解析器将半角单引号转换成全角/index.html","9bdc780833ea686dbfde74de6604869f"],["/2024/11/12/web/php/rce_me/index.html","1a553aa42b63a4a6d0049e615280a91a"],["/2024/11/20/web/sqli-labs/sqli-labs-less-1-10/index.html","6bc46c77a37b3eccd38a5c4f04dbcd2d"],["/2024/11/22/web/sqli-labs/sqli-labs-less-11-22/index.html","5a898f170d8e15c8b8da4dffd4e94928"],["/2024/11/24/web/sqli-labs/sqli-labs-less-23-27/index.html","5dbfc48936657103bd511511bd94ea66"],["/2024/11/28/web/sqli-labs/sqli-labs-less-28-37/index.html","17e14d5a354b655104145231b533abeb"],["/2024/12/04/web/sqli-labs/sqli-labs-less-35-45/index.html","c71368ad6c5ee1dcc07aace6943c433d"],["/2024/12/07/web/upload-labs/upload-labs/index.html","1072ad63fbc444f5ec894fae4129a717"],["/2025/04/20/web/sqli-labs/ezsql[xyctf2025]/index.html","aa12220cb9d874823e060a091463db06"],["/2025/05/03/web/php/rce_php_无参rce/index.html","189b3c5810affabdea0608a161987832"],["/2025/05/10/enviroment/安卓调试环境/index.html","dac1e28afa5bb6323884b5117280c661"],["/2025/05/10/misc/encode/index.html","e64fc542e4272052f526d17688f5c457"],["/2025/05/12/enviroment/配置php-debug/index.html","2da0772dba8e8f4804b160e18e98bfc7"],["/2025/08/16/web/python/SSTI-flask-jinja/index.html","4944ad4936e0400d437ed4fba6cc876d"],["/2025/08/22/enviroment/intel单核显SR-IOV虚拟化直通/index.html","7c364aacd07d718d6f605a517f21f8ff"],["/2025/10/23/web/php/rce_php长度限制_字符限制/index.html","7fcde2b7d8fee296a1257721793fb94a"],["/2025/10/29/web/php/pop_self/index.html","3f0c98c7ac9206a0bb592e34dc78d87f"],["/archives/2024/10/index.html","d62300a76e0aed0f3389f2e75e817ba2"],["/archives/2024/11/index.html","a9375fcceba2d4786775c56643bdc237"],["/archives/2024/11/page/2/index.html","b73408db140c8c5268f313ae7d8d6378"],["/archives/2024/12/index.html","eaa791127f5d17df6e40032a72460f3d"],["/archives/2024/index.html","1c6401ba6f673037faf97a915fa63512"],["/archives/2024/page/2/index.html","84ad5519d8ee3ddd6cc11a58b5b92e90"],["/archives/2024/page/3/index.html","42edda8daae2734bf1e959f314e98fe7"],["/archives/2025/04/index.html","8de9059b8465d3bc4127a9751f0bdef2"],["/archives/2025/05/index.html","30ce7dc1a838040f37d0256915c75cfb"],["/archives/2025/08/index.html","bcd911237e383610ef54d468164fdab6"],["/archives/2025/10/index.html","443cbb72addeccc59639422da8452f84"],["/archives/2025/index.html","413d06f0f899d7471242eb9abe452f02"],["/archives/index.html","913d40849fe67c8ffa0ddcc4efdd7268"],["/archives/page/2/index.html","0aae65858a9ad57c567069d2c1bb504f"],["/archives/page/3/index.html","70aa3d58168c48c5016914a3dbb5fee3"],["/categories/index.html","cf784762bffc2cbd9ac70af0b7b77271"],["/categories/php/RCE/index.html","894fac86459f81d76d0d18e59385d783"],["/categories/php/index.html","ae86fd6f6fe8ed11a22a39542c2e24a6"],["/categories/php/unserialize/index.html","dffd75b59b9d14fb41fb59f8044ba644"],["/categories/python/SSTI/index.html","808e05495a809a20597c9c3edf695846"],["/categories/python/index.html","d9445dbcad390dfc63e4a421589070f2"],["/categories/python/unserialize/index.html","e18a9233dcd125884bb14286df991bc7"],["/categories/python/unserialize/pickle/index.html","90163e1c4e49234b13db591d91d5713a"],["/categories/sqli/index.html","1899fd296a6f736c29ad827f4f3c11cc"],["/categories/upload/index.html","07ef7712fbd463d18634d9b52ae5e870"],["/categories/乱分的/index.html","fdb1eaa8e439f29a9fd4137a4a1c153e"],["/categories/环境/hexo/index.html","5c9e06a224c236ac0e6d48be3d60f762"],["/categories/环境/index.html","8144735d6830a9c51c4aeb98a4d7c08f"],["/categories/环境/mobile/index.html","1aa20aa3e42a30c69ba766b285ab0eee"],["/categories/环境/虚拟化/index.html","e39e53ebda15e2e54310b8afcb7a431e"],["/css/main.css","4d07a0aab092120a33478ae8204408f5"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.png","ec7a8c609cff0ea3c8f719ef379ed273"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/学/php_rce/1.png","43301ac6d960666237380cd07c96a5e7"],["/images/学/php_rce/2.png","a717e7cb7944d91ae39b946d56f8d927"],["/images/学/sqli-labs/20.jpg","1d1d981394f46d9e2d06086d4021b2b9"],["/images/学/sqli-labs/sqli-labs-less_1,4,11.png","5244113df53e42d393b5050e019559a1"],["/images/学/upload-labs/1.1.png","2211acaf339e4e08d2a45a5e5514024d"],["/images/学/upload-labs/pass-2.1.png","3e19419a4ae632c7f2313cf86e4f2c8c"],["/images/环境配置/hexo-neat/1.jpg","e20f70d47b59e1ff149a26dc9fffe577"],["/images/环境配置/hexo-neat/2.jpg","bf9bb7ce053f8fa2eb93506ba52c253b"],["/images/环境配置/ipv6connecttool/1.jpg","7764cdef9499b85a89281d9f68200c60"],["/images/环境配置/ipv6connecttool/2.jpg","b558fb722bd65f999f1baadf134896fc"],["/images/环境配置/ipv6connecttool/3.jpg","9aef281ce55e85869733acf624d904d2"],["/images/环境配置/ipv6connecttool/4.jpg","1c1be0ed45b13affbef1e7bea15807c4"],["/images/环境配置/ipv6connecttool/5.jpg","1594bddd580cf6f10eb05f3e417e3e5b"],["/images/环境配置/安卓调试环境/Use_sorce.png","3351cfab8c5beecded4cc6a17ccf5fdd"],["/images/环境配置/安卓调试环境/ida_so.png","a62e89c26176c179114999dce68bb31b"],["/images/环境配置/安卓调试环境/jadx_dbg.png","ab3b090c7244c6bf48ca8a2eb516b784"],["/index.html","418a716e759b477f399028740e96af18"],["/js/algolia-search.js","0342478e0ebf1a9d06be655e8e46ba7e"],["/js/bookmark.js","49246c1f08944a417dd56b0c3661c922"],["/js/local-search.js","cd2bf989de9141da679b394fcd03d9cb"],["/js/motion.js","c482685d7aad9a512211b6c742e11656"],["/js/next-boot.js","9a02fc326e1819f859b2f534bf69681b"],["/js/schemes/muse.js","d14857fd4f96706957365117236f2222"],["/js/schemes/pisces.js","538aa56c2b894a80e90019ea7711e9f8"],["/js/utils.js","5ac00d352b5700fefc8178f7ad656e84"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","d3fd451e5b8fea5cb79d9c5f1edbccdd"],["/page/3/index.html","4619014c9ce8a852b427c6f1e54c401e"],["/sw-register.js","023fd2162e6c2905ffc685f61236d035"],["/tags/RCE/index.html","77d8d690cec067448ae45d4251c90407"],["/tags/SSTI/index.html","a3cf1e26270b4bce1c421f226f9420a6"],["/tags/bash/index.html","7e33564aa5dc5948a99907dbf16ea5d7"],["/tags/bottle/index.html","701cd7529a2b11ceb746578263d1cea1"],["/tags/c/index.html","46546c88048fff9aa4420fd374749976"],["/tags/cmake/index.html","f1e86c1be96d0fb6f383de8341cebabe"],["/tags/deb/index.html","9db4c9bb550eef6a714bbbe22346459f"],["/tags/hexo/index.html","95869fc1daf37649bdd6f3c8d180858b"],["/tags/index.html","cbb65e36fd5fa69e2cf624c9f0c52cf7"],["/tags/mobile/index.html","26f73f71a510e8cf722f425454172937"],["/tags/php/index.html","41cd55250659d65b0cbfb269f820793a"],["/tags/pickle/index.html","33e5c0f5238fa326af4b2a28d4a4ebdf"],["/tags/pop/index.html","00af8ec94e908c506c106a0cf4514b83"],["/tags/python/index.html","fc791aae011d85e80864a583f75a23d4"],["/tags/rce/index.html","d6a7e5a5448f53fbe959e9002ff262e9"],["/tags/re/index.html","f9fcca9640118c5dbe944d3302bb170b"],["/tags/sqli/index.html","5c586559858fa513e89d603bfe0ef5a4"],["/tags/unserialize/index.html","dde7645b49bfa02cf444255835da1eae"],["/tags/upload/index.html","6ac720fe897329283128da548b97a5aa"],["/tags/vite/index.html","6ac09ebdaf02ca86b300b1d525700044"],["/tags/vscode/index.html","dc30a31fd448663b181a09a0ed925f38"],["/tags/vue3/index.html","50cd942a1c0643e1106e3f116ff25b9a"],["/tags/zip/index.html","9b2363c23670af8af22a1df645f79653"],["/tags/乱七八糟/index.html","fb38ddf19eaf7a94d87d6ea3ea89bca0"],["/tags/初见/index.html","236064cbed180f389a7de1fd16490b01"],["/tags/虚拟化/index.html","9bd0c27a8f6b0db2c34745faab541919"]];
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
